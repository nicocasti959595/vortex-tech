"use client";

import { useState } from "react";
import { IconBolt, IconCheck } from "./Icons";

export default function Newsletter() {
  const [ok, setOk] = useState(false);
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot
    if (!email.includes("@")) return;
    setOk(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="aurora relative overflow-hidden rounded-3xl border border-line bg-panel/50 px-6 py-12 text-center">
        <div className="grid-bg absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-void/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan">
            <IconBolt className="h-3 w-3 text-amber" /> Ofertas exclusivas
          </span>
          <h2 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">
            Enterate primero de los mejores precios
          </h2>
          <p className="mt-2 text-sm text-muted">
            Sumate al newsletter y recibí ofertas, lanzamientos y cupones antes que nadie.
          </p>

          {ok ? (
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-lime/40 bg-lime/10 px-5 py-3 text-sm font-semibold text-lime">
              <IconCheck className="h-5 w-5" /> ¡Listo! Ya estás suscripto (demo).
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="inp flex-1"
                aria-label="Tu email"
              />
              <button type="submit" className="btn-neon shrink-0">Suscribirme</button>
            </form>
          )}
          <p className="mt-3 text-[0.7rem] text-dim">Sin spam. Podés darte de baja cuando quieras.</p>
        </div>
      </div>
    </section>
  );
}
