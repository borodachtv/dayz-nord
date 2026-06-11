import { PageShell } from "@/components/PageShell";

export default function LoginPage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/login</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Вход</h1>
        <p className="mt-5 max-w-2xl leading-7 text-nord-smoke">Авторизация проходит через Steam OpenID. После подтверждения Steam вернет тебя в личный кабинет.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a className="border border-nord-border bg-nord-card/80 backdrop-blur-md p-8 text-center text-2xl font-black text-nord-ice shadow-survival" href="/api/auth/steam/start">
            Войти через Steam
          </a>
          <div className="border border-nord-border bg-nord-card/80 p-8 text-nord-smoke shadow-survival backdrop-blur-md">
            Discord OAuth можно привязать позже как второй аккаунт для ролей и тикетов.
          </div>
        </div>
      </main>
    </PageShell>
  );
}

