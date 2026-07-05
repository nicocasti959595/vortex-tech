export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" aria-hidden="true" fill="none">
        <defs>
          <linearGradient id="vtx-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="0.55" stopColor="#a855f7" />
            <stop offset="1" stopColor="#f0399c" />
          </linearGradient>
        </defs>
        <path
          d="M20 3a17 17 0 1 0 17 17"
          stroke="url(#vtx-g)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M20 9a11 11 0 1 0 11 11"
          stroke="url(#vtx-g)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path d="M11 15l9 12 9-12" stroke="url(#vtx-g)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-widest text-white">
        VÓR<span className="text-neon">TEX</span>
      </span>
    </span>
  );
}
