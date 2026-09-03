import { BadgeCheck, ShieldCheck, Truck, Headset, Wallet, Wrench } from "lucide-react";

const ITEMS = [
  { icon: BadgeCheck, t: "Produtos selecionados", d: "Cada aparelho passa por checagem antes de ser enviado ao cliente." },
  { icon: ShieldCheck, t: "Compra segura", d: "Ambiente protegido, nota fiscal e garantia de fábrica em todos os pedidos." },
  { icon: Truck, t: "Envio para todo o Brasil", d: "Transportadoras rastreadas com seguro incluso em cada envio." },
  { icon: Headset, t: "Atendimento especializado", d: "Time pronto para tirar dúvidas antes, durante e depois da compra." },
  { icon: Wallet, t: "Pagamento facilitado", d: "Pix, cartão em até 12x ou transferência — você escolhe." },
  { icon: Wrench, t: "Suporte pós-venda", d: "Canal direto para assistência mesmo depois que o produto chega." },
];

export default function Trust() {
  return (
    <section id="confianca">
      <div className="section-head">
        <p className="eyebrow">Por que comprar aqui</p>
        <h2>Confiança em cada etapa.</h2>
      </div>
      <div className="trust-grid">
        {ITEMS.map(({ icon: Icon, t, d }) => (
          <div className="trust-item" key={t}>
            <Icon size={26} />
            <h4>{t}</h4>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
