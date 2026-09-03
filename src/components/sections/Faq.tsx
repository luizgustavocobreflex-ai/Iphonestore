import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/products";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="section-head">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2>Perguntas e respostas.</h2>
      </div>
      <div>
        {FAQS.map((f, idx) => (
          <div className="faq-item" key={f.q}>
            <button className="faq-q" onClick={() => setOpen(open === idx ? -1 : idx)} aria-expanded={open === idx}>
              {f.q}
              {open === idx ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <div className={`faq-a ${open === idx ? "open" : ""}`}>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
