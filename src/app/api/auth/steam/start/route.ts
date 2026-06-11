import { NextRequest, NextResponse } from "next/server";

function publicOrigin(request: NextRequest) {
  return process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin;
}

export async function GET(request: NextRequest) {
  const origin = publicOrigin(request);
  const returnTo = process.env.STEAM_OPENID_RETURN_URL ?? `${origin}/api/auth/steam/callback`;
  const realm = process.env.STEAM_OPENID_REALM ?? origin;

  const params = new URLSearchParams({
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.mode": "checkid_setup",
    "openid.return_to": returnTo,
    "openid.realm": realm,
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select"
  });

  return NextResponse.redirect(`https://steamcommunity.com/openid/login?${params.toString()}`);
}
