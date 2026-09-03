import { useState } from "react";
import PhoneScene from "@/components/phone/PhoneScene";
import { HOTSPOTS } from "@/data/products";

const POSITIONS: Record<string, { top: string; left: string }> = {
  island: { top: "18%", left: "50%" },
  camera: { top: "26%", left: "76%" },
  titanium: { top: "58%", left: "16%" },
  screen: { top: "70%", left: "80%" },
};

export default function DetailHotspots() {
  const [active, setActive] = useState(HOTSPOTS[0].id);
  const hotspot = HOTSPOTS.find((h) => h.id === active)!;

  return (
    <section>
      <div className="section-head">
        <p className="eyebrow">Em profundidade</p>
        <h2>Conheça cada detalhe.</h2>
        <p>Toque em cada ponto para explorar o que torna o iPhone Pro um objeto de precisão.</p>
      </div>
      <div className="detail-wrap">
        <div className="detail-stage">
          <PhoneScene colorway="black" autoRotate interactive={false} />
          {HOTSPOTS.map((h) => (
            <button
              key={h.id}
              className={`hotspot ${active === h.id ? "active" : ""}`}
              style={POSITIONS[h.id]}
              onClick={() => setActive(h.id)}
              aria-label={h.title}
            />
          ))}
        </div>
        <div className="detail-panel">
          <h3>{hotspot.title}</h3>
          <p>{hotspot.text}</p>
          <div className="detail-dots">
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                className={h.id === active ? "active" : ""}
                onClick={() => setActive(h.id)}
                aria-label={`Ir para ${h.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
