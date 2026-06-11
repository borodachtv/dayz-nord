import { NextResponse } from "next/server";
import { missingConfig } from "@/lib/auth";

export async function POST() {
  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
    return missingConfig("PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET");
  }

  return NextResponse.json({
    provider: "paypal",
    status: "not_implemented",
    next: "Create PayPal order and store pending order with Prisma."
  });
}

