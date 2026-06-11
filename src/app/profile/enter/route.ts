import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const hasUser = Boolean(cookieStore.get("dayz_nord_user") ?? cookieStore.get("dayz_nord_mock_user"));

  return NextResponse.redirect(new URL(hasUser ? "/profile" : "/api/auth/steam/start", request.nextUrl.origin));
}
