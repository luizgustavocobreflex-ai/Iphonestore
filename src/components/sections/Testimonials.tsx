import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section>
      <div className="section-head">
        <p className="eyebrow">Quem já comprou</p>
        <h2>Experiências reais.</h2>
      </div>
      <div className="testi-grid">
        {TESTIMONIALS.map((t) => (
          <div className="testi-card" key={t.name}>
            <p className="quote">&ldquo;{t.text}&rdquo;</p>
            <div className="testi-name">
              {t.name} — {t.product}
            </div>
            <div className="testi-meta">{t.place}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
