import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.brandFull} — Tecnología & Gaming`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1000px 520px at 88% -12%, rgba(34,211,238,0.32), transparent 60%), radial-gradient(900px 520px at 6% 118%, rgba(240,57,156,0.30), transparent 60%), radial-gradient(800px 500px at 50% 60%, rgba(168,85,247,0.22), transparent 65%), linear-gradient(135deg, #0a0a16 0%, #06060d 100%)",
          color: "#eef0ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #22d3ee, #a855f7 55%, #f0399c)",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#06060d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 3a17 17 0 1 0 17 17" transform="scale(0.55) translate(3 3)" />
              <path d="M6 8l6 8 6-8" />
              <circle cx="12" cy="12" r="9" opacity="0.35" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 900, letterSpacing: 4 }}>VÓRTEX</span>
            <span style={{ fontSize: 18, color: "#22d3ee", letterSpacing: 6 }}>
              TECNOLOGÍA & GAMING
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(34,211,238,0.14)",
              border: "1px solid rgba(34,211,238,0.5)",
              color: "#7fe9f7",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            12 CUOTAS SIN INTERÉS · ENVÍO A TODO EL PAÍS · GARANTÍA OFICIAL
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 18px",
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.03,
              maxWidth: 1010,
            }}
          >
            <span>Armá tu setup.</span>
            <span style={{ color: "#22d3ee" }}>Jugá sin límites.</span>
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "rgba(238,240,255,0.78)", maxWidth: 960 }}>
            Notebooks · Placas de video · Procesadores · Monitores · Periféricos · PCs armadas a medida
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 26, fontWeight: 700, color: "#a855f7" }}>
            vortex.ideawebx.com
          </span>
          <span style={{ fontSize: 22, color: "rgba(238,240,255,0.78)" }}>
            {site.phoneDisplay}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
