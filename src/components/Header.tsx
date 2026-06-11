"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { labels, languages, type Language } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("RU");
  const t = labels[language];

  useEffect(() => {
    const saved = localStorage.getItem("dayz-nord-language");
    if (saved && languages.includes(saved as Language)) {
      setLanguage(saved as Language);
    }

    function update(event: Event) {
      setLanguage((event as CustomEvent<Language>).detail);
    }

    window.addEventListener("language:update", update);
    return () => window.removeEventListener("language:update", update);
  }, []);

  const translatedNav = [
    ["/", t.home],
    ["/store", t.store],
    ["/cart", t.cart],
    ["/login", t.login],
    ["/profile", t.profile],
    ["/admin", "Admin"]
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-nord-border bg-nord-night/88 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="interactive-link flex min-w-max items-center gap-3">
          <span className="glow-pulse grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-nord-ice/40 bg-nord-card/80 p-1 backdrop-blur-md">
            <img className="h-full w-full rounded-full object-cover" src="/nord-logo.png" alt="DayZ Nord logo" />
          </span>
          <span>
            <strong className="block leading-tight">DayZ Nord</strong>
            <small className="hidden text-xs uppercase leading-tight text-nord-smoke sm:block">Hardcore survival</small>
          </span>
        </Link>

        <button
          className="grid h-11 w-11 place-items-center border border-nord-border bg-nord-card/80 backdrop-blur-md lg:hidden"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-nord-frost" />
            <span className="block h-0.5 w-5 bg-nord-frost" />
            <span className="block h-0.5 w-5 bg-nord-frost" />
          </span>
        </button>

        <nav
          className={`absolute left-0 right-0 top-[69px] grid border-b border-nord-border bg-nord-night/95 px-4 py-3 backdrop-blur-xl transition lg:static lg:flex lg:translate-y-0 lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 ${
            open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-8 opacity-0 lg:pointer-events-auto lg:opacity-100"
          }`}
        >
          {translatedNav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="interactive-link border-b border-nord-border py-3 text-sm text-nord-smoke transition hover:text-nord-frost lg:border-0 lg:px-2.5 lg:py-2"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
            className="interactive-link py-3 text-sm font-bold text-nord-ice transition hover:text-nord-frost lg:px-2.5 lg:py-2"
          >
            {t.discord}
          </a>
          <div className="py-3 lg:py-0">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}

