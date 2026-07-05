import type { Kind } from "@/lib/data";

// Ilustraciones SVG propias por tipo de producto. Trazo neón sobre
// fondo transparente (la tarjeta aporta el halo). Sin dependencias externas.

const C = "#22d3ee"; // cian
const V = "#a855f7"; // violeta
const M = "#f0399c"; // magenta
const D = "#3a3a5e"; // línea tenue

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 150" fill="none" className="h-full w-full" aria-hidden="true">
      {children}
    </svg>
  );
}

const arts: Record<Kind, React.ReactNode> = {
  notebook: (
    <Frame>
      <path d="M45 40h110a6 6 0 0 1 6 6v56H39V46a6 6 0 0 1 6-6Z" stroke={D} strokeWidth="3" />
      <rect x="50" y="47" width="100" height="48" rx="2" stroke={C} strokeWidth="2.5" />
      <path d="M30 102h140l8 12a4 4 0 0 1-3.6 6H25.6a4 4 0 0 1-3.6-6l8-12Z" stroke={V} strokeWidth="3" />
      <path d="M84 108h32" stroke={M} strokeWidth="3" strokeLinecap="round" />
      <path d="M60 60h30M60 70h50M60 80h22" stroke={C} strokeWidth="2.5" strokeLinecap="round" opacity=".8" />
    </Frame>
  ),
  gpu: (
    <Frame>
      <rect x="24" y="52" width="140" height="58" rx="6" stroke={V} strokeWidth="3" />
      <path d="M164 66h14v30h-14" stroke={D} strokeWidth="3" />
      <circle cx="66" cy="81" r="18" stroke={C} strokeWidth="3" />
      <circle cx="66" cy="81" r="7" stroke={C} strokeWidth="2.5" />
      <circle cx="122" cy="81" r="18" stroke={M} strokeWidth="3" />
      <circle cx="122" cy="81" r="7" stroke={M} strokeWidth="2.5" />
      <path d="M40 110v14M150 110v14" stroke={D} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  ),
  cpu: (
    <Frame>
      <rect x="55" y="35" width="90" height="90" rx="8" stroke={C} strokeWidth="3" />
      <rect x="72" y="52" width="56" height="56" rx="4" stroke={V} strokeWidth="2.5" />
      <path d="M72 68h56M72 84h56M72 92h56" stroke={M} strokeWidth="2" opacity=".7" />
      <g stroke={D} strokeWidth="3" strokeLinecap="round">
        <path d="M70 35V22M100 35V22M130 35V22M70 125v13M100 125v13M130 125v13" />
        <path d="M55 62H42M55 92H42M145 62h13M145 92h13" />
      </g>
    </Frame>
  ),
  monitor: (
    <Frame>
      <rect x="26" y="26" width="148" height="88" rx="7" stroke={V} strokeWidth="3" />
      <rect x="36" y="36" width="128" height="68" rx="3" stroke={C} strokeWidth="2.5" />
      <path d="M55 88l22-30 16 20 12-16 24 26" stroke={M} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M92 114v14M74 132h52" stroke={D} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  ),
  keyboard: (
    <Frame>
      <rect x="20" y="46" width="160" height="60" rx="8" stroke={V} strokeWidth="3" />
      <g stroke={C} strokeWidth="2.5" strokeLinecap="round">
        <path d="M34 62h8M50 62h8M66 62h8M82 62h8M98 62h8M114 62h8M130 62h8M146 62h8M162 62h4" />
        <path d="M34 76h8M50 76h8M66 76h8M82 76h8M98 76h8M114 76h8M130 76h8M146 76h8" />
      </g>
      <path d="M62 90h76" stroke={M} strokeWidth="3.5" strokeLinecap="round" />
    </Frame>
  ),
  mouse: (
    <Frame>
      <path d="M100 34c26 0 40 20 40 46v18c0 24-16 40-40 40s-40-16-40-40V80c0-26 14-46 40-46Z" stroke={V} strokeWidth="3" />
      <path d="M100 40v34" stroke={D} strokeWidth="3" />
      <path d="M100 48v18" stroke={M} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M83 96c0 22 34 22 34 0" stroke={C} strokeWidth="2.5" opacity=".7" />
    </Frame>
  ),
  headset: (
    <Frame>
      <path d="M44 92V80a56 56 0 0 1 112 0v12" stroke={V} strokeWidth="3" strokeLinecap="round" />
      <rect x="32" y="86" width="24" height="42" rx="10" stroke={C} strokeWidth="3" />
      <rect x="144" y="86" width="24" height="42" rx="10" stroke={C} strokeWidth="3" />
      <path d="M144 116h-16a10 10 0 0 0-10 10v6" stroke={M} strokeWidth="3" strokeLinecap="round" />
      <circle cx="112" cy="132" r="4" fill={M} />
    </Frame>
  ),
  chair: (
    <Frame>
      <path d="M66 30h58a10 10 0 0 1 10 10v44a10 10 0 0 1-10 10H66a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10Z" stroke={V} strokeWidth="3" />
      <path d="M78 48v28M100 48v28M122 48v28" stroke={C} strokeWidth="2.5" opacity=".7" />
      <path d="M95 104v14M70 118h50M95 118v18M60 140l35-4 35 4" stroke={D} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 96l-6 20M138 96l6 20" stroke={M} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  ),
  ram: (
    <Frame>
      <rect x="30" y="46" width="140" height="58" rx="5" stroke={V} strokeWidth="3" />
      <g stroke={C} strokeWidth="2.5">
        <rect x="44" y="58" width="16" height="24" rx="2" />
        <rect x="70" y="58" width="16" height="24" rx="2" />
        <rect x="96" y="58" width="16" height="24" rx="2" />
        <rect x="122" y="58" width="16" height="24" rx="2" />
      </g>
      <path d="M40 104v8M60 104v8M80 104v8M100 104v8M120 104v8M140 104v8M160 104v8" stroke={D} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 94h100" stroke={M} strokeWidth="2.5" strokeLinecap="round" opacity=".8" />
    </Frame>
  ),
  ssd: (
    <Frame>
      <rect x="34" y="58" width="132" height="34" rx="5" stroke={V} strokeWidth="3" />
      <path d="M34 74h132" stroke={D} strokeWidth="2" opacity=".6" />
      <g stroke={C} strokeWidth="3" strokeLinecap="round">
        <path d="M150 66v6M150 78v6M160 66v6M160 78v6" />
      </g>
      <path d="M50 75h44" stroke={M} strokeWidth="3" strokeLinecap="round" />
      <rect x="28" y="66" width="10" height="18" rx="2" stroke={D} strokeWidth="2.5" />
    </Frame>
  ),
  mobo: (
    <Frame>
      <rect x="30" y="26" width="140" height="98" rx="6" stroke={D} strokeWidth="3" />
      <rect x="46" y="42" width="34" height="34" rx="3" stroke={C} strokeWidth="2.5" />
      <g stroke={V} strokeWidth="3">
        <path d="M100 44h54M100 56h54M100 68h54" />
      </g>
      <rect x="46" y="90" width="108" height="18" rx="3" stroke={M} strokeWidth="2.5" />
      <path d="M63 59v18M138 90v-6" stroke={C} strokeWidth="2" opacity=".6" />
    </Frame>
  ),
  case: (
    <Frame>
      <path d="M52 24h76a6 6 0 0 1 6 6v96a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6V30a6 6 0 0 1 6-6Z" stroke={V} strokeWidth="3" />
      <rect x="60" y="36" width="60" height="60" rx="3" stroke={C} strokeWidth="2.5" opacity=".6" />
      <circle cx="76" cy="56" r="10" stroke={M} strokeWidth="2.5" />
      <circle cx="76" cy="82" r="10" stroke={C} strokeWidth="2.5" />
      <path d="M60 108h40M60 116h28" stroke={D} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  ),
  pc: (
    <Frame>
      <path d="M40 30h44a6 6 0 0 1 6 6v84a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6V36a6 6 0 0 1 6-6Z" stroke={V} strokeWidth="3" />
      <circle cx="62" cy="56" r="12" stroke={C} strokeWidth="2.5" />
      <circle cx="62" cy="88" r="12" stroke={M} strokeWidth="2.5" />
      <rect x="104" y="40" width="72" height="52" rx="4" stroke={C} strokeWidth="3" />
      <path d="M118 96h44l6 10a3 3 0 0 1-2.7 4.5H114.7A3 3 0 0 1 112 106l6-10Z" stroke={V} strokeWidth="3" />
      <path d="M118 62l14-12 10 12 8-8" stroke={M} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
};

export default function ProductArt({ kind, className = "" }: { kind: Kind; className?: string }) {
  return <div className={className}>{arts[kind]}</div>;
}
