import { Footer } from '@/app/components/home/footer'
import { Header } from '@/app/components/home/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FlixHome | Início',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
