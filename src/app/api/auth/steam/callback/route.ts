import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function extractSteamId(claimedId: string | null) {
  return claimedId?.match(/\/openid\/id\/(\d+)$/)?.[1] ?? null;
}

export async function GET(request: NextRequest) {
  const verifyParams = new URLSearchParams(request.nextUrl.searchParams);
  verifyParams.set("openid.mode", "check_authentication");

  const verification = await fetch("https://steamcommunity.com/openid/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: verifyParams.toString()
  });

  const verificationText = await verification.text();
  const isValid = verificationText.includes("is_valid:true");
  const steamId64 = extractSteamId(request.nextUrl.searchParams.get("openid.claimed_id"));

  if (!isValid || !steamId64) {
    return NextResponse.redirect(new URL("/login?steam=failed", request.nextUrl.origin));
  }

  let storedUser: { steamId64: string | null; username: string | null; role: string; bonusBalanceCents: number; bonusCurrency: string } | null = null;
  try {
    storedUser = await prisma.user.upsert({
      where: { steamId64 },
      update: {
        username: `Steam ${steamId64}`
      },
      create: {
        steamId64,
        username: `Steam ${steamId64}`,
        role: "USER"
      },
      select: {
        steamId64: true,
        username: true,
        role: true,
        bonusBalanceCents: true,
        bonusCurrency: true
      }
    });
  } catch {
    storedUser = null;
  }

  const response = NextResponse.redirect(new URL("/profile?steam=success", request.nextUrl.origin));
  response.cookies.set(
    "dayz_nord_user",
    JSON.stringify({
      steamId64,
      username: storedUser?.username ?? `Steam ${steamId64}`,
      role: storedUser?.role ?? "USER",
      provider: "steam",
      bonusBalanceCents: storedUser?.bonusBalanceCents ?? 0,
      bonusCurrency: storedUser?.bonusCurrency ?? "EUR"
    }),
    {
      httpOnly: true,
      sameSite: "lax",
      secure: request.nextUrl.protocol === "https:",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    }
  );
  response.cookies.delete("dayz_nord_mock_user");

  return response;
}
