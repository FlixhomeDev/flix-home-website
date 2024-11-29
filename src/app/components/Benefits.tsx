import Image from "next/image";
import { imageBenefits } from "../assets/images";

export default function Benefits() {
  return (
    <section className="pb-12 w-full h-[700px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex w-[500px] h-[510px] bg-[url('/Layer4.png')] bg-no-repeat">
          <Image
            src={imageBenefits}
            alt="Mulher no sofá com celular"
            className="rounded-[34px] w-[500px] h-[510px] m-28"
          />
        </div>

        <div className="flex flex-col lg:mt-64 lg:ml-28">
          <div className="w-[500px] h-[116px] bg-[url('/Layer2.png')] bg-no-repeat bg-right">
            <h2 className="text-5xl text-gray-600 font-medium font-fredoka">
              Conheça os benefícios que temos para si!
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 w-[296px] h-[137px] bg-cardBackground border-2 border-opacity-30 border-secondaryColor rounded-3xl">
              <h3 className="text-3xl text-secondaryColor font-medium font-fredoka">
                Confiança
              </h3>
              <p className="text-gray-600 mt-4 text-lg font-normal font-yrsa">
                Relacionamento transparente com clientes e prestadores.
              </p>
            </div>
            <div className="p-4 bg-cardBackground w-[296px] h-[137px] border-2 border-opacity-30 border-primaryColor rounded-3xl">
              <h3 className="text-3xl text-primaryColor font-medium font-fredoka">
                Qualidade
              </h3>
              <p className="text-gray-600 mt-4 text-lg font-normal font-yrsa">
                Compromisso com excelência.
              </p>
            </div>
            <div className="p-4 bg-cardBackground w-[296px] h-[137px] border-2 border-opacity-30 border-primaryColor rounded-3xl">
              <h3 className="text-3xl text-primaryColor font-medium font-fredoka">
                Inovação
              </h3>
              <p className="text-gray-600 mt-4 text-lg font-normal font-yrsa">
                Tecnologia para melhorar a experiência do cliente.
              </p>
            </div>
            <div className="p-4 bg-cardBackground w-[296px] h-[137px] border-2 border-opacity-30 border-secondaryColor rounded-3xl">
              <h3 className="text-3xl text-secondaryColor font-medium font-fredoka">
                Simplicidade
              </h3>
              <p className="text-gray-600 mt-4 text-lg font-normal font-yrsa">
                Agendamento fácil e rápido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
