import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const claimedId = request.nextUrl.searchParams.get("openid.claimed_id");
  const steamId = claimedId?.match(/\/id\/(\d+)$|\/profiles\/(\d+)$/)?.slice(1).find(Boolean);

  return NextResponse.json({
    provider: "steam",
    status: "callback_received",
    steamId,
    next: "Verify OpenID assertion server-side before creating a session."
  });
}

