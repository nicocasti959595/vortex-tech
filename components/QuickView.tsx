"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { type Product } from "@/lib/data";
import { fmt, waLink } from "@/lib/site";
import { useCart } from "./CartContext";
import ProductArt from "./ProductArt";
import Stars from "./Stars";
import { IconClose, IconCart, IconCheck, IconWhatsapp, IconBolt } from "./Icons";

type Ctx = { open: (p: Product) => void };
const QVCtx = createContext<Ctx | null>(null);

export function QuickViewProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);
  const open = useCallback((p: Product) => setProduct(p), []);
  return (
    <QVCtx.Provider value={{ open }}>
      {children}
      <QuickViewModal product={product} onClose={() => setProduct(null)} />
    </QVCtx.Provider>
  );
}

export function useQuickView() {
  const ctx = useContext(QVCtx);
  if (!ctx) throw new Error("useQuickView dentro de <QuickViewProvider>");
  return ctx;
}

function QuickViewModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add } = useCart();
  if (!product) return null;
  const p = product;
  const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const cuota = Math.round(p.price / p.cuotas);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-20 rounded-lg border border-line bg-black/40 p-1.5 text-muted hover:text-white"
        >
          <IconClose />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="art-halo relative flex items-center justify-center border-b border-line p-8 md:border-b-0 md:border-r">
            {p.tag && <span className={`badge badge-${p.tag.toLowerCase()} absolute left-4 top-4`}>{p.tag}</span>}
            <ProductArt kind={p.kind} className="h-52 w-full max-w-[280px] animate-float" />
          </div>
          <div className="flex flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan">{p.brand}</p>
            <h3 className="mt-1 font-display text-lg font-bold leading-tight text-white">{p.name}</h3>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <Stars value={p.rating} />
              <span className="text-muted">({p.reviews})</span>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-fog">
              {p.specs.map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <IconCheck className="h-4 w-4 shrink-0 text-cyan" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              {p.oldPrice && (
                <span className="mr-2 text-sm text-dim line-through">{fmt(p.oldPrice)}</span>
              )}
              {off > 0 && <span className="badge badge-oferta">-{off}%</span>}
              <div className="mt-1 font-display text-3xl font-extrabold text-white">{fmt(p.price)}</div>
              <p className="text-sm text-cyan">
                {p.cuotas} cuotas sin interés de <b>{fmt(cuota)}</b>
              </p>
              <p className="mt-1 text-xs text-muted">
                {p.stock <= 5 ? `¡Últimas ${p.stock} unidades!` : "En stock · Envío 24-48 hs"}
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <button
                onClick={() => { add(p.id); onClose(); }}
                className="btn-neon w-full"
              >
                <IconCart /> Agregar al carrito
              </button>
              <a
                href={waLink(`Hola Vórtex 👋 Quiero consultar por: ${p.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full"
              >
                <IconWhatsapp className="h-4 w-4 text-lime" /> Consultar por WhatsApp
              </a>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted">
                <IconBolt className="h-3.5 w-3.5 text-amber" /> Comprá ahora, recibilo esta semana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
