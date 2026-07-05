"use client";

import { useCart } from "./CartContext";
import { fmt, waLink } from "@/lib/site";
import ProductArt from "./ProductArt";
import { IconClose, IconPlus, IconMinus, IconTrash, IconWhatsapp, IconCart, IconShipping } from "./Icons";

const FREE_SHIP = 500000;

export default function CartDrawer() {
  const { open, setOpen, items, total, count, setQty, remove, clear } = useCart();

  const falta = Math.max(0, FREE_SHIP - total);
  const pct = Math.min(100, Math.round((total / FREE_SHIP) * 100));

  const waMsg = () => {
    const lines = items
      .map((i) => `• ${i.qty}× ${i.name} — ${fmt(i.price * i.qty)}`)
      .join("\n");
    return `Hola Vórtex 👋 Quiero finalizar esta compra:\n\n${lines}\n\nTotal: ${fmt(total)}`;
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col border-l border-line bg-abyss shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between border-b border-line p-4">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <IconCart className="h-5 w-5 text-cyan" /> Tu carrito
            {count > 0 && <span className="rounded-full bg-panel px-2 py-0.5 text-xs text-muted">{count}</span>}
          </h2>
          <button onClick={() => setOpen(false)} aria-label="Cerrar" className="rounded-lg p-1.5 text-muted hover:text-white">
            <IconClose />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="art-halo rounded-full p-6">
              <IconCart className="h-12 w-12 text-dim" />
            </div>
            <p className="text-fog">Tu carrito está vacío.</p>
            <button onClick={() => setOpen(false)} className="btn-ghost">Ver productos</button>
          </div>
        ) : (
          <>
            {/* Barra envío gratis */}
            <div className="border-b border-line px-4 py-3">
              <p className="flex items-center gap-1.5 text-xs text-muted">
                <IconShipping className="h-4 w-4 text-lime" />
                {falta > 0 ? (
                  <>Te faltan <b className="text-white">{fmt(falta)}</b> para el envío gratis</>
                ) : (
                  <span className="text-lime">¡Tenés envío gratis! 🎉</span>
                )}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-panel-2">
                <div className="h-full neon-gradient transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 rounded-xl border border-line bg-panel p-3">
                  <div className="art-halo flex h-16 w-16 shrink-0 items-center justify-center rounded-lg">
                    <ProductArt kind={i.kind} className="h-12 w-12" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-semibold text-white">{i.name}</p>
                    <p className="text-xs text-cyan">{fmt(i.price)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-lg border border-line">
                        <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Restar" className="p-1.5 text-muted hover:text-white">
                          <IconMinus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-5 text-center text-sm font-semibold text-white">{i.qty}</span>
                        <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Sumar" className="p-1.5 text-muted hover:text-white">
                          <IconPlus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button onClick={() => remove(i.id)} aria-label="Quitar" className="p-1.5 text-dim hover:text-magenta">
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={clear} className="w-full py-1 text-center text-xs text-dim hover:text-magenta">
                Vaciar carrito
              </button>
            </div>

            {/* Footer */}
            <footer className="border-t border-line p-4">
              <div className="mb-3 flex items-end justify-between">
                <span className="text-sm text-muted">Total</span>
                <div className="text-right">
                  <div className="font-display text-2xl font-extrabold text-white">{fmt(total)}</div>
                  <p className="text-xs text-cyan">Hasta 12 cuotas sin interés</p>
                </div>
              </div>
              <a href={waLink(waMsg())} target="_blank" rel="noopener noreferrer" className="btn-neon w-full">
                <IconWhatsapp className="h-4 w-4" /> Finalizar compra por WhatsApp
              </a>
              <p className="mt-2 text-center text-[0.7rem] text-dim">Demo — la compra se coordina por WhatsApp.</p>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
