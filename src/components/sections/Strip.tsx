const ITEMS = [
  "Titânio grau aeroespacial",
  "Garantia nacional",
  "Entrega para todo o Brasil",
  "Pagamento em até 12x",
  "Atendimento especializado",
  "Aparelhos 100% lacrados",
];

export default function Strip() {
  return (
    <div className="strip">
      <div className="strip-track">
        {[0, 1].map((i) => (
          <div className="strip-group" key={i}>
            {ITEMS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
