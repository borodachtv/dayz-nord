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
      className="interactive-button rust-cart-button mt-4 w-full px-4 py-4 font-black uppercase text-nord-frost transition"
      type="button"
      onClick={addToCart}
    >
      <span>Добавить в корзину</span>
    </button>
  );
}

