import { NextResponse } from "next/server";
import { missingConfig, siteUrl } from "@/lib/auth";

export async function GET() {
  const clientId = process.env.DISCORD_CLIENT_ID;
  if (!clientId) return missingConfig("DISCORD_CLIENT_ID");

  const redirectUri = process.env.DISCORD_REDIRECT_URI ?? `${siteUrl()}/api/auth/discord/callback`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "identify email"
  });

  return NextResponse.redirect(`https://discord.com/oauth2/authorize?${params.toString()}`);
}

