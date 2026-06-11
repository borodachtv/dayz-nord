import { NextResponse } from "next/server";
import { missingConfig } from "@/lib/auth";

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY) return missingConfig("STRIPE_SECRET_KEY");

  return NextResponse.json({
    provider: "stripe",
    status: "not_implemented",
    next: "Create Stripe Checkout Session after validating product is non-gameplay."
  });
}

