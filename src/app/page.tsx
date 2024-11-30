import Banner from './components/Banner'
import FAQs from './components/FAQs'
import Footer from './components/footer'
import Header from './components/Header'
import HowWorks from './components/how-works'
import Partners from './components/partners'
import SecurityAndQuality from './components/security-quality'
import Services from './components/Services'
import StartNow from './components/start-now'
import Testimonials from './components/testimonials'
export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <Header />
      <Banner />
      <Services />
      <Testimonials />
      <SecurityAndQuality />
      <HowWorks />
      <FAQs />
      <Partners />
      <StartNow />
      <Footer />
    </main>
  )
}
