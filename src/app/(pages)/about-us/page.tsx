"use client";

import BreadcrumbBar from "@/components/Breadcrumb";
import Image from "next/image";
import { ServiceBg } from "@/app/assets/images";

export default function AboutUs() {
  return (
    <div>
      <div className="max-w-[1256px] w-full mx-auto mt-[100px]">
        <div className="mb-4 px-4 md:px-8">
          <BreadcrumbBar
            items={[{ label: "Home", href: "/home" }, { label: "Sobre Nós" }]}
          />
        </div>
        <h2 className="text-lg md:text-2xl font-bold px-4 md:px-8">
          Transformar o cuidado com o lar em algo descomplicado e acessível.
        </h2>

        <p className="text-gray-500 mt-3 px-4 md:px-8">
          A Flix Home é uma plataforma que simplifica o cuidado com o lar,
          oferecendo serviços domésticos de forma confiável e acessível. Nosso
          objetivo é prevenir problemas antes que eles aconteçam, através de
          planos de manutenção preventiva, e também oferecer soluções rápidas e
          eficientes para problemas pontuais, como reparos ou limpeza.
        </p>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-4 md:px-8">
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-5 h-px border border-gray-400" />
              <h3 className="text-primaryColor font-bold text-lg">
                Nossa Missão
              </h3>
            </div>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, 
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-5 h-px border border-gray-400" />
              <h3 className="text-primaryColor font-bold text-lg">
                Nossa Missão
              </h3>
            </div>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, 
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-5 h-px border border-gray-400" />
              <h3 className="text-primaryColor font-bold text-lg">
                Nossa Missão
              </h3>
            </div>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, 
            </p>
          </div>
        </div>

        <div className="w-full mx-auto mt-8 flex flex-col">
          <Image src={ServiceBg} alt="ServiceBg" className="" />
          <div className="max-w-full w-full gap-x-12 bg-gray-100 flex items-center justify-center py-6 px-4 md:px-8">
            <div className="flex flex-col gap-y-1">
              <h4 className="text-primaryColor font-bold">1830+</h4>
              <p className="text-gray-500">Lares Atendidos</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-primaryColor font-bold">834+</h4>
              <p className="text-gray-500">Profissionais Qualificados</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-primaryColor font-bold">390</h4>
              <p className="text-gray-500">Avaliações Positivas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
