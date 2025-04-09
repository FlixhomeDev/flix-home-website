import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import Cookie from "js-cookie";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CookieConsent from "./components/CookieContent";

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
  title:
    "Flix Home | Manutenção Preventiva e Serviços Residenciais em Portugal",
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
    "manutenção preventiva residencial Portuga",
    "planos de manutenção casa Lisboa",
    "serviços domésticos rápidos",
    "como evitar problemas na canalização",
    "manutenção elétrica barata em Porto",
    "diagnóstico grátis casa Portugal",
    "",
  ],
  authors: [{ name: "FlixHome", url: "https://flixhome.com" }],
  openGraph: {
    title: "FlixHome",
    description:
      "A Flix Home simplifica o cuidado com a casa através de planos de manutenção preventiva e serviços on-demand em Portugal.",
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
  applicationName: "FlixHome - Serviços Domésticos",
  generator: "Next.js",
  category: "Serviços Domésticos",
  alternates: {
    canonical: "https://flixhome.com",
    languages: {
      "pt-PT": "https://flixhome.com/pt",
      "en-US": "https://flixhome.com/en",
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const savedLocale = Cookie.get("lang");
  const locale = savedLocale || "pt";
  const direction = locale === "ar" || locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="FlixHome" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://flixhome.com" />
      </head>
      <body
        className={`${interLocal.variable} ${interGoogle.variable} font-Inter antialiased`}
      >
        <NextIntlClientProvider>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
