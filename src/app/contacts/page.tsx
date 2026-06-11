import { PageShell } from "@/components/PageShell";

const contacts = [
  ["Discord", "discord.gg/dayznord", "https://discord.com/"],
  ["Email", "support@dayznord.example", "mailto:support@dayznord.example"],
  ["Telegram", "@dayznord", "https://t.me/dayznord"],
  ["TikTok / YouTube", "@dayznord", "https://www.youtube.com/"]
] as const;

export default function ContactsPage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/contacts</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Контакты</h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {contacts.map(([label, value, href]) => (
            <a key={label} className="border border-nord-border bg-nord-card/80 backdrop-blur-md p-6 shadow-survival transition hover:border-nord-ice/50" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span className="text-sm font-black uppercase text-nord-ice">{label}</span>
              <strong className="mt-3 block text-2xl">{value}</strong>
            </a>
          ))}
        </div>
      </main>
    </PageShell>
  );
}

