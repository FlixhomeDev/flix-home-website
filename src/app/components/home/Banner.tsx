"use client";
import { backgroundImage } from "@/app/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";

export function Banner() {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1256px] w-full flex flex-col lg:flex-row xl:max-w-full xl:justify-between gap-8 items-center px-[27px] md:px-[132px] mt-40 lg:mt-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col"
      >
        <h1 className="text-2xl md:text-[32px] text-[#000000] leading-[29.05px] md:leading-[38.73px] font-bold font-interBold  md:max-w-[521px] w-full text-center md:text-left">
          {t("Home.Banner.prevention")}
        </h1>
        <p className="text-[#6F6F6F] text-sm md:text-lg font-normal font-inter max-w-[306px] md:max-w-[410px] mt-4 text-center mx-auto lg:ml-0 lg:text-left">
          {t("Home.Banner.simplify")}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center md:justify-normal gap-[20px] mt-[10px] md:mt-5 mx-auto md:mx-0 w-fit"
        >
          {/* Bloco 1 */}
          <div className="flex items-center gap-[8px] md:gap-[11px]">
            <div className="flex flex-col items-end justify-end">
              <span className="text-[8px] leading-[9.68px] md:text-base text-[#3C91E6] font-normal font-inter tracking-[2%] md:leading-[19.36px]">
                {t("Home.Banner.help")}
              </span>
              <span className="md:hidden block text-[8px] leading-[9.68px] md:text-base text-[#3C91E6] font-normal font-inter tracking-[2%] md:leading-[19.36px]">
                {t("Home.Banner.families_served")}
              </span>
            </div>
            <span className="text-[13px] leading-[29.87px] md:leading-[0px] md:text-base font-bold font-helvetica text-[#3C91E6] tracking-[2%]">
              +1.000
            </span>
            <span className="md:block hidden text-[8px] leading-[9.68px] md:text-base text-[#3C91E6] font-normal font-inter tracking-[2%] md:leading-[19.36px]">
              {t("Home.Banner.families_served")}
            </span>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-200" />

          {/* Bloco 2 */}
          <div className="flex items-center gap-[8px] md:gap-[11px]">
            <span className="text-[13px] leading-[29.87px] md:leading-[0px] md:text-base font-bold font-helvetica text-[#3C91E6] tracking-[2%]">
              +150
            </span>
            <span className="text-[8px] leading-[9.68px] md:text-base font-normal font-inter text-[#3C91E6] tracking-[2%] md:leading-[19.36px]">
              {t("Home.Banner.services")} <br />
              {t("Home.Banner.for_your_home")}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-[7.5px] md:gap-[10px] mt-[10px] md:mt-5 mx-auto lg:mx-0"
        >
          <Button
            variant={"ghost"}
            className="flex items-center gap-[5.44px] md:gap-[10px] py-[6px] px-[5.44px] md:px-[10px] md:py-3 bg-[#3C91E6] border border-[#3C91E6] hover:bg-[#ffffff] hover:text-[#3C91E6] text-[#ffffff] text-[9px] md:text-sm font-normal md:font-medium font-inter leading-[10.89px] md:leading-[16.94px] md:w-[280px] w-[180px] h-[23.25px] md:h-[41px]"
          >
            {t("Home.Banner.request_a_service_now!")}
            <ArrowRightIcon size={2} />
          </Button>
          <Button
            variant={"outline"}
            className="md:w-[148px] w-[100.23px] h-[23.25px] md:h-[41px] py-[6px] px-[5px] md:py-auto md:px-auto border border-[#3C91E6] text-[#3C91E6] hover:text-[#3C91E6] hover:opacity-60 md:text-sm text-[9px] font-normal md:font-medium font-inter leading-[10.89px] md:leading-[16.94px]"
          >
            {t("Home.Banner.contact_us")}
            <ArrowRightIcon size={9} />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-[272px] h-[212px] md:w-[584px] md:h-[456px] mt-[29px]"
      >
        <Image
          src={backgroundImage}
          alt="Background Image"
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}
