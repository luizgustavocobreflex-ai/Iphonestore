import { useEffect, useState, useCallback } from "react";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Strip from "@/components/sections/Strip";
import Products from "@/components/sections/Products";
import DetailHotspots from "@/components/sections/DetailHotspots";
import Compare from "@/components/sections/Compare";
import Trust from "@/components/sections/Trust";
import Offers from "@/components/sections/Offers";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import WhatsappFloat from "@/components/sections/WhatsappFloat";
import CustomCursor from "@/components/sections/CustomCursor";

function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, label: "" });

  useEffect(() => {
    const move = (e: MouseEvent) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const onCursor = useCallback(
    (label?: string) => ({
      onMouseEnter: () => setCursor((c) => ({ ...c, label: label || "Ver" })),
      onMouseLeave: () => setCursor((c) => ({ ...c, label: "" })),
    }),
    []
  );

  return (
    <div className="page">
      <CustomCursor x={cursor.x} y={cursor.y} label={cursor.label} />
      <Nav onCursor={onCursor} />
      <Hero onCursor={onCursor} />
      <Strip />
      <Products onCursor={onCursor} />
      <DetailHotspots />
      <Compare />
      <Trust />
      <Offers onCursor={onCursor} />
      <Testimonials />
      <Faq />
      <FinalCta onCursor={onCursor} />
      <Footer />
      <WhatsappFloat onCursor={onCursor} />
    </div>
  );
}

export default App;
