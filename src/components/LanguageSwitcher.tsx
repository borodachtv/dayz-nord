"use client";

import { useEffect, useState } from "react";
import { languages, type Language } from "@/lib/i18n";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("RU");

  useEffect(() => {
    const saved = localStorage.getItem("dayz-nord-language");
    if (saved && languages.includes(saved as Language)) {
      setLanguage(saved as Language);
    }
  }, []);

  function update(next: Language) {
    setLanguage(next);
    localStorage.setItem("dayz-nord-language", next);
    window.dispatchEvent(new CustomEvent("language:update", { detail: next }));
  }

  return (
    <div className="flex gap-1">
      {languages.map((item) => (
        <button
          key={item}
          className={`border px-2 py-1 text-xs font-black ${item === language ? "border-nord-primary bg-nord-primary text-nord-night" : "border-nord-border text-nord-smoke"}`}
          type="button"
          onClick={() => update(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
