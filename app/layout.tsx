import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { storeJsonLd, faqJsonLd } from "@/lib/seo";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandFull} — Tienda de Tecnología y Gaming en Argentina`,
    template: `%s | ${site.brandFull}`,
  },
  description:
    "Tienda de tecnología y gaming. Notebooks, placas de video GeForce RTX y Radeon, procesadores Intel y AMD, monitores, periféricos y PCs armadas a medida. Hasta 12 cuotas sin interés, garantía oficial y envío a todo el país.",
  keywords: [
    "tienda de tecnología",
    "computación",
    "placas de video",
    "notebooks gamer",
    "PC gamer",
    "procesadores",
    "armar PC",
    "monitores gamer",
    "periféricos gaming",
    "cuotas sin interés",
    "tienda gaming Argentina",
  ],
  authors: [{ name: site.brandFull }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.brandFull,
    title: `${site.brandFull} — Tecnología & Gaming`,
    description:
      "Notebooks, placas de video, procesadores, monitores, periféricos y PCs armadas. 12 cuotas sin interés, garantía oficial y envío a todo el país.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandFull} — Tecnología & Gaming en Argentina`,
    description:
      "Todo para tu setup: componentes, periféricos y PCs armadas a medida. Cuotas sin interés y envío a todo el país.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Technology",
};

export const viewport: Viewport = {
  themeColor: "#06060d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
