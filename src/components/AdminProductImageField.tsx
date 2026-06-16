"use client";

import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { ProductSlot } from "@/components/ProductSlot";

export function AdminProductImageField() {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPreview("");
      return;
    }

    const nextPreview = URL.createObjectURL(file);
    setPreview((current) => {
      if (current) {
        URL.revokeObjectURL(current);
      }
      return nextPreview;
    });
  }

  return (
    <label className="grid gap-3 text-sm text-nord-smoke">
      Изображение товара
      <div className="flex items-center gap-4">
        <ProductSlot image={preview} name="Product preview" />
        <span className="interactive-button flex min-h-14 flex-1 cursor-pointer items-center justify-between gap-3 border border-nord-border bg-nord-night/60 px-3 text-nord-frost">
          <span>Выбрать PNG / JPG / WEBP</span>
          <span className="text-xs font-black uppercase text-nord-ice">Upload</span>
          <input className="sr-only" type="file" accept="image/png,image/jpeg,image/webp" onChange={onFileChange} />
        </span>
      </div>
      <span className="text-xs leading-5 text-nord-smoke">
        Основа 50x50 остаётся всегда. PNG без фона ложится поверх, обычная картинка вписывается в этот же квадрат.
      </span>
    </label>
  );
}
