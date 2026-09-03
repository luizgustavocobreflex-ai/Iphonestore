import type { PhoneColorway } from "@/components/phone/PhoneModel";

export interface Product {
  id: string;
  name: string;
  storage: string;
  color: string;
  colorway: PhoneColorway;
  price: number;
  tag: string | null;
  specs: {
    display: string;
    chip: string;
    camera: string;
    battery: string;
    storage: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "ip16",
    name: "iPhone 16",
    storage: "128 GB",
    color: "Titânio Natural",
    colorway: "natural",
    price: 6499,
    tag: null,
    specs: {
      display: '6.1" Super Retina XDR',
      chip: "A18",
      camera: "Dupla 48MP",
      battery: "Até 22h de vídeo",
      storage: "128 / 256 / 512 GB",
    },
  },
  {
    id: "ip16pro",
    name: "iPhone 16 Pro",
    storage: "256 GB",
    color: "Titânio Deserto",
    colorway: "desert",
    price: 8999,
    tag: "Mais procurado",
    specs: {
      display: '6.3" Super Retina XDR ProMotion',
      chip: "A18 Pro",
      camera: "Tripla 48MP Pro",
      battery: "Até 27h de vídeo",
      storage: "256 / 512 / 1TB",
    },
  },
  {
    id: "ip16promax",
    name: "iPhone 16 Pro Max",
    storage: "512 GB",
    color: "Titânio Preto",
    colorway: "black",
    price: 11499,
    tag: "Edição limitada",
    specs: {
      display: '6.9" Super Retina XDR ProMotion',
      chip: "A18 Pro",
      camera: "Tripla 48MP Pro",
      battery: "Até 33h de vídeo",
      storage: "256 / 512 / 1TB",
    },
  },
];

export const HOTSPOTS = [
  { id: "island", title: "Dynamic Island", text: "Alertas e atividades ganham vida na borda superior da tela, sem interromper o que você está fazendo." },
  { id: "camera", title: "Câmera Pro", text: "Sistema fotográfico avançado com sensores maiores, captando mais luz e detalhe em qualquer cenário." },
  { id: "titanium", title: "Design em Titânio", text: "Estrutura de titânio grau aeroespacial: leve, resistente e com um acabamento à altura de uma joia." },
  { id: "screen", title: "Super Retina XDR", text: "Brilho recorde e contraste absoluto, com ProMotion que adapta a taxa de atualização a cada toque." },
];

export const TESTIMONIALS = [
  { name: "Mariana", place: "São Paulo, SP", product: "iPhone 16 Pro", text: "Chegou muito bem embalado e antes do prazo. O atendimento tirou todas as minhas dúvidas antes da compra." },
  { name: "Rafael", place: "Belo Horizonte, MG", product: "iPhone 16 Pro Max", text: "Comprei pelo WhatsApp mesmo, sem complicação nenhuma. O aparelho é lacrado e a nota veio certinha." },
  { name: "Camila", place: "Porto Alegre, RS", product: "iPhone 16", text: "Já é minha segunda compra na loja. Preço justo e o suporte responde rápido quando eu preciso." },
];

export const FAQS = [
  { q: "Os aparelhos são lacrados e originais?", a: "Sim. Todos os iPhones são lacrados de fábrica, com nota fiscal e garantia válida em todo o território nacional." },
  { q: "Quais formas de pagamento vocês aceitam?", a: "Pix, cartão de crédito em até 12x e transferência bancária. Consulte condições especiais direto com um especialista." },
  { q: "Vocês enviam para todo o Brasil?", a: "Sim, enviamos para todos os estados com transportadoras rastreadas e seguro incluso no frete." },
  { q: "Existe garantia após a compra?", a: "Todos os produtos contam com garantia de fábrica e suporte pós-venda dedicado da nossa equipe." },
];

export const money = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
