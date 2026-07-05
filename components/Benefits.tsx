import { benefits } from "@/lib/data";
import { benefitIcons } from "./Icons";

export default function Benefits() {
  return (
    <section id="beneficios" className="border-b border-line bg-abyss/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = benefitIcons[b.icon];
          return (
            <div key={b.title} className="flex items-start gap-3 bg-void px-5 py-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-panel text-cyan">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{b.title}</h3>
                <p className="mt-0.5 text-xs leading-snug text-muted">{b.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
