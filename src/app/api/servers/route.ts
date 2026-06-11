import { NextResponse } from "next/server";
import { servers } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({ servers });
}

