import { Footer } from '@/app/components/home/footer'
import { Header } from '@/app/components/home/Header'
import type { Metadata } from 'next'
import { TopHeader } from '../components/home/TopHeader'

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
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </>
  )
}
