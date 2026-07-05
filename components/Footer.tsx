import Logo from "./Logo";
import { site, waLink, telLink, mapsLink } from "@/lib/site";
import { IconWhatsapp } from "./Icons";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-line bg-abyss">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.claim}</p>
            <div className="mt-5 flex gap-2">
              {[["Instagram", site.instagram], ["Facebook", site.facebook], ["TikTok", site.tiktok]].map(([n, h]) => (
                <a
                  key={n}
                  href={h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-fog hover:border-cyan hover:text-cyan"
                >
                  {n}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Categorías</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {["Notebooks", "Placas de Video", "Procesadores", "Monitores", "Periféricos", "PCs Armadas"].map((c) => (
                <li key={c}><a href="#catalogo" className="hover:text-cyan">{c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Ayuda</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href="#arma-pc" className="hover:text-cyan">Armá tu PC</a></li>
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">Envíos y pagos</a></li>
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">Garantía</a></li>
              <li><a href="/terminos" className="hover:text-cyan">Términos y condiciones</a></li>
              <li><a href="/privacidad" className="hover:text-cyan">Política de privacidad</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href={telLink} className="hover:text-cyan">{site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-cyan">{site.email}</a></li>
              <li><a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">{site.addressStreet}, {site.addressLocality}</a></li>
              <li className="text-dim">{site.hours}</li>
            </ul>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-lime/40 bg-lime/10 px-3 py-2 text-sm font-semibold text-lime hover:bg-lime/20">
              <IconWhatsapp className="h-4 w-4" /> Escribinos
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center text-xs text-dim sm:flex-row sm:text-left">
          <p>© {year} {site.legalName} · Precios en pesos argentinos. Imágenes ilustrativas. Demo de presentación.</p>
          <p>
            Desarrollado por{" "}
            <a href="https://ideawebx.com" target="_blank" rel="noopener" className="font-semibold text-fog hover:text-cyan">
              IdeaWebX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
