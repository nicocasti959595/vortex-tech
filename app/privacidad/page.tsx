import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${site.brandFull}. Cómo tratamos tus datos personales.`,
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-extrabold text-white">Política de Privacidad</h1>
      <p className="mt-2 text-sm text-dim">Última actualización: julio 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_strong]:text-fog">
        <p>
          En <strong>{site.legalName}</strong> (“{site.brandFull}”) respetamos tu privacidad. Esta
          política explica qué datos recopilamos, con qué fin y cuáles son tus derechos, en el marco
          de la Ley 25.326 de Protección de los Datos Personales de la República Argentina.
        </p>

        <h2>Datos que recopilamos</h2>
        <p>
          Recopilamos los datos que nos brindás voluntariamente al contactarnos por WhatsApp, correo
          o al suscribirte a nuestro newsletter: nombre, correo electrónico y teléfono. También
          podemos registrar datos de navegación anónimos con fines estadísticos.
        </p>

        <h2>Finalidad</h2>
        <p>
          Utilizamos tus datos para responder consultas, gestionar pedidos y coordinar la compra,
          brindar soporte y —si lo autorizaste— enviarte ofertas y novedades. No vendemos ni cedemos
          tus datos a terceros ajenos a la operación.
        </p>

        <h2>Conservación y seguridad</h2>
        <p>
          Conservamos tus datos el tiempo necesario para cumplir estas finalidades y aplicamos
          medidas razonables de seguridad para protegerlos.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Podés acceder, rectificar, actualizar o solicitar la eliminación de tus datos escribiéndonos
          a <a href={`mailto:${site.email}`} className="text-cyan underline">{site.email}</a>. La
          AAIP, órgano de control de la Ley 25.326, atiende las denuncias por incumplimiento.
        </p>

        <h2>Contacto</h2>
        <p>
          Ante cualquier duda sobre esta política, escribinos a{" "}
          <a href={`mailto:${site.email}`} className="text-cyan underline">{site.email}</a>.
        </p>

        <p className="border-t border-line pt-6 text-xs text-dim">
          Sitio de demostración. Los datos de contacto, marca y precios son ficticios y con fines de
          presentación.
        </p>
      </div>

      <a href="/" className="mt-10 inline-block text-sm text-cyan hover:underline">← Volver al inicio</a>
    </article>
  );
}
