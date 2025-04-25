"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { LogoWhite, LogoWk, Skylla } from "@/app/assets/images";

const logos = [LogoWk, LogoWhite, Skylla, LogoWk, LogoWhite, Skylla];

// Função que retorna o número de slides no mobile
const getAmount = () => 3;

export function Paterners() {
  return (
    <div
      className="bg-[#3C91E6] h-[60px] w-full flex items-center justify-center gap-[10px] p-[10px] lg:overflow-hidden whitespace-nowrap lg:whitespace-normal overflow-x-scroll scroll-mr-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="md:hidden w-full mx-[10px]  flex items-center justify-between gap-x-5">
        <Swiper
          spaceBetween={12}
          slidesPerView={getAmount()}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          speed={600}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full flex items-center gap-10 md:hidden px-[10px]"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                className="h-[25px] w-28"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden w-full lg:mx-[132px] md:flex items-center justify-center gap-x-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="h-[25px] w-36"
        >
          <Image src={LogoWk} alt="ProSaas Svg" className="h-full w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="h-[25px] w-36"
        >
          <Image src={LogoWhite} alt="Nol City Svg" className="h-full w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="h-[25px] w-36"
        >
          <Image src={Skylla} alt="Mata Svg" className="h-full w-full" />
        </motion.div>
      </div>
    </div>
  );
}
