import { testimonios } from "@/lib/data";
import Stars from "./Stars";

export default function Testimonios() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-9 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">La comunidad Vórtex</p>
        <h2 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
          +15.000 gamers ya confían en nosotros
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonios.map((t) => (
          <figure key={t.name} className="card flex flex-col rounded-2xl p-6">
            <Stars value={t.rating} />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-fog">“{t.text}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span className="grid h-10 w-10 place-items-center rounded-full neon-gradient font-display font-extrabold text-[#04121a]">
                {t.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
