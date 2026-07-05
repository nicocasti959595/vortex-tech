"use client";

import { categories } from "@/lib/data";
import { useStoreUI } from "./StoreUI";
import ProductArt from "./ProductArt";
import { IconChevron } from "./Icons";

export default function CategoryGrid() {
  const { setCategory, setQuery, gotoCatalog } = useStoreUI();

  const pick = (slug: string) => {
    setCategory(slug);
    setQuery("");
    gotoCatalog();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Explorá</p>
          <h2 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">Categorías</h2>
        </div>
        <button onClick={() => pick("")} className="hidden items-center gap-1 text-sm text-muted hover:text-cyan sm:flex">
          Ver todo <IconChevron className="h-4 w-4 -rotate-90" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => pick(c.slug)}
            className="card group flex flex-col items-center gap-2 rounded-2xl p-4 text-center"
          >
            <div className="art-halo flex h-16 w-16 items-center justify-center rounded-xl">
              <ProductArt kind={c.kind} className="h-11 w-11 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <div className="text-sm font-bold text-white group-hover:text-cyan">{c.name}</div>
              <div className="text-[0.68rem] text-dim">{c.blurb}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
