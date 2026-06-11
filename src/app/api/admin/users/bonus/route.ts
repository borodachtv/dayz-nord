import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    userId?: string;
    amount?: number;
    currency?: string;
  };

  if (!body.userId || !body.amount || body.amount <= 0) {
    return NextResponse.json({ error: "User and positive amount are required." }, { status: 400 });
  }

  const cents = Math.round(body.amount * 100);

  try {
    const user = await prisma.user.update({
      where: { id: body.userId },
      data: {
        bonusBalanceCents: { increment: cents },
        bonusCurrency: body.currency ?? "EUR"
      },
      select: {
        id: true,
        steamId64: true,
        username: true,
        bonusBalanceCents: true,
        bonusCurrency: true
      }
    });

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ error: "Could not update bonus balance. Check PostgreSQL and Prisma migrations." }, { status: 500 });
  }
}
