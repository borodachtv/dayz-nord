import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dayznord.example"),
  title: {
    default: "DayZ Nord - Hardcore Survival Server",
    template: "%s | DayZ Nord"
  },
  description:
    "DayZ Nord - dark survival UI website for a DayZ Standalone server with live servers, store, Steam login, Discord OAuth, rules and monetization policy.",
  keywords: ["DayZ", "DayZ Standalone", "Namalsk", "Chernarus", "Deer Isle", "PvP", "survival server"],
  openGraph: {
    title: "DayZ Nord - Hardcore Survival Server",
    description: "Namalsk, Chernarus and Deer Isle survival servers with fair monetization and no pay-to-win.",
    url: "/",
    siteName: "DayZ Nord",
    images: [{ url: "/dayz-nord-hero.png", width: 1774, height: 887 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DayZ Nord - Hardcore Survival Server",
    description: "Dark survival DayZ server website with live online, shop, cart and admin panel.",
    images: ["/dayz-nord-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body className="bg-nord-night font-sans text-nord-frost antialiased">{children}</body>
    </html>
  );
}

