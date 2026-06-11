import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-nord-border bg-nord-night/70 py-7 text-sm text-nord-smoke">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <span>DayZ Nord is an independent community server and is not affiliated with Bohemia Interactive.</span>
        <div className="flex flex-wrap gap-4">
          <Link className="text-nord-ice underline underline-offset-4" href="/privacy">Privacy</Link>
          <Link className="text-nord-ice underline underline-offset-4" href="/terms">Terms</Link>
          <Link className="text-nord-ice underline underline-offset-4" href="/monetization">Monetization</Link>
        </div>
      </div>
    </footer>
  );
}

