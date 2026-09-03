import { useState } from "react";
import { PRODUCTS, money } from "@/data/products";

const ROWS: { key: keyof (typeof PRODUCTS)[number]["specs"]; label: string }[] = [
  { key: "display", label: "Tela" },
  { key: "chip", label: "Chip" },
  { key: "camera", label: "Câmera" },
  { key: "battery", label: "Bateria" },
  { key: "storage", label: "Armazenamento" },
];

export default function Compare() {
  const [aId, setAId] = useState(PRODUCTS[1].id);
  const [bId, setBId] = useState(PRODUCTS[2].id);
  const a = PRODUCTS.find((p) => p.id === aId)!;
  const b = PRODUCTS.find((p) => p.id === bId)!;

  return (
    <section id="comparar">
      <div className="section-head">
        <p className="eyebrow">Escolha certa</p>
        <h2>Compare dois modelos.</h2>
        <p>Selecione duas versões e veja lado a lado o que muda de verdade.</p>
      </div>
      <div className="compare-selects">
        <label className="compare-select">
          A
          <select value={aId} onChange={(e) => setAId(e.target.value)}>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label className="compare-select">
          B
          <select value={bId} onChange={(e) => setBId(e.target.value)}>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="compare-grid">
        <div className="compare-row">
          <div className="compare-label" />
          <div className="compare-head">{a.name}</div>
          <div className="compare-head">{b.name}</div>
        </div>
        {ROWS.map((row) => (
          <div className="compare-row" key={row.key}>
            <div className="compare-label">{row.label}</div>
            <div className="compare-val">{a.specs[row.key]}</div>
            <div className="compare-val">{b.specs[row.key]}</div>
          </div>
        ))}
        <div className="compare-row">
          <div className="compare-label">Preço</div>
          <div className="compare-val">{money(a.price)}</div>
          <div className="compare-val">{money(b.price)}</div>
        </div>
      </div>
    </section>
  );
}
