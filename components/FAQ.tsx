import { faqs } from "@/lib/data";
import { IconChevron } from "./Icons";

export default function FAQ() {
  return (
    <section className="border-t border-line bg-abyss/40">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Ayuda</p>
          <h2 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">Preguntas frecuentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-line bg-panel/60 px-5 open:border-cyan/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-white marker:hidden">
                {f.q}
                <IconChevron className="h-5 w-5 shrink-0 text-cyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
