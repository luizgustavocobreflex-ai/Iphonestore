import { ArrowUpRight } from "lucide-react";
import PhoneScene from "@/components/phone/PhoneScene";
import { waLink } from "@/lib/whatsapp";

export default function Hero({ onCursor }: { onCursor: (label?: string) => any }) {
  return (
    <section id="hero" className="hero">
      <div>
        <p className="hero-eyebrow">Loja independente especializada em iPhone</p>
        <h1>
          Seu próximo <em>iPhone</em>
          <br />
          começa aqui.
        </h1>
        <p>
          Tecnologia, design e performance em uma experiência de compra criada para quem exige mais — do
          primeiro toque na tela até a caixa na sua porta.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#produtos" {...onCursor("Ver")}>
            Ver iPhones <ArrowUpRight size={16} />
          </a>
          <a className="btn-ghost" href="#comparar" {...onCursor("Explorar")}>
            Explorar modelos
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <PhoneScene colorway="desert" autoRotate interactive />
        <div className="hero-hint">Arraste para girar · role para aproximar</div>
      </div>
    </section>
  );
}
