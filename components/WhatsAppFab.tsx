import { waLink, WA_DEFAULT_MSG } from "@/lib/site";
import { IconWhatsapp } from "./Icons";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink(WA_DEFAULT_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-[#04231a] shadow-lg shadow-[#25D366]/30 transition hover:scale-105"
    >
      <IconWhatsapp className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[10rem]">
        Consultanos
      </span>
    </a>
  );
}
