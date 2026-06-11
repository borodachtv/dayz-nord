import { NextResponse } from "next/server";

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export function missingConfig(name: string) {
  return NextResponse.json({ error: `Missing ${name} environment variable` }, { status: 500 });
}

