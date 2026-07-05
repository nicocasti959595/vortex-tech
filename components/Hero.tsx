"use client";

import { useEffect, useState, useCallback } from "react";
import { heroSlides } from "@/lib/data";
import ProductArt from "./ProductArt";
import { useStoreUI } from "./StoreUI";
import { IconChevron, IconBolt } from "./Icons";

const accents: Record<string, string> = {
  cyan: "from-cyan/25",
  violet: "from-violet/25",
  magenta: "from-magenta/25",
};

export default function Hero() {
  const [i, setI] = useState(0);
  const { gotoCatalog } = useStoreUI();
  const n = heroSlides.length;

  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => window.clearInterval(t);
  }, [n]);

  const s = heroSlides[i];

  return (
    <section id="top" className="aurora grid-bg relative overflow-hidden border-b border-line">
      <div className="scanline" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        {/* Texto */}
        <div key={i} className="reveal">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan">
            <IconBolt className="h-3 w-3 text-amber" /> {s.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            {s.title}
          </h1>
          <p className="mt-4 max-w-md text-base text-muted sm:text-lg">{s.subtitle}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button onClick={s.href === "#arma-pc" ? undefined : gotoCatalog} className="btn-neon">
              {s.href === "#arma-pc" ? (
                <a href="#arma-pc" className="flex items-center gap-2">{s.cta} <IconChevron className="h-4 w-4 -rotate-90" /></a>
              ) : (
                <span className="flex items-center gap-2">{s.cta} <IconChevron className="h-4 w-4 -rotate-90" /></span>
              )}
            </button>
            <a href="#beneficios" className="btn-ghost">¿Por qué Vórtex?</a>
          </div>

          {/* Mini stats */}
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            {[
              ["+15.000", "clientes felices"],
              ["24-48h", "despacho"],
              ["4.9★", "1.284 reseñas"],
            ].map(([a, b]) => (
              <div key={b}>
                <div className="font-display text-2xl font-extrabold text-white">{a}</div>
                <div className="text-xs text-dim">{b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ilustración */}
        <div className="relative flex items-center justify-center">
          <div className={`absolute h-72 w-72 rounded-full bg-gradient-to-br ${accents[s.accent]} to-transparent blur-2xl md:h-96 md:w-96`} />
          <div key={`art-${i}`} className="reveal art-halo relative flex h-72 w-72 items-center justify-center rounded-3xl border border-line bg-panel/40 md:h-96 md:w-96">
            <div className="absolute inset-4 rounded-2xl border border-line-soft" />
            <ProductArt kind={s.kind} className="h-44 w-44 animate-float md:h-56 md:w-56" />
            <span className="absolute right-4 top-4 h-2 w-2 animate-pulse-glow rounded-full bg-cyan" />
            <span className="absolute bottom-4 left-4 h-2 w-2 animate-pulse-glow rounded-full bg-magenta" />
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 pb-6">
        <div className="flex gap-2">
          {heroSlides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Slide ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 neon-gradient" : "w-3 bg-line"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Anterior" className="rounded-lg border border-line p-2 text-fog hover:border-cyan hover:text-cyan">
            <IconChevron className="h-4 w-4 rotate-90" />
          </button>
          <button onClick={() => go(1)} aria-label="Siguiente" className="rounded-lg border border-line p-2 text-fog hover:border-cyan hover:text-cyan">
            <IconChevron className="h-4 w-4 -rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
}
