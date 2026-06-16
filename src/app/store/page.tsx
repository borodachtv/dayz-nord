import { AddToCartButton } from "@/components/AddToCartButton";
import { PageShell } from "@/components/PageShell";
import { ProductPrice } from "@/components/ProductPrice";
import { products, servers, storeCategories } from "@/lib/site-data";

export default function StorePage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <section className="nord-shell scanline p-5 sm:p-8">
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div>
              <p className="nord-kicker mb-3">/store</p>
              <h1 className="text-5xl font-black leading-none sm:text-7xl">Магазин</h1>
              <p className="mt-5 max-w-2xl leading-7 text-nord-smoke">
                Сначала выберите сервер. По умолчанию здесь нет pay-to-win товаров: только очередь, косметика, декор и добровольная поддержка.
              </p>
            </div>
            <div className="border border-nord-border bg-nord-night/55 p-4">
              <div className="text-xs font-black uppercase text-nord-ice">Monetization safe</div>
              <p className="mt-3 text-sm leading-6 text-nord-smoke">Все товары в MVP не дают оружие, броню, ресурсы, скорость, вместимость или боевые преимущества.</p>
            </div>
          </div>
        </section>
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {servers.map((server) => (
            <a key={server.id} className="interactive-card nord-shell p-4 font-black text-nord-ice" href={`#${server.id}`}>
              <span className="relative block text-xs uppercase text-nord-smoke">{server.map} / {server.mode}</span>
              <span className="relative mt-2 block">{server.name} | {server.subtitle}</span>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {storeCategories.map((category) => (
            <span key={category} className="border border-nord-border bg-nord-night/50 px-3 py-2 text-xs font-bold text-nord-smoke transition hover:border-nord-ice/50 hover:text-nord-frost">{category}</span>
          ))}
        </div>
        {servers.map((server) => (
          <section key={server.id} id={server.id} className="scroll-mt-28 pt-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="nord-kicker mb-3">{server.map}</p>
                <h2 className="text-3xl font-black">{server.name} | {server.subtitle}</h2>
              </div>
              <span className={`inline-flex items-center gap-2 border border-nord-border bg-nord-card/70 px-3 py-2 text-xs font-black uppercase ${server.status === "online" ? "text-nord-accent" : "text-nord-danger"}`}>
                <span className="status-dot" />
                {server.status}
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.filter((product) => product.serverId === server.id).map((product) => (
                <article key={product.id} className="interactive-product nord-shell overflow-hidden">
                  <div className="relative h-48 overflow-hidden border-b border-nord-border">
                    <div className="product-media absolute inset-0 bg-[url('/dayz-nord-hero.png')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nord-night via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 border border-nord-ice/30 bg-nord-night/72 px-2 py-1 text-[11px] font-black uppercase text-nord-ice backdrop-blur-md">{product.category}</span>
                  </div>
                  <div className="relative p-5">
                    <h3 className="text-2xl font-black transition hover:text-nord-ice">{product.name}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-nord-smoke">{product.description}</p>
                    <div className="mt-5 flex items-end justify-between gap-4 border-t border-nord-border pt-4">
                      <ProductPrice price={product.price} />
                      <div className="text-right text-xs font-bold uppercase text-nord-smoke">No advantage</div>
                    </div>
                    <div className="mt-2 text-sm text-nord-ice">Сервер: {server.name}</div>
                    <AddToCartButton productId={product.id} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </PageShell>
  );
}


