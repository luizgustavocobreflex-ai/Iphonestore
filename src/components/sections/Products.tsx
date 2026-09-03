import { ArrowUpRight } from "lucide-react";
import PhoneScene from "@/components/phone/PhoneScene";
import { PRODUCTS, money } from "@/data/products";
import { waLink } from "@/lib/whatsapp";

export default function Products({ onCursor }: { onCursor: (label?: string) => any }) {
  return (
    <section id="produtos">
      <div className="section-head">
        <p className="eyebrow">Linha atual</p>
        <h2>Modelos em destaque.</h2>
        <p>Uma seleção enxuta dos iPhones mais procurados, prontos para pronta-entrega.</p>
      </div>
      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <div className="product-card" key={p.id}>
            {p.tag && <span className="product-tag">{p.tag}</span>}
            <div className="product-visual">
              <PhoneScene colorway={p.colorway} autoRotate={false} interactive={false} />
            </div>
            <h3>{p.name}</h3>
            <div className="product-meta">
              {p.storage} · {p.color}
            </div>
            <div className="product-price">{money(p.price)}</div>
            <div className="product-install">ou 12x de {money(Math.round(p.price / 12))}</div>
            <a className="product-cta" href={waLink(p.name)} target="_blank" rel="noreferrer" {...onCursor("Ver")}>
              <span>Ver detalhes</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
