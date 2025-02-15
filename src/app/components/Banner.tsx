import Image from "next/image";
import { imgBanner } from "../assets/images";
import { VectorSvg } from "../assets/svgs";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      className="w-full flex items-center flex-col-reverse overflow-hidden mt-28 pt-8 xl:flex-row px-8 gap-[94px]
     mx-auto md:px-[162px] justify-between mb-12"
    >
      <div className="max-w-[644px] flex flex-col gap-4 justify-center lg:justify-start">
        <h1 className="text-3xl font-medium  lg:text-5xl lg:font-bold text-center xl:text-left leading-tight tracking-wide text-[#3D3D3D]">
          Cuidamos do <span className="text-primaryColor">seu lar</span> para
          você cuidar do que importa!
        </h1>
        <p className="text-lg lg:text-[28px] leading-tight font-yrsa text-center xl:text-left my-4 tracking-wide text-[#3D3D3D]">
          A Flix Home oferece serviços residenciais sob demanda, com
          profissionais qualificados e preços fixos.
        </p>
        <Link
          href={"https://wa.me/message/PHDJAIL6RKWZC1"}
          target="_blank"
          className="bg-secondaryColor max-w-full lg:w-auto lg:max-w-[196px] text-white rounded-[14px] mx-auto xl:ml-0 h-[46px]  lg:h-[61px] w-full justify-center px-6 flex items-center hover:bg-green-400 transition-all active:scale-95"
        >
          Experimente Agora
        </Link>
      </div>

      <div className="relative lg:mr-6 mx-auto w-full max-w-[444px]">
        <div className="h-[300px] w-full lg:w-[444px] lg:h-[570px] bg-secondaryColor rounded-[35px] rounded-tr-[191px]" />
        <Image
          src={imgBanner}
          alt="image banner"
          className="absolute z-40 bottom-0 right-1/2 translate-x-1/2 max-md:w-full max-md:h-[360px] lg:max-w-[510px] md:max-w-[auto] xl:max-w-[899px]"
        />
      </div>
      <Image
        src={VectorSvg}
        alt="Vector svg"
        className="absolute z-10 md:bottom-[150px] hidden md:flex md:w-[200px] lg:w-auto  lg:top-[500px] -bottom-10 right-0 "
      />
    </div>
  );
}
