import { cookies } from "next/headers";
import { PageShell } from "@/components/PageShell";

const orders = [
  ["#DN-1001", "Priority Queue", "Pending"],
  ["#DN-1000", "Support Donation", "Paid"]
] as const;

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("dayz_nord_mock_user")?.value;
  const user = userCookie ? (JSON.parse(userCookie) as { steamId64: string; username: string; role: string }) : null;

  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/profile</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Личный кабинет</h1>
        {!user ? (
          <a className="mt-8 inline-block border border-nord-amber/60 bg-nord-amber px-5 py-3 font-black text-nord-night" href="/login">
            Войти через Steam mock
          </a>
        ) : null}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <section className="border border-nord-border bg-nord-card/80 p-6 shadow-survival backdrop-blur-md">
            <h2 className="text-2xl font-black">Steam mock</h2>
            <dl className="mt-5 grid gap-3 text-sm">
              <div><dt className="text-nord-smoke">SteamID64</dt><dd className="text-nord-ice">{user?.steamId64 ?? "not logged in"}</dd></div>
              <div><dt className="text-nord-smoke">Username</dt><dd className="text-nord-ice">{user?.username ?? "Guest"}</dd></div>
              <div><dt className="text-nord-smoke">Role</dt><dd className="text-nord-ice">{user?.role ?? "NONE"}</dd></div>
            </dl>
          </section>
          <section className="border border-nord-border bg-nord-card/80 p-6 shadow-survival backdrop-blur-md lg:col-span-2">
            <h2 className="text-2xl font-black">История покупок</h2>
            <div className="mt-5 grid gap-3">
              {orders.map(([id, name, status]) => (
                <div key={id} className="grid gap-2 border-t border-nord-border pt-3 sm:grid-cols-3">
                  <span>{id}</span>
                  <span className="text-nord-smoke">{name}</span>
                  <span className="text-nord-ice">{status}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="border border-nord-border bg-nord-card/80 p-6 shadow-survival backdrop-blur-md lg:col-span-2">
            <h2 className="text-2xl font-black">Активные услуги</h2>
            <p className="mt-4 text-nord-smoke">Priority Queue: inactive. Cosmetics: no active items.</p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
