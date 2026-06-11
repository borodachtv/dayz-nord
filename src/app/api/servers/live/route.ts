import { NextResponse } from "next/server";
import { servers } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export async function GET() {
  const live = servers.map((server, index) => ({
    id: server.id,
    online: server.status === "online" ? Math.min(server.slots, (index + 1) * 7) : 0,
    slots: server.slots,
    status: server.status,
    checkedAt: new Date().toISOString()
  }));

  return NextResponse.json({ servers: live });
}
