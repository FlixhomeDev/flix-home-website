"use client";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { LogoWhite, LogoWk, Skylla } from "@/app/assets/images";

export function Paterners() {
  return (
    <div
      className="bg-[#3C91E6] h-[60px] w-full flex items-center justify-center gap-[10px] p-[10px] lg:overflow-hidden whitespace-nowrap lg:whitespace-normal overflow-x-scroll scroll-mr-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="md:hidden w-full mx-[50px]  flex items-center justify-between gap-x-5">
        <Image src={LogoWk} alt="ProSaas Svg" />
        <Image src={LogoWhite} alt="Nol City Svg" />
        <Image src={Skylla} alt="Mata Svg" />
      </div>

      <div className="w-full lg:mx-[132px] flex items-center justify-between gap-x-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Image src={LogoWk} alt="ProSaas Svg" className="h-7" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Image src={LogoWhite} alt="Nol City Svg" className="h-7" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image src={Skylla} alt="Mata Svg" className="h-7" />
        </motion.div>
      </div>
    </div>
  );
}
