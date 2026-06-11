"use client";

import { useEffect, useState } from "react";
import type { ServerId } from "@/lib/site-data";

type LiveServer = {
  id: ServerId;
  online: number;
  slots: number;
  status: "online" | "offline";
};

export function LiveServerStatus({ serverId, fallbackOnline, fallbackSlots, fallbackStatus }: {
  serverId: ServerId;
  fallbackOnline: number;
  fallbackSlots: number;
  fallbackStatus: "online" | "offline";
}) {
  const [server, setServer] = useState<LiveServer>({
    id: serverId,
    online: fallbackOnline,
    slots: fallbackSlots,
    status: fallbackStatus
  });

  useEffect(() => {
    let active = true;

    async function load() {
      const response = await fetch("/api/servers/live", { cache: "no-store" });
      const data = (await response.json()) as { servers: LiveServer[] };
      const next = data.servers.find((item) => item.id === serverId);
      if (active && next) setServer(next);
    }

    load().catch(() => undefined);
    const timer = window.setInterval(() => load().catch(() => undefined), 30000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [serverId]);

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-nord-smoke">
      <span>Онлайн {server.online}/{server.slots}</span>
      <span className={server.status === "online" ? "text-nord-accent" : "text-nord-danger"}>{server.status}</span>
    </div>
  );
}
