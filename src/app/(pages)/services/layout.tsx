import { Footer } from "@/app/components/home/footer";
import { Header } from "@/app/components/home/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flix Home Portugal | Serviços de Manutenção e Reparações",
  description:
    "Oferecemos manutenção preventiva de ativos residenciais e serviços como reparações e limpezas.",
  keywords: [
    "Serviços domésticos Portugal",
    "Manutenção de casas",
    "Limpeza doméstica",
    "Reparações domésticas",
    "Jardinagem residencial",
    "Serviços domésticos em Porto",
    "Jardinagem em Porto",
    "Limpeza doméstica Algarve",
    "Reparação de canalização no Porto",
    "Assistência técnica ao domicílio no Porto",
    "Preços fixos para serviços domésticos",
    "Serviços de casa com profissionais confiáveis",
    "Agendamento rápido para serviços residenciais",
    "Preciso de ajuda com manutenção do lar, onde encontrar?",
    "Como agendar um serviço de canalização online?",
    "Onde encontrar serviços domésticos confiáveis?",
    "Quanto custa contratar serviços de limpeza?",
  ],
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
