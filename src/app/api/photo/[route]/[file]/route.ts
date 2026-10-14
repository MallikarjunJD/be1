import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { getMode } from "@/lib/auth";

const TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
};

const notFound = () => new Response("Not found", { status: 404 });

/**
 * Serves photos from /photos/public and /photos/private.
 * Private photos are only sent to someone on the private route; everyone
 * else gets a plain 404, so the folder's existence is not revealed.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ route: string; file: string }> }) {
  const { route, file } = await params;

  if (route !== "public" && route !== "private") return notFound();
  if (route === "private" && (await getMode()) !== "private") return notFound();

  // One plain file name only: no folders, no "..".
  if (!/^[\w][\w .\-()]*$/.test(file) || file.includes("..")) return notFound();
  const type = TYPES[path.extname(file).toLowerCase()];
  if (!type) return notFound();

  const root = path.join(process.cwd(), "photos", route);
  const full = path.join(root, file);
  if (!full.startsWith(root + path.sep)) return notFound();

  try {
    const info = await stat(full);
    if (!info.isFile()) return notFound();
    const body = Readable.toWeb(createReadStream(full)) as ReadableStream;
    return new Response(body, {
      headers: {
        "Content-Type": type,
        "Content-Length": String(info.size),
        "Cache-Control": route === "private" ? "private, max-age=3600" : "public, max-age=86400",
      },
    });
  } catch {
    return notFound();
  }
}
