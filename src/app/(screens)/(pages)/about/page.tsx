import { FemaleAbout, Vector } from "@/app/assets/images";
import Benefits from "@/app/components/Benefits";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="relative flex items-center justify-center w-[479px] h-[800px]">
            <div className="absolute mt-40 right-0 w-[450px] h-[500px] bg-secondaryColor rounded-tl-[50px] rounded-tr-[120px]"></div>

            <div className="relative flex w-full h-full items-start justify-start bg-[url('/userAbout.png')] bg-no-repeat bg-center rounded-[34px] overflow-hidden">
              <Image
                src={Vector}
                alt="Vector"
                className=" mt-[500px] right-0 w-[279px] h-[300px]"
              />
            </div>
          </div>

          <div className="flex-1 w-[400px] h-auto ml-3 mr-3 pl-3 pr-3 mt-8 lg:pt-[250px] font-normal font-yrsa text-lg text-gray-600">
            <div className="w-full h-auto bg-[url('/Layer2.png')] bg-no-repeat bg-center">
              <h1 className="text-5xl font-medium font-fredoka">
                Cuidamos do seu lar para você cuidar do que importa!
              </h1>
            </div>
            <p className="mt-8">
              A FlixHome é mais do que uma plataforma de serviços domésticos –
              somos seu parceiro confiável para facilitar o dia a dia.
            </p>
            <p className="mt-4">
              Nossa missão é simplificar a vida das pessoas oferecendo serviços
              domésticos com qualidade, rapidez e segurança.
            </p>
            <p className="mt-4">
              Acreditamos que o tempo é precioso, e nossa equipe de
              profissionais qualificados está aqui para garantir que você possa
              aproveitá-lo ao máximo, sem preocupações.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-12 mt-10 flex flex-col items-center justify-center w-full"
      >
        <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center">
          <div className="w-full h-auto bg-[url('/Layer2.png')] bg-no-repeat bg-[center_right_24rem]">
            <h2 className="text-5xl text-gray-600 font-medium font-fredoka mb-16">
              Como funciona?
            </h2>
          </div>

          <p className="text-gray-600 text-lg font-yrsa font-normal mb-7 w-[854px]">
            Com apenas alguns cliques, você escolhe o serviço que precisa,
            seleciona o horário ideal e conta com profissionais qualificados
            para cuidar de tudo com segurança e eficiência. Transforme sua
            rotina com a praticidade e a confiança que só a Flix Home oferece!
          </p>
          <div className="relative mt-8">
            <Image
              src={FemaleAbout}
              alt="Vídeo"
              className="rounded-3xl w-[1214px] h-[670px]"
            />
          </div>
        </div>
      </section>

      <Benefits />

      <section className="w-full flex flex-col text-center items-center justify-center py-8">
        <div className="container mx-auto w-[854px] px-4 text-center space-y-4 self-center">
          <div className="w-full h-auto bg-[url('/Layer2.png')] bg-no-repeat bg-[center_right_8rem]">
            <h2 className="text-5xl text-gray-600 font-medium font-fredoka pb-14">
              Comece agora mesmo!
            </h2>
          </div>

          <p className="text-lg w-[800px] text-gray-600 font-normal font-yrsa mt-4">
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
