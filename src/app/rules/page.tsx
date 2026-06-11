import { PageShell } from "@/components/PageShell";
import { ruleGroups } from "@/lib/site-data";

export default function RulesPage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/rules</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Правила сервера</h1>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {ruleGroups.map(([group, rules]) => (
            <section key={group} className="border border-nord-border bg-nord-card/80 backdrop-blur-md p-6 shadow-survival">
              <h2 className="text-2xl font-black">{group}</h2>
              <ul className="mt-5 grid gap-3 text-nord-smoke">
                {rules.map((rule) => <li key={rule}>- {rule}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </PageShell>
  );
}

