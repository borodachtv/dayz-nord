"use client";

import { useEffect, useState } from "react";

type AdminUser = {
  id: string;
  steamId64: string | null;
  discordId: string | null;
  username: string | null;
  role: string;
  bonusBalanceCents: number;
  bonusCurrency: string;
};

function formatBonus(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "UAH" ? 0 : 2
  }).format(cents / 100);
}

export function AdminUsersPanel() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState("5");
  const [currency, setCurrency] = useState("EUR");
  const [message, setMessage] = useState("");

  async function loadUsers(nextQuery = query) {
    const response = await fetch(`/api/admin/users?q=${encodeURIComponent(nextQuery)}`, { cache: "no-store" });
    const data = (await response.json()) as { users: AdminUser[]; error?: string };
    setUsers(data.users);
    setMessage(data.error ?? "");
  }

  useEffect(() => {
    loadUsers("").catch(() => setMessage("Не удалось загрузить пользователей."));
  }, []);

  async function grantBonus(userId: string) {
    const response = await fetch("/api/admin/users/bonus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount: Number(amount), currency })
    });
    const data = (await response.json()) as { error?: string };
    setMessage(data.error ?? "Бонус начислен.");
    await loadUsers();
  }

  return (
    <section className="mt-8 border-t border-nord-border pt-8">
      <div className="mb-4">
        <h2 className="text-2xl font-black">Пользователи Steam</h2>
        <p className="mt-2 text-sm text-nord-smoke">Здесь появляются пользователи, которые авторизовались через Steam. Можно найти по SteamID/нику и начислить бонусные средства.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_120px_120px_auto]">
        <input
          className="h-11 border border-nord-border bg-nord-night/60 px-3 text-nord-frost outline-none focus:border-nord-ice/60"
          placeholder="SteamID64 / username / Discord"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input
          className="h-11 border border-nord-border bg-nord-night/60 px-3 text-nord-frost outline-none focus:border-nord-ice/60"
          min="0"
          step="0.01"
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <select className="h-11 border border-nord-border bg-nord-night/60 px-3 text-nord-frost" value={currency} onChange={(event) => setCurrency(event.target.value)}>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
          <option value="PLN">PLN</option>
        </select>
        <button className="interactive-button border border-nord-ice/50 px-4 py-2 font-black text-nord-ice" type="button" onClick={() => loadUsers()}>
          Найти
        </button>
      </div>

      {message ? <p className="mt-4 text-sm text-nord-ice">{message}</p> : null}

      <div className="mt-5 grid gap-3">
        {users.map((user) => (
          <article key={user.id} className="interactive-card grid gap-3 border border-nord-border bg-nord-card/80 p-4 shadow-survival backdrop-blur-md md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-black">{user.username ?? "Steam user"}</h3>
              <p className="mt-1 text-sm text-nord-smoke">SteamID64: <span className="text-nord-ice">{user.steamId64 ?? "none"}</span></p>
              <p className="text-sm text-nord-smoke">Role: {user.role} · Bonus: <span className="text-nord-amber">{formatBonus(user.bonusBalanceCents, user.bonusCurrency)}</span></p>
            </div>
            <button className="interactive-button border border-nord-amber/60 bg-nord-amber px-4 py-2 font-black text-nord-night" type="button" onClick={() => grantBonus(user.id)}>
              Начислить бонус
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
