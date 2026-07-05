"use client";

import { useMemo, useState } from "react";
import { products, categories, brands } from "@/lib/data";
import { useStoreUI } from "./StoreUI";
import ProductCard from "./ProductCard";
import { IconClose } from "./Icons";

type Sort = "destacados" | "precio-asc" | "precio-desc" | "rating" | "descuento";

export default function Catalog() {
  const { query, setQuery, category, setCategory } = useStoreUI();
  const [sort, setSort] = useState<Sort>("destacados");
  const [brand, setBrand] = useState("");

  const list = useMemo(() => {
    let out = [...products];
    if (category) out = out.filter((p) => p.cat === category);
    if (brand) out = out.filter((p) => p.brand === brand);
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.specs.some((s) => s.toLowerCase().includes(q))
      );
    }
    switch (sort) {
      case "precio-asc": out.sort((a, b) => a.price - b.price); break;
      case "precio-desc": out.sort((a, b) => b.price - a.price); break;
      case "rating": out.sort((a, b) => b.rating - a.rating); break;
      case "descuento":
        out.sort(
          (a, b) =>
            (b.oldPrice ? 1 - b.price / b.oldPrice : 0) -
            (a.oldPrice ? 1 - a.price / a.oldPrice : 0)
        );
        break;
      default:
        out.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return out;
  }, [category, brand, query, sort]);

  const activeCat = categories.find((c) => c.slug === category);
  const hasFilters = category || brand || query.trim();

  return (
    <section id="catalogo" className="scroll-mt-40 border-t border-line bg-abyss/40">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Catálogo</p>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {query.trim()
                ? <>Resultados para “<span className="text-neon">{query}</span>”</>
                : activeCat
                ? activeCat.name
                : "Todos los productos"}
            </h2>
          </div>
          <span className="text-sm text-muted">{list.length} producto{list.length !== 1 && "s"}</span>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-col gap-3">
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            <Chip active={!category} onClick={() => setCategory("")}>Todas</Chip>
            {categories.map((c) => (
              <Chip key={c.slug} active={category === c.slug} onClick={() => setCategory(c.slug)}>
                {c.name}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="inp max-w-[10rem] cursor-pointer">
              <option value="">Todas las marcas</option>
              {brands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="inp max-w-[13rem] cursor-pointer">
              <option value="destacados">Ordenar: Destacados</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="rating">Mejor puntuados</option>
              <option value="descuento">Mayor descuento</option>
            </select>
            {hasFilters && (
              <button
                onClick={() => { setCategory(""); setBrand(""); setQuery(""); }}
                className="flex items-center gap-1 rounded-lg border border-line px-3 py-2 text-sm text-muted hover:border-magenta hover:text-magenta"
              >
                <IconClose className="h-4 w-4" /> Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {list.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line py-16 text-center">
            <p className="text-lg font-semibold text-white">No encontramos productos</p>
            <p className="mt-1 text-sm text-muted">Probá con otra búsqueda o quitá los filtros.</p>
            <button onClick={() => { setCategory(""); setBrand(""); setQuery(""); }} className="btn-ghost mt-5">
              Ver todo el catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition ${
        active
          ? "border-cyan bg-cyan/10 text-cyan"
          : "border-line text-fog hover:border-violet hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
