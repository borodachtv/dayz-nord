import Link from "next/link";
import { CopyIpButton } from "@/components/CopyIpButton";
import { LiveServerStatus } from "@/components/LiveServerStatus";
import { PageShell } from "@/components/PageShell";
import { servers, team, whyNord } from "@/lib/site-data";

export default function HomePage() {
  const heroStats = [
    ["3", "active worlds"],
    ["100", "slots per server"],
    ["0", "pay-to-win items"]
  ] as const;

  return (
    <PageShell>
      <main>
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
          <div className="hero-pan absolute inset-0 -z-30 bg-[url('/dayz-nord-hero.png')] bg-cover bg-center" />
          <div className="noise absolute inset-0 -z-20 bg-gradient-to-r from-nord-night via-nord-night/70 to-nord-night/20" />
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_38%_58%,rgba(125,211,252,0.18),transparent_22rem)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-nord-night to-transparent" />
          <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div>
                <div className="reveal-up glow-pulse mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-nord-ice/50 bg-nord-night/70 p-2 text-3xl font-black text-nord-ice sm:h-36 sm:w-36">
                  <img className="h-full w-full rounded-full object-cover" src="/nord-logo.png" alt="DayZ Nord logo" />
                </div>
                <h1 className="reveal-up reveal-delay-1 max-w-5xl text-5xl font-black uppercase leading-none transition hover:text-nord-ice hover:drop-shadow-[0_0_24px_rgba(125,211,252,0.32)] sm:text-7xl lg:text-8xl">
                  DayZ Nord
                </h1>
                <p className="reveal-up reveal-delay-2 mt-5 max-w-2xl text-xl font-semibold text-nord-frost">DayZ Nord — hardcore survival server</p>
                <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-3">
                  <Link className="interactive-button nord-button-primary" href="/store">Магазин</Link>
                  <Link className="interactive-button nord-button-secondary" href="/cart">Корзина</Link>
                  <Link className="interactive-button nord-button-secondary" href="/login">Steam login</Link>
                  <Link className="interactive-button nord-button-secondary" href="/admin">Admin</Link>
                </div>
              </div>
              <aside className="reveal-up reveal-delay-3 nord-shell scanline hidden p-5 lg:block">
                <div className="relative">
                  <p className="text-xs font-black uppercase text-nord-ice">Nord command status</p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {heroStats.map(([value, label]) => (
                      <div key={label} className="border border-nord-border bg-nord-night/58 p-3">
                        <div className="text-3xl font-black text-nord-frost">{value}</div>
                        <div className="mt-1 text-[11px] font-bold uppercase leading-4 text-nord-smoke">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-nord-border pt-4 text-sm leading-6 text-nord-smoke">
                    Namalsk cold routes, moderated PvP, cosmetics-only support and a strict no gameplay advantage store.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="nord-kicker mb-3">Серверы</p>
            <h2 className="max-w-4xl text-4xl font-black leading-none sm:text-6xl">Выберите свой север</h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {servers.map((server) => (
                <article key={server.id} className="interactive-card nord-shell p-6">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase text-nord-smoke">
                    <span>{server.map}</span>
                    <span className={`inline-flex items-center gap-2 font-black ${server.status === "online" ? "text-nord-accent" : "text-nord-danger"}`}>
                      <span className="status-dot" />
                      {server.status}
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-2xl font-black">{server.name} | {server.subtitle}</h3>
                  <div className="mt-4">
                    <LiveServerStatus serverId={server.id} fallbackOnline={server.online} fallbackSlots={server.slots} fallbackStatus={server.status} />
                  </div>
                  <p className="mt-2 font-mono text-sm text-nord-ice">{server.ip}</p>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-nord-smoke">{server.description}</p>
                  <div className="relative mt-6 grid gap-2">
                    <CopyIpButton ip={server.ip} />
                    <Link className="interactive-button nord-button-primary" href={`/store?server=${server.id}`}>
                      Открыть магазин
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-nord-border bg-nord-steel/80 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="nord-kicker mb-3">Почему Nord</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {whyNord.map((item) => (
                <div key={item} className="interactive-card nord-shell min-h-28 p-5 font-black">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="nord-kicker mb-3">Команда</p>
            <div className="grid gap-4 lg:grid-cols-3">
              {team.map(([role, name, text]) => (
                <article key={role} className="interactive-card nord-shell p-6">
                  <span className="relative text-xs font-black uppercase text-nord-amber">{role}</span>
                  <h3 className="mt-5 text-2xl font-black">{name}</h3>
                  <p className="mt-4 leading-7 text-nord-smoke">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}



