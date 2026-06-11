"use client";

import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/cart";
import { languageCurrency, languages, type Language } from "@/lib/i18n";
import type { Currency } from "@/lib/site-data";

type ProductPriceProps = {
  price: {
    eur: number;
    uah: number;
    pln: number;
  };
};

const priceKeyByCurrency = {
  EUR: "eur",
  UAH: "uah",
  PLN: "pln"
} as const satisfies Record<Currency, keyof ProductPriceProps["price"]>;

export function ProductPrice({ price }: ProductPriceProps) {
  const [language, setLanguage] = useState<Language>("RU");

  useEffect(() => {
    const saved = localStorage.getItem("dayz-nord-language");
    if (saved && languages.includes(saved as Language)) {
      setLanguage(saved as Language);
    }

    function update(event: Event) {
      setLanguage((event as CustomEvent<Language>).detail);
    }

    window.addEventListener("language:update", update);
    return () => window.removeEventListener("language:update", update);
  }, []);

  const currency = languageCurrency[language] as Currency;
  const priceKey = priceKeyByCurrency[currency];

  return (
    <div className="mt-4">
      <span className="text-2xl font-black text-nord-amber">{formatPrice(price[priceKey], currency)}</span>
      <span className="ml-2 text-xs font-black uppercase text-nord-smoke">{currency}</span>
    </div>
  );
}
