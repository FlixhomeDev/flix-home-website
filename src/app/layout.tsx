import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

// Fonte local variável
const fredokaLocal = localFont({
  src: './fonts/Fredoka-VariableFont_wdth,wght.ttf',
  variable: '--font-fredoka-local',
})

// Fonte do Google como fallback
const fredokaGoogle = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka-google',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'FlixHome',
  description:
    'A FlixHome é uma startup portuguesa dedicada a simplificar o cuidado com o lar. Oferecemos uma plataforma inovadora que conecta clientes a profissionais altamente qualificados, proporcionando serviços residenciais de qualidade, com preços fixos e total transparência.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${fredokaLocal.variable} ${fredokaGoogle.variable} font-fredoka antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
