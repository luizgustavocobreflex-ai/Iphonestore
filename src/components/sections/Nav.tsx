import { useEffect, useState } from "react";
import { Search, ShoppingBag, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function Nav({ onCursor }: { onCursor: (label?: string) => { onMouseEnter: () => void; onMouseLeave: () => void } }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span />
        Aurum iPhones
      </div>
      <div className="nav-links">
        <a href="#hero">Início</a>
        <a href="#produtos">iPhones</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#confianca">Sobre nós</a>
        <a href="#faq">Contato</a>
      </div>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Buscar" {...onCursor("Buscar")}>
          <Search size={18} />
        </button>
        <button className="icon-btn" aria-label="Carrinho" {...onCursor("Carrinho")}>
          <ShoppingBag size={18} />
        </button>
        <a className="nav-cta" href={waLink()} target="_blank" rel="noreferrer" {...onCursor("Abrir")}>
          <MessageCircle size={14} /> Falar agora
        </a>
      </div>
    </nav>
  );
}
