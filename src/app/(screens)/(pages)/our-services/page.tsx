import { playCircle } from '@/app/assets/icon'
import { Vector } from '@/app/assets/images'
import Benefits from '@/app/components/Benefits'
import Footer from '@/app/components/footer'
import Header from '@/app/components/Header'
import StartNow from '@/app/components/start-now'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="w-full h-auto p-6 lg:p-0 m-0 ">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="relative flex items-center justify-center  w-full lg:w-[479px] h-auto lg:h-[800px]">
            <div className="absolute lg:mt-30 mb-[321px] lg:mb-0 right-0 w-full h-[349px] lg:w-[450px] lg:h-[440px] bg-secondaryColor rounded-tl-[50px] rounded-tr-[120px]" />

            <div className="relative flex w-full h-[600px] mb-[270px] lg:pt-[250px] lg:mb-40 items-start justify-start bg-[url('/userAbout.png')] bg-no-repeat bg-contain lg:bg-center bg-top rounded-[34px] overflow-hidden">
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-0 right-0 lg:mr-[250px] hidden lg:flex lg:w-[250px] h-auto"
              />
            </div>
          </div>
          <div className="lg:hidden flex w-full h-[600px] mb-[270px]">
            <Image
              src={Vector}
              alt="Vector"
              className="bottom-0 mr-32 lg:w-[250px] h-auto"
            />
          </div>

          <div className="lg:flex-1 w-full lg:w-[100px] h-auto ml-3 mr-3 pl-3 pr-3 mt-8 lg:pt-[0px] font-normal font-yrsa lg:text-lg text-base text-gray-600">
            <div className="lg:w-full h-[80px] lg:h-[90px] lg:px-8 lg:mt-20 mb-5 lg:bg-[url('/Layer2.png')] bg-[url('/layerMobile.png')] bg-no-repeat bg-center lg:bg-[center_right_16rem]">
              <h1 className="lg:text-5xl text-2xl font-medium font-fredoka pt-[15px] lg:pt-0">
                Sobre à Flix Home:
              </h1>
            </div>
            <p className="lg:mt-16 lg:px-8 mt-0">
              A <strong>FlixHome</strong> é uma startup portuguesa dedicada a
              simplificar o cuidado com o lar. Oferecemos uma plataforma
              inovadora que conecta clientes a profissionais altamente
              qualificados, proporcionando serviços residenciais de qualidade,
              com preços fixos e total transparência. Seja para limpar, reparar
              ou organizar, estamos aqui para transformar sua casa com
              excelência e agilidade.
            </p>
            <p className="lg:mt-8 mt-4 lg:px-8">
              <strong>Missão:</strong> Facilitar o cuidado com o lar, oferecendo
              serviços residenciais de alta qualidade, com preços fixos,
              acessíveis e um atendimento que prioriza a confiança e a
              excelência.
            </p>
            <p className="lg:mt-8 mt-4 lg:px-8">
              <strong>Visão:</strong> Ser a referência número um em Portugal
              para serviços residenciais, liderando o mercado com inovação,
              confiança e uma experiência excepcional para clientes e
              profissionais.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="lg:py-12 py-6 lg:px-8 px-6 lg:mt-10 flex flex-col items-center justify-center w-full"
      >
        <div className="container mx-auto  text-center flex flex-col items-center justify-center">
          <div className="w-full h-auto bg-[url('/layerMobile.png')] lg:bg-[url('/Layer2.png')] bg-no-repeat bg-center lg:bg-[center_right_24rem]">
            <h2 className="lg:text-5xl text-2xl text-gray-600 font-medium font-fredoka pt-[40px] lg:pt-0 mb-16">
              Como funciona?
            </h2>
          </div>

          <p className="text-gray-600 lg:text-lg text-base text-center font-yrsa font-normal mb-7 w-full h-auto lg:w-[800px]">
            Com apenas alguns cliques, você escolhe o serviço que precisa,
            seleciona o horário ideal e conta com profissionais qualificados
            para cuidar de tudo com segurança e eficiência. Transforme sua
            rotina com a praticidade e a confiança que só a Flix Home oferece!
          </p>
          <div className="relative rounded-3xl lg:w-[1200px] lg:h-[670px] w-full h-[193px] lg:mt-8 bg-[url('/femaleAbout.png')] bg-no-repeat bg-cover lg:bg-contain lg:bg-center">
            <Image
              src={playCircle}
              alt="Vídeo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-24 lg:h-24"
            />
          </div>
        </div>
      </section>

      <Benefits />

      <StartNow />

      {/* Footer */}
      <Footer />
    </div>
  )
}
