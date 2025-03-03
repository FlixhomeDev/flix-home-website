"use client"
import {
  MataSvg,
  NolCitySvg,
  ProSaasSvg,
  RandSvg,
  TechHouseSvg,
} from '@/app/assets/svgs'
import Image from 'next/image'
import { motion } from 'motion/react'
import React from 'react'

export function Paterners() {
  return (
    <div
      className="bg-[#3C91E6] h-[60px] w-full flex items-center justify-center gap-[10px] p-[10px] lg:overflow-hidden whitespace-nowrap lg:whitespace-normal overflow-x-scroll scroll-mr-4"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="md:hidden w-full mx-[50px]  flex items-center justify-between gap-x-5">
        <Image src={ProSaasSvg} alt="ProSaas Svg" />
        <Image src={NolCitySvg} alt="Nol City Svg" />
        <Image src={MataSvg} alt="Mata Svg" />
        <Image src={RandSvg} alt="Rand Svg" />
        <Image src={TechHouseSvg} alt="Tech House Svg" />
      </div>

      <div className="w-full mx-[132px] flex items-center justify-between gap-x-20">
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}>

          <Image src={ProSaasSvg} alt="ProSaas Svg" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}>

          <Image src={NolCitySvg} alt="Nol City Svg" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}>

          <Image src={MataSvg} alt="Mata Svg" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}>

          <Image src={RandSvg} alt="Rand Svg" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}>

          <Image src={TechHouseSvg} alt="Tech House Svg" />
        </motion.div>
      </div>
    </div>
  )
}
