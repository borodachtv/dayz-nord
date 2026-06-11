import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim();

  try {
    const users = await prisma.user.findMany({
      where: query
        ? {
            OR: [
              { steamId64: { contains: query, mode: "insensitive" } },
              { discordId: { contains: query, mode: "insensitive" } },
              { username: { contains: query, mode: "insensitive" } }
            ]
          }
        : undefined,
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        steamId64: true,
        discordId: true,
        username: true,
        role: true,
        bonusBalanceCents: true,
        bonusCurrency: true,
        createdAt: true,
        updatedAt: true
      },
      take: 50
    });

    return NextResponse.json({ users });
  } catch {
    return NextResponse.json({ users: [], error: "Database is not connected or migrations are not applied yet." }, { status: 200 });
  }
}
