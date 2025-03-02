import { WeTake01, WeTake02 } from "@/app/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { WeTake01, WeTake02 } from "@/app/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export function WeTake() {
  return (
    <div className="mt-10 lg:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 h-[284px] relative z-10">
      <Image
        src={WeTake01}
        alt="We Take your home"
        className="h-[284px] hidden lg:flex"
        className="h-[284px] hidden lg:flex"
      />
      <div className="relative">
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-primaryColor/90 h-[284px]" />
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-primaryColor/90 h-[284px]" />
        <Image
          src={WeTake02}
          alt="We Take your home"
          className="h-[284px] absolute -z-10"
          className="h-[284px] absolute -z-10"
        />
        <div className="relative flex flex-col justify-center items-center z-50 h-[284px]">
          <div className="relative flex flex-col justify-center items-center z-50 h-[284px]">
            <h2 className="text-center lg:text-left text-white text-2xl font-bold">
              Cuidamos do seu lar, do jeito que gostarias
            </h2>
            <p className="mt-2 max-w-[508px] w-full text-white text-center lg:text-left">
              Transformar o cuidado com o lar em algo descomplicado e acessível e
              Proporcionar confiança, eficiência e tempo para nossos clientes
            </p>
            <Button
              variant={"ghost"}
              className="bg-white text-primaryColor mt-5 mx-auto relative"
            >
              Ver Planos preventivos
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
      );
      );
}
