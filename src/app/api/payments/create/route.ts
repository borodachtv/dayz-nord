import { NextRequest, NextResponse } from "next/server";

const providers = ["stripe", "paypal", "liqpay", "fondy"] as const;

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    provider?: string;
    currency?: string;
    items?: Array<{ productId: string; quantity: number }>;
  };

  if (!body.provider || !providers.includes(body.provider as (typeof providers)[number])) {
    return NextResponse.json({ error: "Unsupported payment provider" }, { status: 400 });
  }

  if (!body.items?.length) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  return NextResponse.json({
    status: "pending",
    provider: body.provider,
    checkoutUrl: `/api/payments/${body.provider}`,
    next: "Create provider checkout session here, then redirect the user."
  });
}
