import { PageShell } from "@/components/PageShell";

export default function TermsPage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-4xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/terms</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Правила использования</h1>
        <div className="mt-10 grid gap-6 leading-7 text-nord-smoke">
          <p>Используя сайт и серверы DayZ Nord, игрок соглашается соблюдать правила сервера, правила общения и условия монетизации.</p>
          <p>Администрация может ограничить доступ за читы, эксплойты, токсичность, мошенничество с платежами или нарушение правил Bohemia Interactive.</p>
          <p>Покупки не гарантируют игровые преимущества и не заменяют соблюдение правил сервера.</p>
          <p>Возвраты и спорные платежи рассматриваются через Discord support ticket.</p>
        </div>
      </main>
    </PageShell>
  );
}

