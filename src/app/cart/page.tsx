import { CartClient } from "@/components/CartClient";
import { PageShell } from "@/components/PageShell";

export default function CartPage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/cart</p>
        <h1 className="mb-10 text-5xl font-black leading-none sm:text-7xl">Корзина</h1>
        <CartClient />
      </main>
    </PageShell>
  );
}

