import { NextResponse } from "next/server";
import { missingConfig } from "@/lib/auth";

export async function POST() {
  if (!process.env.LIQPAY_PUBLIC_KEY || !process.env.LIQPAY_PRIVATE_KEY) {
    return missingConfig("LIQPAY_PUBLIC_KEY / LIQPAY_PRIVATE_KEY");
  }

  return NextResponse.json({
    provider: "liqpay",
    status: "not_implemented",
    next: "Sign LiqPay checkout payload and verify callback signature."
  });
}

