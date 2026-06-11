import { products, type Currency } from "@/lib/site-data";

export type CartItem = {
  productId: string;
  quantity: number;
};

export const cartStorageKey = "dayz-nord-cart";

export function formatPrice(value: number, currency: Currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "UAH" ? 0 : 2
  }).format(value);
}

export function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}

