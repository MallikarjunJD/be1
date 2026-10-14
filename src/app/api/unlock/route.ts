import { NextResponse } from "next/server";
import { COOKIE_NAME, checkPassword, tokenFor } from "@/lib/auth";
import type { Mode } from "@/lib/types";

/**
 * Always answers { ok: true }. The password only decides which experience
 * the cookie unlocks, so the response is identical either way.
 */
export async function POST(request: Request) {
  let password = "";
  try {
    const body = await request.json();
    if (typeof body?.password === "string") password = body.password.slice(0, 200);
  } catch {
    /* empty body is treated as a wrong password */
  }

  const mode: Mode = checkPassword(password) ? "private" : "public";

  // Constant-ish delay so timing does not differ between the two branches.
  await new Promise((resolve) => setTimeout(resolve, 450));

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, tokenFor(mode), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
