"use client";

import { createContext, useContext, useState, useCallback } from "react";

type Ctx = {
  query: string;
  setQuery: (v: string) => void;
  category: string; // "" = todas
  setCategory: (v: string) => void;
  gotoCatalog: () => void;
};

const StoreCtx = createContext<Ctx | null>(null);

export function StoreUIProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const gotoCatalog = useCallback(() => {
    const el = document.getElementById("catalogo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <StoreCtx.Provider value={{ query, setQuery, category, setCategory, gotoCatalog }}>
      {children}
    </StoreCtx.Provider>
  );
}

export function useStoreUI() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("useStoreUI dentro de <StoreUIProvider>");
  return ctx;
}
