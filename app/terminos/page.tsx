import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de compra en ${site.brandFull}.`,
  alternates: { canonical: "/terminos" },
};

export default function Terminos() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-extrabold text-white">Términos y Condiciones</h1>
      <p className="mt-2 text-sm text-dim">Última actualización: julio 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_strong]:text-fog">
        <p>
          Estos términos regulan el uso del sitio y la compra de productos en{" "}
          <strong>{site.brandFull}</strong>. Al realizar un pedido aceptás las condiciones aquí
          descriptas.
        </p>

        <h2>Precios y disponibilidad</h2>
        <p>
          Los precios están expresados en pesos argentinos e incluyen IVA. Pueden modificarse sin
          previo aviso y están sujetos a disponibilidad de stock. Las imágenes son ilustrativas.
        </p>

        <h2>Formas de pago</h2>
        <p>
          Aceptamos tarjetas de crédito (hasta 12 cuotas sin interés según promoción vigente),
          débito, transferencia y efectivo. La compra se coordina y confirma por WhatsApp.
        </p>

        <h2>Envíos</h2>
        <p>
          Realizamos envíos a todo el país. El envío es sin cargo en compras desde $500.000. Los
          plazos de entrega son estimados (24 a 48 hs hábiles en AMBA) y pueden variar según la
          localidad y el transporte.
        </p>

        <h2>Garantía</h2>
        <p>
          Todos los productos son nuevos y cuentan con garantía oficial del fabricante y factura. Las
          PCs armadas incluyen garantía de armado de {site.brandFull}. La garantía no cubre daños por
          mal uso, sobretensión o manipulación indebida.
        </p>

        <h2>Cambios y devoluciones</h2>
        <p>
          Conforme a la Ley 24.240 de Defensa del Consumidor, disponés de 10 días corridos para
          arrepentirte de una compra a distancia. El producto debe estar sin uso y en su empaque
          original.
        </p>

        <h2>Contacto</h2>
        <p>
          Por cualquier consulta escribinos a{" "}
          <a href={`mailto:${site.email}`} className="text-cyan underline">{site.email}</a> o por
          WhatsApp al {site.phoneDisplay}.
        </p>

        <p className="border-t border-line pt-6 text-xs text-dim">
          Sitio de demostración. Marca, precios y datos de contacto son ficticios y con fines de
          presentación.
        </p>
      </div>

      <a href="/" className="mt-10 inline-block text-sm text-cyan hover:underline">← Volver al inicio</a>
    </article>
  );
}
