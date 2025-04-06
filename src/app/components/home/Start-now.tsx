import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function StartNow() {
  const t = useTranslations();
  return (
    <div className="w-full mt-[26px] pt-5 md:mt-24 2xl:mt-64 flex items-center justify-center flex-col gap-y-4 px-4 md:px-8">
      <h2 className="text-lg md:text-2xl text-[#3D3D3D] font-semibold font-inter leading-[21.78px] md:leading-[29.05px]">
        {t("Home.Initials.title")}
      </h2>
      <p className="mt-0 md:mt-3 text-[#3D3D3D] text-xs md:text-lg text-center font-normal font-inter leading-[14.52px] md:leading-[21.78px] -tracking-[2%] max-w-[854px] w-full">
        {t("Home.Initials.description")}
      </p>
      <Link
        href={"https://wa.me/message/PHDJAIL6RKWZC1"}
        target="_blank"
        className="bg-[#3C91E6] w-[170px] md:w-[210px] h-[30px] md:h-[41px] mt-[15px] md:mt-[30px] rounded-[5px] flex items-center justify-center gap-[7px] md:gap-[10px] py-[9px] px-[7px] md:py-3 md:px-[10px] text-[#FFFFFF] text-[10px] md:text-sm font-medium font-inter leading-[12.71px] md:leading-[16.94px]"
      >
        {t("Home.Initials.button")}
        <ArrowRight size={9} color="#FFFFFF" />
      </Link>
    </div>
  );
}
