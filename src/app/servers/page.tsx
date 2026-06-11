import Link from "next/link";
import { CopyIpButton } from "@/components/CopyIpButton";
import { LiveServerStatus } from "@/components/LiveServerStatus";
import { PageShell } from "@/components/PageShell";
import { servers } from "@/lib/site-data";

export default function ServersPage() {
  const maps = ["All", ...Array.from(new Set(servers.map((server) => server.map)))];

  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/servers</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Список серверов</h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {maps.map((map) => (
            <button key={map} className="border border-nord-border bg-nord-card/80 backdrop-blur-md px-4 py-2 text-sm font-bold text-nord-smoke" type="button">{map}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5">
          {servers.map((server) => (
            <article key={server.id} className="grid gap-6 border border-nord-border bg-nord-card/80 backdrop-blur-md p-6 shadow-survival lg:grid-cols-[1fr_280px]">
              <div>
                <div className="flex flex-wrap gap-3 text-xs uppercase text-nord-smoke">
                  <span>{server.map}</span>
                  <span>{server.mode}</span>
                  <LiveServerStatus serverId={server.id} fallbackOnline={server.online} fallbackSlots={server.slots} fallbackStatus={server.status} />
                </div>
                <h2 className="mt-5 text-3xl font-black">{server.name} | {server.subtitle}</h2>
                <p className="mt-4 leading-7 text-nord-smoke">{server.description}</p>
                <p className="mt-4 text-nord-ice">{server.ip}</p>
              </div>
              <div>
                <h3 className="font-black">Правила сервера</h3>
                <ul className="mt-3 grid gap-2 text-sm text-nord-smoke">
                  {server.rules.map((rule) => <li key={rule}>- {rule}</li>)}
                </ul>
                <div className="mt-5 grid gap-2">
                  <CopyIpButton ip={server.ip} />
                  <Link className="block border border-nord-amber/60 bg-nord-amber px-4 py-3 text-center font-black text-nord-night" href={`/store?server=${server.id}`}>
                    Открыть магазин
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </PageShell>
  );
}




