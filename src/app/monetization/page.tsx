import { PageShell } from "@/components/PageShell";

const points = [
  "Донаты не дают нечестного преимущества.",
  "Косметика не влияет на баланс, урон, лут, спавн, скорость или экономику.",
  "Покупки добровольные и предназначены для поддержки инфраструктуры.",
  "Доступ к основному контенту не блокируется донатом.",
  "Сервер должен быть зарегистрирован и одобрен Bohemia Interactive для монетизации."
] as const;

export default function MonetizationPage() {
  return (
    <PageShell>
      <main>
        <section className="relative isolate border-b border-nord-border bg-[url('/dayz-nord-hero.png')] bg-cover bg-center px-4 pb-20 pt-40 sm:px-6 lg:px-10">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-nord-night via-nord-night/80 to-nord-night/35" />
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-black uppercase text-nord-ice">Bohemia Interactive</p>
            <h1 className="max-w-5xl text-5xl font-black uppercase leading-none sm:text-7xl lg:text-8xl">Monetization Policy</h1>
            <p className="mt-6 max-w-2xl leading-7 text-nord-smoke">DayZ Nord соблюдает правила Bohemia Interactive для монетизации DayZ private shard серверов.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="border border-nord-border bg-nord-card/80 backdrop-blur-md p-6 text-lg font-bold shadow-survival">{point}</div>
            ))}
          </div>
          <a className="mt-8 inline-block text-nord-ice underline underline-offset-4" href="https://www.bohemia.net/monetization" target="_blank" rel="noreferrer">
            Официальные правила Bohemia Interactive
          </a>
        </section>
      </main>
    </PageShell>
  );
}

