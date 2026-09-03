import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VÉRTICE | iPhone 17 Pro Max",
  description:
    "Experiência premium dedicada ao iPhone 17 Pro Max, com imagens oficiais, acabamentos selecionados e atendimento especializado.",
  openGraph: {
    title: "VÉRTICE | iPhone 17 Pro Max",
    description:
      "Conheça o iPhone 17 Pro Max em Cosmic Orange, Deep Blue e Silver.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#070a0d] text-white">{children}</body>
    </html>
  );
}
