"use client";
import { FlashSvg, ShieldTickSvg, UserTickSvg } from "@/app/assets/svgs";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { TimeIcon } from "@/app/assets/images";
import { useTranslations } from "next-intl";

export function Features() {
  const t = useTranslations();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full h-[91px] px-3 md:px-[50px] hidden md:flex items-center gap-[10px] overflow-x-auto lg:overflow-hidden whitespace-nowrap lg:whitespace-normal"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex items-center gap-3">
          <Image
            src={ShieldTickSvg}
            alt="Shield Tick Svg"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <h3 className="font-semibold font-inter leading-[16.8px] md:leading-[21.6px] text-sm md:text-lg text-[#1A1A1A]">
              {t("Home.Features.first")}
            </h3>
            <p className="text-[#808080] text-xs md:text-base font-normal font-inter leading-[14.4px] md:leading-[19.2px] mt-[6px]">
              {t("Home.Features.first_description")}
            </p>
          </div>
        </div>

        <div className="h-8 w-px ml-5 md:ml-0 bg-[#E6E6E6]" />

        <div className="flex items-center gap-3 w-[350px]">
          <Image src={UserTickSvg} alt="User Tick Svg" width={40} height={40} />
          <div className="flex flex-col">
            <h3 className="font-semibold font-inter text-lg text-[#1A1A1A]">
              {t("Home.Features.second")}
            </h3>
            <p className="text-[#808080] text-xs md:text-base font-normal font-inter leading-[14.4px] md:leading-[19.2px] mt-[6px]">
              {t("Home.Features.second_description")}
            </p>
          </div>
        </div>

        <div className="h-8 w-px bg-[#E6E6E6]" />

        <div className="flex items-center gap-3">
          <Image src={FlashSvg} alt="Flash Svg" width={40} height={40} />
          <div className="flex flex-col">
            <h3 className="font-semibold font-inter text-lg text-[#1A1A1A]">
              {t("Home.Features.three")}
            </h3>
            <p className="text-[#808080] text-base font-normal font-inter leading-[19.2px] mt-[6px]">
              {t("Home.Features.three_description")}
            </p>
          </div>
        </div>

        <div className="h-8 w-px bg-[#E6E6E6]" />

        <div className="flex items-center gap-3">
          <Image src={TimeIcon} alt="Moneys Svg" width={40} height={40} />
          <div className="flex flex-col">
            <h3 className="font-semibold font-inter text-lg text-[#1A1A1A]">
              {t("Home.Features.four")}
            </h3>
            <p className="text-[#808080] text-base font-normal font-inter leading-[19.2px] mt-[6px]">
              {t("Home.Features.four_description")}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full h-[91px] px-3 md:px-[50px] md:hidden flex items-center gap-5 overflow-x-auto lg:overflow-hidden whitespace-nowrap lg:whitespace-normal"
        style={{ scrollbarWidth: "none" }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-[91px] mt-5 flex items-center gap-20 md:hidden"
        >
          <SwiperSlide>
            <div className="flex items-center gap-3 w-[290px]">
              <Image
                src={ShieldTickSvg}
                alt="Shield Tick Svg"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <h3 className="font-semibold font-inter leading-[16.8px] md:leading-[21.6px] text-sm md:text-lg text-[#1A1A1A]">
                  {t("Home.Features.first")}
                </h3>
                <p className="text-[#808080] text-xs md:text-base font-normal font-inter leading-[14.4px] md:leading-[19.2px] mt-[6px]">
                  {t("Home.Features.first_description")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-3">
              <Image
                src={UserTickSvg}
                alt="User Tick Svg"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <h3 className="font-semibold font-inter leading-[16.8px] md:leading-[21.6px] text-sm md:text-lg text-[#1A1A1A]">
                  {t("Home.Features.second")}
                </h3>
                <p className="text-[#808080] text-xs md:text-base font-normal font-inter leading-[14.4px] md:leading-[19.2px] mt-[6px]">
                  {t("Home.Features.second_description")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-3 w-[290px]">
              <Image src={FlashSvg} alt="Flash Svg" width={40} height={40} />
              <div className="flex flex-col">
                <h3 className="font-semibold font-inter leading-[16.8px] md:leading-[21.6px] text-sm md:text-lg text-[#1A1A1A]">
                  {t("Home.Features.three")}
                </h3>
                <p className="text-[#808080] text-xs md:text-base font-normal font-inter leading-[14.4px] md:leading-[19.2px] mt-[6px]">
                  {t("Home.Features.three_description")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-3">
              <Image src={TimeIcon} alt="Moneys Svg" width={40} height={40} />
              <div className="flex flex-col">
                <h3 className="font-semibold font-inter leading-[16.8px] md:leading-[21.6px] text-sm md:text-lg text-[#1A1A1A]">
                  {t("Home.Features.four")}
                </h3>
                <p className="text-[#808080] text-xs md:text-base font-normal font-inter leading-[14.4px] md:leading-[19.2px] mt-[6px]">
                  {t("Home.Features.four_description")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <div className="w-full mt-10">
            <button type="button" className="w-2 h-2 bg-transparent" />
          </div>
        </Swiper>
      </motion.div>
    </>
  );
}
