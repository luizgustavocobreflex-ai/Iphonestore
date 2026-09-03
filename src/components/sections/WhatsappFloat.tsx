import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function WhatsappFloat({ onCursor }: { onCursor: (label?: string) => any }) {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" {...onCursor("Abrir")}>
      <MessageCircle size={26} />
    </a>
  );
}
