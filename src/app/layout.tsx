import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import localFont from "next/font/local";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Fonte local variável
const interLocal = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-local",
});

// Fonte do Google como fallback
const interGoogle = Inter({
  subsets: ["latin"],
  variable: "--font-inter-google",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FlixHome",
  description:
    "A FlixHome é uma startup portuguesa dedicada a simplificar o cuidado com o lar. Oferecemos uma plataforma inovadora que conecta clientes a profissionais altamente qualificados, proporcionando serviços residenciais de qualidade, com preços fixos e total transparência.",
  icons: {
    icon: "/favicon.ico",
  },
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
  authors: [{ name: "FlixHome", url: "https://flixhome.com" }],
  openGraph: {
    title: "FlixHome",
    description:
      "Descubra serviços confiáveis para sua casa. De reparações a jardinagem, estamos prontos para ajudar.",
    url: "https://flixhome.com/servicos-domesticos-portugal",
    siteName: "FlixHome",
    images: [
      {
        url: "https://drive.google.com/file/d/1idmo3JX_513cfMjMLcHxhP_5LgYXHB6o/view?usp=drive_link",
        width: 800,
        height: 600,
        alt: "Imagem representando serviços domésticos",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços Domésticos em Portugal | FlixHome",
    description:
      "Soluções práticas para cuidados com o lar. Agende serviços de limpeza, reparações e mais!",
    images: [
      "https://drive.google.com/file/d/1idmo3JX_513cfMjMLcHxhP_5LgYXHB6o/view?usp=drive_link",
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${interLocal.variable} ${interGoogle.variable} font-Inter antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
