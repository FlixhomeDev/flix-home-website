"use client";

import BreadcrumbBar from "@/components/Breadcrumb";
import Image from "next/image";
import { ServiceBg } from "@/app/assets/images";
import { FAQs } from "@/app/components/home/FAQs/FAQs";

export default function AboutUs() {
  return (
    <div>
      <div className="w-full mx-auto mt-[80px] md:mt-[100px]">
        <div className="mb-2 px-4 md:px-[70px] hidden md:block">
          <BreadcrumbBar
            items={[{ label: "Home", href: "/home" }, { label: "Sobre Nós" }]}
          />
        </div>
        <div className="px-[15px] md:px-[70px]">
          <span className="text-[10px] md:text-base text-[#185CFF] font-bold font-manrope leading-[8.67px] md:leading-[16px] -tracking-[1.5%]">About Us</span>
        </div>
        <h2 className="mt-[10px] md:mt-[15px] text-2xl md:text-[32px] text-[#292D33] font-bold md:font-extrabold font-inter leading-[29.05px] md:leading-[38.76px] -tracking-[1.5%] px-[15px] md:px-[70px]">
          Transformar o cuidado com o lar em algo descomplicado e acessível.
        </h2>

        <p className="text-[#6F6F6F] text-xs md:text-lg font-normal font-inter leading-[14.52px] md:leading-[21.78px] mt-[10px] md:mt-[15px] px-[15px] md:px-[70px]">
          A Flix Home é uma plataforma que simplifica o cuidado com o lar,
          oferecendo serviços domésticos de forma confiável e acessível. Nosso
          objetivo é prevenir problemas antes que eles aconteçam, através de
          planos de manutenção preventiva, e também oferecer soluções rápidas e
          eficientes para problemas pontuais, como reparos ou limpeza.
        </p>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-10 px-4 md:px-[70px]">
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-2 md:w-5 h-px border border-[#0E2141]" />
              <h3 className="text-[#3C91E6] font-semibold font-inter text-xs md:text-[20px] leading-[14.52px] md:leading-[24.2px]">
                Nossa Missão
              </h3>
            </div>
            <p className="text-[#6F6F6F] text-[10px] md:text-base font-normal font-inter leading-[12.1px] mt-[4px] md:mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-2 md:w-5 h-px border border-[#0E2141]" />
              <h3 className="text-[#3C91E6] font-semibold font-inter text-xs md:text-[20px] leading-[14.52px] md:leading-[24.2px]">
                Nossa Missão
              </h3>
            </div>
            <p className="text-[#6F6F6F] text-[10px] md:text-base font-normal font-inter leading-[12.1px] mt-[4px] md:mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-2 md:w-5 h-px border border-[#0E2141]" />
              <h3 className="text-[#3C91E6] font-semibold font-inter text-xs md:text-[20px] leading-[14.52px] md:leading-[24.2px]">
                Nossa Missão
              </h3>
            </div>
            <p className="text-[#6F6F6F] text-[10px] md:text-base font-normal font-inter leading-[12.1px] mt-[4px] md:mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>

        <div className="w-full mx-auto mt-[60px] md:mt-[100px] md:mb-[150px] flex flex-col">
          <div className="w-full h-[175px] md:h-[500px]">
            <Image src={ServiceBg} alt="ServiceBg" className="w-full h-full" />
          </div>
          <div className="max-w-full w-full h-[41px] md:h-[106px] gap-[20px] bg-[#F1F6FA] flex items-center justify-center py-[6.86px] md:py-[20px]">
            <div className="flex flex-col gap-y-1">
              <h4 className="text-[#3C91E6] text-[10px] md:text-3xl font-bold font-inter leading-[11.33px] md:leading-[33px] -tracking-[1.5%]">1830+</h4>
              <p className="text-[#9497A1] text-[6.86px] md:text-xl font-normal font-inter leading-[8.31px] md:leading-[33px] -tracking-[1.5%]">Lares Atendidos</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-[#3C91E6] text-[10px] md:text-3xl font-bold font-inter leading-[11.33px] md:leading-[33px] -tracking-[1.5%]">834+</h4>
              <p className="text-[#9497A1] text-[6.86px] md:text-xl font-normal font-inter leading-[8.31px] md:leading-[33px] -tracking-[1.5%]">Profissionais Qualificados</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-[#3C91E6] text-[10px] md:text-3xl font-bold font-inter leading-[11.33px] md:leading-[33px] -tracking-[1.5%]">390</h4>
              <p className="text-[#9497A1] text-[6.86px] md:text-xl font-normal font-inter leading-[8.31px] md:leading-[33px] -tracking-[1.5%]">Avaliações Positivas</p>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <FAQs />
        </div>
      </div>
    </div>
  );
}
