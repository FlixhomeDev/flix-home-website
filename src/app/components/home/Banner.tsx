import { backgroundImage } from "@/app/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export function Banner() {
  return (
    <div className="max-w-[1256px] w-full flex flex-col lg:flex-row gap-8 items-center mx-auto px-[27px] md:px-[132px] mt-36 lg:mt-28">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-2xl md:text-[32px] text-[#000000] leading-[29.05px] md:leading-[38.73px] font-bold font-inter  md:max-w-[521px] w-full text-center lg:text-left">
          Prevenir é sempre mais barato do que corrigir
        </h1>
        <p className="text-[#6F6F6F] text-xl md:text-2xl leading-[21.78px] md:leading-[29.05px] font-normal font-inter -tracking-[1.5%] max-w-[306px] md:max-w-[410px] mt-4 text-center lg:text-left">
          Simplifique o cuidado com o seu lar com a Flix Home!
        </p>

        <div className="flex items-center justify-center md:justify-normal gap-[14px] mt-[10px] md:mt-5">
          <div className="flex items-center gap-[8px] md:gap-[11px] w-[89.85px] md:w-[141.8px]">
            <span className="text-[13px] leading-[29.87px] md:leading-[0px] md:text-base font-bold font-helvetica text-[#3C91E6] tracking-[2%]">+2.000</span>
            <span className="text-[8px] leading-[9.68px] md:text-base text-[#3C91E6] font-normal font-inter tracking-[2%] md:leading-[19.36px]">
              Famílias atendidas
            </span>
          </div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-[8px] md:gap-[11px] w-[94.85px] md:w-[161.8px]">
            <span className="text-[13px] leading-[29.87px] md:leading-[0px] md:text-base font-bold font-helvetica text-[#3C91E6] tracking-[2%]">+150</span>
            <span className="text-[8px] leading-[9.68px] md:text-base font-normal font-inter text-[#3C91E6] tracking-[2%] md:leading-[19.36px]">
              Serviços <br /> para sua casa
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[7.5px] md:gap-[10px] mt-[10px] md:mt-5 mx-auto lg:mx-0">
          <Button variant={'ghost'} className="flex items-center gap-[5.44px] md:gap-[10px] py-[6px] px-[5.44px] md:px-[10px] md:py-3 bg-[#3C91E6] border border-[#3C91E6] hover:bg-[#ffffff] hover:text-[#3C91E6] text-[#ffffff] text-[9px] md:text-sm font-normal md:font-medium font-inter leading-[10.89px] md:leading-[16.94px] md:w-[215px] w-[144px] h-[23.25px] md:h-[41px]">
            Solicite um Serviço Agora!
            <ArrowRightIcon size={2} />
          </Button>
          <Button
            variant={'outline'}
            className="md:w-[128px] w-[90.23px] h-[23.25px] md:h-[41px] py-[6px] px-[5px] md:py-auto md:px-auto border border-[#3C91E6] text-[#3C91E6] hover:text-[#3C91E6] hover:opacity-60 md:text-sm text-[9px] font-normal md:font-medium font-inter leading-[10.89px] md:leading-[16.94px]"
          >
            Fale conosco
            <ArrowRightIcon size={9} />
          </Button>
        </div>
      </div>
      <div className='w-[272px] h-[212px] md:w-[584px] md:h-[456px] mt-[29px]'>
        <Image
          src={backgroundImage}
          alt="Background Image"
          className='w-full h-full'
        />
      </div>
    </div>
  );
}
