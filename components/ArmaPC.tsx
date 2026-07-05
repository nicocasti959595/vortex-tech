import { waLink, WA_ARMA_PC_MSG } from "@/lib/site";
import ProductArt from "./ProductArt";
import { IconWhatsapp, IconCheck, IconBolt } from "./Icons";

const steps = [
  ["Contanos el uso", "Gaming, streaming, diseño 3D u oficina. Y tu presupuesto."],
  ["Elegimos las piezas", "Armamos la mejor combinación precio-rendimiento para vos."],
  ["Armado y testeo", "Ensamblamos, cableado prolijo y stress-test antes de enviar."],
  ["La recibís lista", "Con garantía de armado y envío a todo el país."],
];

export default function ArmaPC() {
  return (
    <section id="arma-pc" className="scroll-mt-40 border-y border-line">
      <div className="aurora relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet">
              <IconBolt className="h-3 w-3 text-amber" /> Servicio estrella
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Armá tu PC ideal <span className="text-neon">a medida</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              No sabés qué piezas elegir? Nuestros técnicos te asesoran gratis y te
              arman una máquina equilibrada, testeada y lista para jugar. Sin cuellos de
              botella, sin pagar de más.
            </p>

            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg neon-gradient font-display text-sm font-extrabold text-[#04121a]">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">{t}</div>
                    <div className="text-xs leading-snug text-muted">{d}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={waLink(WA_ARMA_PC_MSG)} target="_blank" rel="noopener noreferrer" className="btn-neon">
                <IconWhatsapp className="h-4 w-4" /> Armar mi PC
              </a>
              <span className="flex items-center gap-1.5 text-sm text-lime">
                <IconCheck className="h-4 w-4" /> Asesoramiento sin cargo
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-violet/25 to-transparent blur-3xl" />
            <div className="art-halo relative flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-line bg-panel/40">
              <div className="absolute inset-5 rounded-2xl border border-line-soft" />
              <ProductArt kind="pc" className="h-56 w-56 animate-float" />
              {/* piezas orbitando */}
              <span className="absolute left-5 top-8 rounded-lg border border-line bg-void/80 p-2 text-cyan"><ProductArt kind="gpu" className="h-7 w-7" /></span>
              <span className="absolute right-6 top-16 rounded-lg border border-line bg-void/80 p-2 text-violet"><ProductArt kind="cpu" className="h-7 w-7" /></span>
              <span className="absolute bottom-8 right-8 rounded-lg border border-line bg-void/80 p-2 text-magenta"><ProductArt kind="ram" className="h-7 w-7" /></span>
              <span className="absolute bottom-12 left-7 rounded-lg border border-line bg-void/80 p-2 text-cyan"><ProductArt kind="ssd" className="h-7 w-7" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
