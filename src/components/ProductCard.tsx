"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductPrice } from "@/components/ProductPrice";
import { ProductSlot } from "@/components/ProductSlot";

type ProductCardProps = {
  product: {
    readonly id: string;
    readonly category: string;
    readonly image: string;
    readonly name: string;
    readonly description: string;
    price: {
      readonly eur: number;
      readonly uah: number;
      readonly pln: number;
    };
  };
  serverName: string;
};

export function ProductCard({ product, serverName }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="interactive-product product-compact-card nord-shell cursor-pointer overflow-hidden"
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="relative p-5">
          <div className="flex justify-center">
            <ProductSlot image={product.image} name={product.name} size="lg" />
          </div>
          <h3 className="mt-5 line-clamp-2 min-h-16 text-2xl font-black transition hover:text-nord-ice">{product.name}</h3>
          <div className="mt-5 flex items-end justify-between gap-4 border-t border-nord-border pt-4">
            <ProductPrice price={product.price} />
            <div className="text-right text-xs font-bold uppercase text-nord-smoke">No advantage</div>
          </div>
          <div className="mt-2 text-sm text-nord-ice">Сервер: {serverName}</div>
          <div onClick={(event) => event.stopPropagation()}>
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-nord-night/84 px-4 py-8 backdrop-blur-md" onClick={() => setOpen(false)}>
          <section className="nord-shell product-detail-card w-full max-w-xl p-5 sm:p-7" role="dialog" aria-modal="true" aria-labelledby={`${product.id}-title`} onClick={(event) => event.stopPropagation()}>
            <div className="relative">
              <button
                className="interactive-button absolute right-0 top-0 grid h-10 w-10 place-items-center border border-nord-border bg-nord-night/70 text-xl font-black text-nord-frost"
                type="button"
                aria-label="Закрыть"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <div className="flex items-start gap-5 pr-12">
                <ProductSlot image={product.image} name={product.name} size="lg" />
                <div className="min-w-0">
                  <span className="border border-nord-ice/30 bg-nord-night/72 px-2 py-1 text-[11px] font-black uppercase text-nord-ice backdrop-blur-md">{product.category}</span>
                  <h2 id={`${product.id}-title`} className="mt-4 text-3xl font-black">{product.name}</h2>
                </div>
              </div>
              <div className="mt-6 border-t border-nord-border pt-5">
                <p className="text-sm font-black uppercase text-nord-ice">Описание</p>
                <p className="mt-3 leading-7 text-nord-smoke">{product.description}</p>
              </div>
              <div className="mt-6 grid gap-3 border-t border-nord-border pt-5 sm:grid-cols-2 sm:items-end">
                <div>
                  <ProductPrice price={product.price} />
                  <p className="mt-2 text-sm text-nord-ice">Сервер: {serverName}</p>
                </div>
                <div onClick={(event) => event.stopPropagation()}>
                  <AddToCartButton productId={product.id} />
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
