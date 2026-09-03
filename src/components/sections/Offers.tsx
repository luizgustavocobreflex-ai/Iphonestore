import { waLink } from "@/lib/whatsapp";

export default function Offers({ onCursor }: { onCursor: (label?: string) => any }) {
  return (
    <section id="ofertas">
      <div className="section-head">
        <p className="eyebrow">Condições da semana</p>
        <h2>Ofertas selecionadas.</h2>
      </div>
      <div className="offer-grid">
        <div className="offer-card big">
          <span className="offer-tag">Últimas unidades</span>
          <h3>iPhone 16 Pro Max — Titânio Preto</h3>
          <p>Poucas unidades disponíveis nesta configuração de 512 GB.</p>
          <a className="btn-ghost" style={{ width: "fit-content" }} href={waLink("iPhone 16 Pro Max")} target="_blank" rel="noreferrer" {...onCursor("Ver")}>
            Ver oferta
          </a>
        </div>
        <div className="offer-card mid">
          <span className="offer-tag">Condição especial</span>
          <h3>Entrada facilitada</h3>
          <p>Parcelamento estendido para o iPhone 16 nas primeiras compras.</p>
        </div>
        <div className="offer-card mid">
          <span className="offer-tag">Fidelidade</span>
          <h3>Troca do seu aparelho</h3>
          <p>Avalie seu iPhone atual como parte do pagamento do novo.</p>
        </div>
      </div>
    </section>
  );
}
