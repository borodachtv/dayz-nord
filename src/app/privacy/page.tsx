import { PageShell } from "@/components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-4xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/privacy</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Политика конфиденциальности</h1>
        <div className="mt-10 grid gap-6 leading-7 text-nord-smoke">
          <p>DayZ Nord хранит только данные, необходимые для авторизации, поддержки, покупок и защиты сервера.</p>
          <p>Могут обрабатываться SteamID64, Discord ID, email, история заказов, платежный провайдер, статус заказа и технические журналы безопасности.</p>
          <p>Платежные данные карт не хранятся на DayZ Nord и обрабатываются Stripe, PayPal, LiqPay или Fondy.</p>
          <p>Запросы на удаление данных направляйте через Discord ticket или email support@dayznord.example.</p>
        </div>
      </main>
    </PageShell>
  );
}

