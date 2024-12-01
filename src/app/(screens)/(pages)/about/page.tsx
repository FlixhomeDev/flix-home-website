import { playCircle } from "@/app/assets/icon";
import { FemaleAbout, UserAbout, Vector, Vector1 } from "@/app/assets/images";
import Benefits from "@/app/components/Benefits";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="w-full h-auto p-6 lg:p-0 m-0">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="relative flex items-center justify-center  w-full lg:w-[479px] h-auto lg:h-[800px]">
            <div className="relative mt-28 lg:mt-0 ">
              <div className="lg:w-[444px] w-[330px] z-40 h-[350px] lg:h-[500px] bg-secondaryColor rounded-[35px] rounded-tr-[191px]" />
              <Image
                src={UserAbout}
                alt="image banner"
                className="absolute z-40 bottom-0 right-1/2 translate-x-1/2 lg:max-w-[899px]"
              />
            </div>
            <Image
              src={Vector1}
              alt="Vector svg"
              className="flex lg:hidden absolute z-40 lg:top-[420px] rotate-[25deg] lg:rotate-[10deg] top-[320px] w-[250px] mr-44 lg:w-[500px] lg:bottom-0 right-0 lg:mr-32 "
            />
            <Image
              src={Vector}
              alt="Vector svg"
              className="hidden lg:flex absolute z-40 lg:top-[420px] lg:w-[500px] lg:bottom-0 right-0 lg:mr-32 "
            />
          </div>

          <div className="lg:flex-1 w-full lg:w-[100px] h-auto ml-3 mr-3 pl-3 pr-3 mt-36 lg:pt-[0px] font-normal font-yrsa lg:text-lg text-base text-gray-600">
            <div className="lg:w-full h-[80px] lg:h-[90px] lg:px-8 lg:mt-20 mb-5 lg:bg-[url('/Layer2.png')] bg-[url('/layerMobile.png')] bg-no-repeat bg-center lg:bg-[center_right_16rem]">
              <h1 className="lg:text-5xl text-center text-2xl font-medium font-fredoka pt-[15px] lg:pt-0">
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
        <div className="container mx-auto text-center flex flex-col items-center justify-center">
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

      <section className="w-full flex flex-col lg:mt-10 text-center items-center justify-center py-8 p-6 lg:p-0">
        <div className="container mx-auto lg:w-[854px] px-4 text-center space-y-4 self-center">
          <div className="w-full h-auto bg-[url('/layerMobile.png')] lg:bg-[url('/Layer2.png')] bg-no-repeat bg-[top_10px_right_165px] lg:bg-[center_right_8rem]">
            <h2 className="lg:text-5xl text-2xl text-gray-600 font-medium font-fredoka pb-14">
              Comece agora mesmo!
            </h2>
          </div>

          <p className="text-base lg:text-lg w-[310px] lg:w-[650px] lg:ml-20 text-gray-600 font-normal font-yrsa lg:mt-4 mt-0">
            A Flix Home é mais do que uma plataforma de serviços domésticos –
            somos seu parceiro confiável para facilitar o dia a dia.
          </p>

          <button className="w-[196px] h-[61px] bg-primaryColor text-white text-lg font-normal font-fredoka rounded-[14px]">
            Experimente Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2024 The Home. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary">
              Termos de Serviço
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
