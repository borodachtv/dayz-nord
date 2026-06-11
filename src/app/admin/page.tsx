import Link from "next/link";
import { products, servers, storeCategories } from "@/lib/site-data";

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm text-nord-smoke">
      {label}
      <input className="h-11 border border-nord-border bg-nord-night/60 px-3 text-nord-frost outline-none focus:border-nord-ice/60" placeholder={placeholder} type={type} />
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: readonly string[] }) {
  return (
    <label className="grid gap-2 text-sm text-nord-smoke">
      {label}
      <select className="h-11 border border-nord-border bg-nord-night/60 px-3 text-nord-frost outline-none focus:border-nord-ice/60">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-nord-night text-nord-frost">
      <header className="sticky top-0 z-30 border-b border-nord-border bg-nord-night/92 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase text-nord-ice">/admin</p>
            <h1 className="text-3xl font-black">MVP Admin: Products</h1>
          </div>
          <Link className="border border-nord-ice/40 px-3 py-2 text-sm text-nord-ice" href="/">
            site
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-10">
        <form className="interactive-card grid gap-4 border border-nord-border bg-nord-card/80 p-5 shadow-survival backdrop-blur-md">
          <h2 className="text-2xl font-black">Создать товар</h2>
          <Field label="Название" placeholder="Custom Flag" />
          <Field label="Описание" placeholder="Cosmetic item without gameplay advantage" />
          <Field label="Цена EUR" placeholder="4.99" type="number" />
          <Field label="Цена UAH" placeholder="210" type="number" />
          <Field label="Цена PLN" placeholder="22" type="number" />
          <SelectField label="Категория" options={storeCategories} />
          <SelectField label="Сервер" options={servers.map((server) => `${server.name} | ${server.subtitle}`)} />
          <Field label="Изображение" placeholder="/uploads/product.png" />
          <SelectField label="Статус" options={["active", "inactive"]} />
          <button className="interactive-button border border-nord-amber/60 bg-nord-amber px-4 py-3 font-black text-nord-night" type="button">
            Сохранить товар
          </button>
        </form>

        <section>
          <p className="mb-4 text-sm text-nord-smoke">MVP использует mock-данные из `src/lib/site-data.ts`. После подключения CRUD API форма будет писать в PostgreSQL через Prisma.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {products.map((product) => {
              const server = servers.find((item) => item.id === product.serverId);
              return (
                <article key={product.id} className="interactive-product border border-nord-border bg-nord-card/80 p-5 shadow-survival backdrop-blur-md">
                  <span className="text-xs font-black uppercase text-nord-ice">{product.category}</span>
                  <h3 className="mt-3 text-xl font-black">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-nord-smoke">{product.description}</p>
                  <p className="mt-4 text-nord-amber">€{product.price.eur} / ₴{product.price.uah} / zł{product.price.pln}</p>
                  <p className="mt-2 text-sm text-nord-ice">{server?.name}</p>
                  <button className="interactive-link mt-4 text-sm font-bold text-nord-ice" type="button">
                    active / inactive
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
