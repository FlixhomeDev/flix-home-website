import Image from "next/image";
import { imageBenefits } from "../assets/images";
import { AccordionFaqs } from "./Accordion";

export default function FAQs() {
  return (
    <div className="w-full flex items-center flex-col  pt-8 lg:flex-row px-8 lg:mt-[180px] mt-[140px] gap-[94px] md:px-[112px] mx-auto justify-between">
      <div className="relative mx-auto w-full max-w-[444px]">
        <div className="lg:w-[500px] w-full h-[380px] lg:h-[510px] bg-primaryColor rounded-[35px] " />
        <Image
          src={imageBenefits}
          alt="image banner"
          className="absolute lg:pt-[180px] z-40 bottom-0 right-1/2 translate-x-1/2 max-md:w-full max-md:h-full max-w-[899px]"
        />
      </div>

      <div className="max-w-[644px] flex flex-col gap-4 justify-center lg:justify-start">
        <h1 className="text-2xl font-medium lg:text-5xl lg:font-bold text-center lg:text-left leading-normal tracking-wide text-[#3D3D3D]">
          Perguntas Frequentes (<span className="text-secondaryColor">FAQ</span>
          )
        </h1>
        <AccordionFaqs />
      </div>
    </div>
  );
}
