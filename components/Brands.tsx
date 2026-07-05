import { brands } from "@/lib/data";

export default function Brands() {
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-line bg-abyss/60 py-6">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-dim">
          Trabajamos con las mejores marcas
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12">
            {row.map((b, i) => (
              <span key={i} className="font-display text-lg font-bold tracking-widest text-muted transition-colors hover:text-cyan">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
