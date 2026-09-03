import { waLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="logo" style={{ marginBottom: 14 }}>
            <span />
            Aurum iPhones
          </div>
          <p style={{ color: "var(--bone-dim)", fontSize: 13.5, maxWidth: 260 }}>
            Loja independente especializada em iPhone. Não somos afiliados à Apple Inc.
          </p>
        </div>
        <div className="footer-col">
          <h5>Loja</h5>
          <a href="#produtos">iPhones</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#comparar">Comparar modelos</a>
        </div>
        <div className="footer-col">
          <h5>Suporte</h5>
          <a href="#faq">Perguntas frequentes</a>
          <a href={waLink()} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
        <div className="footer-col">
          <h5>Empresa</h5>
          <a href="#confianca">Sobre nós</a>
          <a href="#hero">Contato</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aurum iPhones. Todos os direitos reservados.</span>
        <span>Loja independente — não representa a Apple Inc.</span>
      </div>
    </footer>
  );
}
