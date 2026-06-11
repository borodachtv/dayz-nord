import { NextResponse } from "next/server";
import { missingConfig } from "@/lib/auth";

export async function POST() {
  if (!process.env.FONDY_MERCHANT_ID || !process.env.FONDY_SECRET_KEY) {
    return missingConfig("FONDY_MERCHANT_ID / FONDY_SECRET_KEY");
  }

  return NextResponse.json({
    provider: "fondy",
    status: "not_implemented",
    next: "Create Fondy checkout request and verify response signature."
  });
}

