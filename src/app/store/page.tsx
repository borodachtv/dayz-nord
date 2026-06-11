import { AddToCartButton } from "@/components/AddToCartButton";
import { PageShell } from "@/components/PageShell";
import { ProductPrice } from "@/components/ProductPrice";
import { products, servers, storeCategories } from "@/lib/site-data";

export default function StorePage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-black uppercase text-nord-ice">/store</p>
        <h1 className="text-5xl font-black leading-none sm:text-7xl">Магазин</h1>
        <p className="mt-5 max-w-2xl leading-7 text-nord-smoke">Сначала выберите сервер. По умолчанию здесь нет pay-to-win товаров: только очередь, косметика, декор и добровольная поддержка.</p>
        <div className="mt-8 grid gap-2 lg:grid-cols-3">
          {servers.map((server) => (
            <a key={server.id} className="interactive-card border border-nord-border bg-nord-card/80 p-4 font-black text-nord-ice backdrop-blur-md" href={`#${server.id}`}>
              {server.name} | {server.subtitle}
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {storeCategories.map((category) => (
            <span key={category} className="border border-nord-border bg-nord-night/50 px-3 py-2 text-xs font-bold text-nord-smoke">{category}</span>
          ))}
        </div>
        {servers.map((server) => (
          <section key={server.id} id={server.id} className="scroll-mt-28 pt-14">
            <h2 className="text-3xl font-black">{server.name} | {server.subtitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.filter((product) => product.serverId === server.id).map((product) => (
                <article key={product.id} className="interactive-product overflow-hidden border border-nord-border bg-nord-card/80 shadow-survival backdrop-blur-md">
                  <div className="product-media h-44 bg-[url('/dayz-nord-hero.png')] bg-cover bg-center" />
                  <div className="p-5">
                    <span className="text-xs font-black uppercase text-nord-ice">{product.category}</span>
                    <h3 className="mt-3 text-2xl font-black transition hover:text-nord-ice">{product.name}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-nord-smoke">{product.description}</p>
                    <ProductPrice price={product.price} />
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


