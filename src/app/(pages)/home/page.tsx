import { Appointments } from '@/app/components/home/Appointments'
import { Banner } from '@/app/components/home/Banner'
import { FAQs } from '@/app/components/home/FAQs/FAQs'
import { Features } from '@/app/components/home/Features'
import { Footer } from '@/app/components/home/footer'
import { Header } from '@/app/components/home/Header'
import HowWork from '@/app/components/home/How-work'
import { OurServices } from '@/app/components/home/Our-services'
import { Paterners } from '@/app/components/home/Paterners'
import StartNow from '@/app/components/home/Start-now'
import { WantToBe } from '@/app/components/home/Want-to-be'
import { WeTake } from '@/app/components/home/We-take'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Paterners />
      <Features />
      <HowWork />
      <OurServices />
      <WeTake />
      <Appointments />
      <WantToBe />
      <StartNow />
      <FAQs />
      <Footer />
    </main>
  )
}
