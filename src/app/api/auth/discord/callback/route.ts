import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  return NextResponse.json({
    provider: "discord",
    status: code ? "callback_received" : "missing_code",
    next: "Exchange code for token, fetch Discord user, link it to Steam user and persist with Prisma."
  });
}

