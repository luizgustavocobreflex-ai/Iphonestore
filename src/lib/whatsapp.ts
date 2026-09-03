export const WHATSAPP_NUMBER = "5511999999999"; // TODO: replace with the real business number

export function waLink(productName?: string) {
  const msg = productName
    ? `Olá! Tenho interesse no ${productName}. Pode me passar mais informações?`
    : "Olá! Gostaria de falar com um especialista sobre os iPhones disponíveis.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
