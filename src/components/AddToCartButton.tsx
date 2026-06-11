"use client";

import { cartStorageKey, type CartItem } from "@/lib/cart";

export function AddToCartButton({ productId }: { productId: string }) {
  function addToCart() {
    const current = JSON.parse(localStorage.getItem(cartStorageKey) ?? "[]") as CartItem[];
    const existing = current.find((item) => item.productId === productId);
    const next = existing
      ? current.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item))
      : [...current, { productId, quantity: 1 }];

    localStorage.setItem(cartStorageKey, JSON.stringify(next));
    window.dispatchEvent(new Event("cart:update"));
  }

  return (
    <button
      className="mt-4 w-full border border-nord-amber/60 bg-nord-amber px-4 py-3 font-black text-nord-night transition hover:brightness-110"
      type="button"
      onClick={addToCart}
    >
      Добавить в корзину
    </button>
  );
}

