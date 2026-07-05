import { IconStar } from "./Icons";

export default function Stars({ value, className = "" }: { value: number; className?: string }) {
  const full = Math.round(value);
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${value} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar
          key={i}
          className={`h-3.5 w-3.5 ${i < full ? "text-amber" : "text-line"}`}
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-fog">{value.toFixed(1)}</span>
    </span>
  );
}
