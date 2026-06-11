"use client";

import { useState } from "react";

export function CopyIpButton({ ip }: { ip: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(ip);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      className="border border-nord-border bg-nord-night/50 px-4 py-3 text-sm font-bold text-nord-ice"
      type="button"
      onClick={copy}
    >
      {copied ? "IP скопирован" : "Скопировать IP"}
    </button>
  );
}

