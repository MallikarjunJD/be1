import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { Mode } from "@/lib/types";

export const COOKIE_NAME = "journey";

const secret = () => process.env.SESSION_SECRET || "dev-secret-change-me";
const sha = (value: string) => createHash("sha256").update(value).digest();
const normalise = (value: string) => value.trim().toLowerCase();

/** True when the typed password matches UNLOCK_PASSWORD (case-insensitive). */
export function checkPassword(input: string): boolean {
  const expected = process.env.UNLOCK_PASSWORD || "seemalli";
  return timingSafeEqual(sha(normalise(input)), sha(normalise(expected)));
}

/** Opaque signed token. The cookie value never says which route it unlocks. */
export function tokenFor(mode: Mode): string {
  return createHmac("sha256", secret()).update(`journey:v1:${mode}`).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

/** Which experience this visitor has been given, or null before the unlock page. */
export async function getMode(): Promise<Mode | null> {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  if (!value) return null;
  if (safeEqual(value, tokenFor("private"))) return "private";
  if (safeEqual(value, tokenFor("public"))) return "public";
  return null;
}
