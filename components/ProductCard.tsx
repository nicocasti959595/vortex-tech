"use client";

import { type Product } from "@/lib/data";
import { fmt } from "@/lib/site";
import { useCart } from "./CartContext";
import { useQuickView } from "./QuickView";
import ProductArt from "./ProductArt";
import Stars from "./Stars";
import { IconCart, IconCheck, IconSearch } from "./Icons";

export default function ProductCard({ p }: { p: Product }) {
  const { add, justAdded } = useCart();
  const { open } = useQuickView();
  const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const cuota = Math.round(p.price / p.cuotas);
  const added = justAdded === p.id;

  return (
    <article className="card group relative flex flex-col overflow-hidden rounded-2xl">
      {/* Badges */}
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
        {p.tag && <span className={`badge badge-${p.tag.toLowerCase()}`}>{p.tag}</span>}
        {off > 0 && <span className="badge badge-oferta">-{off}%</span>}
      </div>
      {p.freeShip && (
        <span className="absolute right-3 top-3 z-10 rounded-md border border-line bg-black/40 px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-lime">
          Envío gratis
        </span>
      )}

      {/* Ilustración + quick view */}
      <button
        onClick={() => open(p)}
        aria-label={`Ver ${p.name}`}
        className="art-halo relative flex h-44 items-center justify-center overflow-hidden px-6"
      >
        <ProductArt kind={p.kind} className="h-32 w-full max-w-[200px] transition-transform duration-500 group-hover:scale-110" />
        <span className="pointer-events-none absolute bottom-2 flex items-center gap-1 rounded-full border border-line bg-black/50 px-2.5 py-1 text-[0.65rem] font-medium text-fog opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <IconSearch className="h-3 w-3" /> Vista rápida
        </span>
      </button>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between">
          <span className="text-[0.68rem] font-semibold uppercase tracking-widest text-cyan">{p.brand}</span>
          <Stars value={p.rating} />
        </div>
        <h3
          onClick={() => open(p)}
          className="mt-1.5 line-clamp-2 min-h-[2.6rem] cursor-pointer text-sm font-semibold leading-snug text-white hover:text-cyan"
        >
          {p.name}
        </h3>

        <div className="mt-auto pt-3">
          {p.oldPrice && <span className="mr-2 text-xs text-dim line-through">{fmt(p.oldPrice)}</span>}
          <div className="font-display text-xl font-extrabold text-white">{fmt(p.price)}</div>
          <p className="text-xs text-cyan">{p.cuotas}x sin interés de {fmt(cuota)}</p>

          <button
            onClick={() => add(p.id)}
            className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
              added
                ? "bg-lime text-[#14210a]"
                : "neon-gradient text-[#04121a] hover:brightness-110"
            }`}
          >
            {added ? (
              <><IconCheck className="h-4 w-4" /> ¡Agregado!</>
            ) : (
              <><IconCart className="h-4 w-4" /> Agregar</>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
