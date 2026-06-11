"use client";

import { useEffect, useMemo, useState } from "react";
import { cartStorageKey, formatPrice, getProduct, type CartItem } from "@/lib/cart";
import { currencies, type Currency } from "@/lib/site-data";

export function CartClient() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [provider, setProvider] = useState("stripe");
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    function load() {
      setItems(JSON.parse(localStorage.getItem(cartStorageKey) ?? "[]") as CartItem[]);
    }

    load();
    window.addEventListener("cart:update", load);
    return () => window.removeEventListener("cart:update", load);
  }, []);

  const lines = items
    .map((item) => ({ ...item, product: getProduct(item.productId) }))
    .filter((item): item is CartItem & { product: NonNullable<ReturnType<typeof getProduct>> } => Boolean(item.product));

  const priceKey = currency.toLowerCase() as "eur" | "uah" | "pln";
  const total = useMemo(
    () => lines.reduce((sum, item) => sum + item.product.price[priceKey] * item.quantity, 0),
    [lines, priceKey]
  );

  function updateQuantity(productId: string, quantity: number) {
    const next = items
      .map((item) => (item.productId === productId ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0);
    setItems(next);
    localStorage.setItem(cartStorageKey, JSON.stringify(next));
  }

  async function pay() {
    const response = await fetch("/api/payments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provider, currency, items })
    });
    const data = (await response.json()) as { status?: string; error?: string; checkoutUrl?: string };
    setPaymentStatus(data.error ?? `Payment ${data.status}: ${data.checkoutUrl}`);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="grid gap-4">
        {lines.length === 0 ? (
          <div className="interactive-card border border-nord-border bg-nord-card/80 p-6 text-nord-smoke shadow-survival backdrop-blur-md">Корзина пуста.</div>
        ) : (
          lines.map((item) => (
            <article key={item.productId} className="interactive-card grid gap-4 border border-nord-border bg-nord-card/80 p-5 shadow-survival backdrop-blur-md sm:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-xl font-black">{item.product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-nord-smoke">{item.product.description}</p>
                <p className="mt-2 text-sm text-nord-ice">{formatPrice(item.product.price[priceKey], currency)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="interactive-button h-10 w-10 border border-nord-border" type="button" onClick={() => updateQuantity(item.productId, item.quantity - 1)}>-</button>
                <span className="w-8 text-center font-black">{item.quantity}</span>
                <button className="interactive-button h-10 w-10 border border-nord-border" type="button" onClick={() => updateQuantity(item.productId, item.quantity + 1)}>+</button>
              </div>
            </article>
          ))
        )}
      </div>
      <aside className="interactive-card border border-nord-border bg-nord-card/80 p-6 shadow-survival backdrop-blur-md">
        <label className="grid gap-2 text-sm text-nord-smoke">
          Валюта
          <select className="h-12 border border-nord-border bg-nord-night/60 px-3 text-nord-frost" value={currency} onChange={(event) => setCurrency(event.target.value as Currency)}>
            {currencies.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="mt-4 grid gap-2 text-sm text-nord-smoke">
          Оплата
          <select className="h-12 border border-nord-border bg-nord-night/60 px-3 text-nord-frost" value={provider} onChange={(event) => setProvider(event.target.value)}>
            <option value="stripe">Stripe</option>
            <option value="paypal">PayPal</option>
            <option value="liqpay">LiqPay</option>
            <option value="fondy">Fondy</option>
          </select>
        </label>
        <div className="mt-6 flex items-center justify-between border-t border-nord-border pt-5">
          <span className="text-nord-smoke">Итого</span>
          <strong className="text-2xl text-nord-amber">{formatPrice(total, currency)}</strong>
        </div>
        <button className="interactive-button mt-6 w-full border border-nord-amber/60 bg-nord-amber px-5 py-3 font-black text-nord-night" type="button" onClick={pay}>
          Оплатить
        </button>
        {paymentStatus ? <p className="mt-4 text-sm text-nord-ice">{paymentStatus}</p> : null}
      </aside>
    </div>
  );
}
