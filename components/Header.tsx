"use client";

import { useState } from "react";
import Logo from "./Logo";
import { categories } from "@/lib/data";
import { useCart } from "./CartContext";
import { useStoreUI } from "./StoreUI";
import {
  IconSearch,
  IconCart,
  IconUser,
  IconMenu,
  IconClose,
  IconBolt,
} from "./Icons";

export default function Header() {
  const { count, setOpen } = useCart();
  const { query, setQuery, setCategory, gotoCatalog } = useStoreUI();
  const [menu, setMenu] = useState(false);
  const [local, setLocal] = useState("");

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(local);
    setCategory("");
    gotoCatalog();
    setMenu(false);
  };

  const pickCat = (slug: string) => {
    setCategory(slug);
    setQuery("");
    setLocal("");
    gotoCatalog();
    setMenu(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Promo strip */}
      <div className="border-b border-line-soft bg-abyss/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 gap-y-1 overflow-hidden px-4 py-1.5 text-center text-[0.72rem] font-medium text-muted">
          <span className="flex items-center gap-1.5">
            <IconBolt className="h-3 w-3 text-amber" /> 12 cuotas <b className="text-fog">sin interés</b>
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:flex items-center gap-1.5">🚚 Envío <b className="text-fog">gratis</b> desde $500.000</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:flex items-center gap-1.5">🛡️ Garantía oficial + factura</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-void/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            onClick={() => setMenu((v) => !v)}
            aria-label="Menú"
            className="rounded-lg border border-line p-2 text-fog lg:hidden"
          >
            {menu ? <IconClose /> : <IconMenu />}
          </button>

          <a href="#top" className="shrink-0" aria-label="Vórtex inicio">
            <Logo />
          </a>

          {/* Search */}
          <form onSubmit={submitSearch} className="relative ml-1 hidden flex-1 sm:block">
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dim" />
            <input
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Buscar notebooks, placas de video, procesadores…"
              className="inp pl-9 pr-24"
              aria-label="Buscar productos"
            />
            <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg neon-gradient px-3 py-1.5 text-xs font-bold text-[#04121a]">
              Buscar
            </button>
          </form>

          <div className="ml-auto flex items-center gap-1.5">
            <button className="hidden items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm text-fog hover:border-violet hover:text-white md:flex">
              <IconUser className="h-4 w-4" /> Mi cuenta
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir carrito"
              className="relative flex items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/5 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan/10"
            >
              <IconCart className="h-5 w-5 text-cyan" />
              <span className="hidden sm:inline">Carrito</span>
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-magenta px-1 text-[0.65rem] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={submitSearch} className="relative px-4 pb-3 sm:hidden">
          <IconSearch className="pointer-events-none absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-dim" />
          <input
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            placeholder="Buscar productos…"
            className="inp pl-9"
            aria-label="Buscar productos"
          />
        </form>
      </div>

      {/* Category nav (desktop) */}
      <nav className="hidden border-b border-line bg-abyss/80 backdrop-blur lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 px-4">
          <button
            onClick={() => pickCat("")}
            className="flex items-center gap-1.5 py-2.5 pr-4 text-sm font-bold text-magenta hover:text-white"
          >
            <IconBolt className="h-4 w-4" /> Ofertas
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => pickCat(c.slug)}
              className="rounded-md px-3 py-2.5 text-sm text-fog transition hover:bg-panel hover:text-cyan"
            >
              {c.name}
            </button>
          ))}
          <a href="#arma-pc" className="ml-auto py-2.5 text-sm font-semibold text-cyan hover:text-white">
            Armá tu PC →
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {menu && (
        <div className="border-b border-line bg-abyss lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <button onClick={() => pickCat("")} className="mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-bold text-magenta">
              <IconBolt className="h-4 w-4" /> Ofertas
            </button>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => pickCat(c.slug)}
                  className="rounded-lg px-3 py-2.5 text-left text-sm text-fog hover:bg-panel hover:text-cyan"
                >
                  {c.name}
                </button>
              ))}
            </div>
            <a href="#arma-pc" onClick={() => setMenu(false)} className="mt-2 block rounded-lg px-3 py-2.5 text-sm font-semibold text-cyan">
              Armá tu PC →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
