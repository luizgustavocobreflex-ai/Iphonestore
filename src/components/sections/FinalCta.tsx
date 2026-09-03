import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function FinalCta({ onCursor }: { onCursor: (label?: string) => any }) {
  return (
    <section>
      <div className="final-cta">
        <h2>Pronto para o seu próximo iPhone?</h2>
        <p>Fale agora com um especialista e receba uma recomendação sob medida para o seu uso e orçamento.</p>
        <a className="btn-primary" href={waLink()} target="_blank" rel="noreferrer" {...onCursor("Abrir")}>
          Falar com um especialista <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
