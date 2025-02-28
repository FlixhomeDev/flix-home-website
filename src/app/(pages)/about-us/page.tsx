"use client";

import BreadcrumbBar from "@/components/Breadcrumb";
import Image from "next/image";
import { ServiceBg } from "@/app/assets/images";

export default function AboutUs() {
  return (
    <div>
      <div className="w-full mx-auto mt-[100px]">
        <div className="mb-2 px-4 md:px-[70px]">
          <BreadcrumbBar
            items={[{ label: "Home", href: "/home" }, { label: "Sobre Nós" }]}
          />
        </div>
        <div className="px-[70px]">
          <span className="text-base text-[#185CFF] font-bold font-manrope leading-[16px] -tracking-[1.5%]">About Us</span>
        </div>
        <h2 className="mt-[15px] md:text-[32px] text-[#292D33] font-extrabold font-inter leading-[38.76px] -tracking-[1.5%] md:px-[70px]">
          Transformar o cuidado com o lar em algo descomplicado e acessível.
        </h2>

        <p className="text-[#6F6F6F] text-lg font-normal font-inter leading-[21.78px]  mt-[15px] px-4 md:px-[70px]">
          A Flix Home é uma plataforma que simplifica o cuidado com o lar,
          oferecendo serviços domésticos de forma confiável e acessível. Nosso
          objetivo é prevenir problemas antes que eles aconteçam, através de
          planos de manutenção preventiva, e também oferecer soluções rápidas e
          eficientes para problemas pontuais, como reparos ou limpeza.
        </p>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-4 md:px-[70px]">
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-5 h-px border border-[#0E2141]" />
              <h3 className="text-[#3C91E6] font-semibold font-inter text-[20px]">
                Nossa Missão
              </h3>
            </div>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-5 h-px border border-[#0E2141]" />
              <h3 className="text-[#3C91E6] font-semibold font-inter text-[20px] leading-[21.2px]">
                Nossa Missão
              </h3>
            </div>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-5 h-px border border-[#0E2141]" />
              <h3 className="text-[#3C91E6] font-semibold font-inter text-[20px] leading-[21.2px]">
                Nossa Missão
              </h3>
            </div>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>

        <div className="w-full mx-auto mt-8 flex flex-col">
          <Image src={ServiceBg} alt="ServiceBg" className="w-full h-[590px]" />
          <div className="max-w-full w-full h-[106px] gap-[20px] bg-[#F1F6FA] flex items-center justify-center py-[20px] px-[370px] md:px-8">
            <div className="flex flex-col gap-y-1">
              <h4 className="text-[#3C91E6] font-semibold font-inter">1830</h4>
              <p className="text-gray-500">Lares Atendidos</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-[#3C91E6] font-bold">834+</h4>
              <p className="text-gray-500">Profissionais Qualificados</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-[#3C91E6] font-bold">390</h4>
              <p className="text-gray-500">Avaliações Positivas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
