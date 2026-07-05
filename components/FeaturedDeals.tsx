"use client";

import { useEffect, useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import { IconBolt } from "./Icons";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function FeaturedDeals() {
  const featured = products.filter((p) => p.featured && p.oldPrice).slice(0, 8);
  const [left, setLeft] = useState<{ h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    // Cuenta regresiva al final del día (demo).
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const diff = Math.max(0, end.getTime() - now.getTime());
      setLeft({
        h: Math.floor(diff / 3.6e6),
        m: Math.floor((diff % 3.6e6) / 6e4),
        s: Math.floor((diff % 6e4) / 1000),
      });
    };
    tick();
    const t = window.setInterval(tick, 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="border-y border-line bg-gradient-to-b from-panel/40 to-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl neon-gradient text-[#04121a]">
              <IconBolt className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Ofertas de la semana</h2>
              <p className="text-sm text-muted">Precios que vuelan. Stock limitado.</p>
            </div>
          </div>
          {left && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">Termina en</span>
              {[left.h, left.m, left.s].map((v, k) => (
                <span key={k} className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-void font-display text-lg font-extrabold text-cyan tabular-nums">
                  {pad(v)}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2">
          {featured.map((p) => (
            <div key={p.id} className="w-60 shrink-0 snap-start sm:w-64">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
