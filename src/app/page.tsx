import { Banner } from './components/home/Banner'
import { Features } from './components/home/Features'
import { Footer } from './components/home/footer'
import { Header } from './components/home/Header'
import HowWork from './components/home/How-work'
import { OurServices } from './components/home/Our-services'
import { Paterners } from './components/home/Paterners'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Paterners />
      <Features />
      <HowWork />
      <OurServices />
      <Footer />
    </main>
  )
}
