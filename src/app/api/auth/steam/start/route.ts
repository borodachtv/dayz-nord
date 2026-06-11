import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const response = NextResponse.redirect(new URL("/profile", baseUrl));

  response.cookies.set(
    "dayz_nord_mock_user",
    JSON.stringify({
      steamId64: "76561198000000001",
      username: "NordSurvivor",
      role: "USER"
    }),
    {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    }
  );

  return response;
}
