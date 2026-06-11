import Link from "next/link";
import { CopyIpButton } from "@/components/CopyIpButton";
import { LiveServerStatus } from "@/components/LiveServerStatus";
import { PageShell } from "@/components/PageShell";
import { servers, team, whyNord } from "@/lib/site-data";

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
          <div className="hero-pan absolute inset-0 -z-30 bg-[url('/dayz-nord-hero.png')] bg-cover bg-center" />
          <div className="noise absolute inset-0 -z-20 bg-gradient-to-r from-nord-night via-nord-night/75 to-nord-night/25" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-nord-night to-transparent" />
          <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-10">
            <div className="reveal-up glow-pulse mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-nord-ice/50 bg-nord-night/70 p-2 text-3xl font-black text-nord-ice sm:h-36 sm:w-36">
              <img className="h-full w-full rounded-full object-cover" src="/nord-logo.png" alt="DayZ Nord logo" />
            </div>
            <h1 className="reveal-up reveal-delay-1 max-w-5xl text-5xl font-black uppercase leading-none transition hover:text-nord-ice hover:drop-shadow-[0_0_24px_rgba(125,211,252,0.32)] sm:text-7xl lg:text-8xl">
              DayZ Nord
            </h1>
            <p className="reveal-up reveal-delay-2 mt-5 max-w-2xl text-xl font-semibold text-nord-frost">DayZ Nord — hardcore survival server</p>
            <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Link className="interactive-button border border-nord-amber/60 bg-nord-amber px-5 py-3 font-black text-nord-night" href="/store">Магазин</Link>
              <Link className="interactive-button border border-nord-border bg-nord-card/70 px-5 py-3 font-bold backdrop-blur-md" href="/cart">Корзина</Link>
              <Link className="interactive-button border border-nord-border bg-nord-card/70 px-5 py-3 font-bold backdrop-blur-md" href="/login">Steam mock</Link>
              <Link className="interactive-button border border-nord-border bg-nord-card/70 px-5 py-3 font-bold backdrop-blur-md" href="/admin">Admin</Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="mb-3 text-xs font-black uppercase text-nord-ice">Серверы</p>
            <h2 className="max-w-4xl text-4xl font-black leading-none sm:text-6xl">Выберите свой север</h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {servers.map((server) => (
                <article key={server.id} className="interactive-card border border-nord-border bg-nord-card/80 p-6 shadow-survival backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase text-nord-smoke">
                    <span>{server.map}</span>
                    <span className={server.status === "online" ? "text-nord-accent" : "text-nord-danger"}>{server.status}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{server.name} | {server.subtitle}</h3>
                  <div className="mt-4">
                    <LiveServerStatus serverId={server.id} fallbackOnline={server.online} fallbackSlots={server.slots} fallbackStatus={server.status} />
                  </div>
                  <p className="mt-2 text-sm text-nord-ice">{server.ip}</p>
                  <div className="mt-6 grid gap-2">
                    <CopyIpButton ip={server.ip} />
                    <Link className="interactive-button border border-nord-amber/60 bg-nord-amber px-4 py-3 text-center text-sm font-black text-nord-night" href={`/store?server=${server.id}`}>
                      Открыть магазин
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-nord-border bg-nord-steel py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="mb-3 text-xs font-black uppercase text-nord-ice">Почему Nord</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {whyNord.map((item) => (
                <div key={item} className="interactive-card border border-nord-border bg-nord-card/80 p-5 font-black shadow-survival backdrop-blur-md">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="mb-3 text-xs font-black uppercase text-nord-ice">Команда</p>
            <div className="grid gap-4 lg:grid-cols-3">
              {team.map(([role, name, text]) => (
                <article key={role} className="interactive-card border border-nord-border bg-nord-card/80 p-6 shadow-survival backdrop-blur-md">
                  <span className="text-xs font-black uppercase text-nord-amber">{role}</span>
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



