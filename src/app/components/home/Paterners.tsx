import {
  MataSvg,
  NolCitySvg,
  ProSaasSvg,
  RandSvg,
  TechHouseSvg,
} from '@/app/assets/svgs'
import Image from 'next/image'
import React from 'react'

export function Paterners() {
  return (
    <div
      className="bg-[#3C91E6] h-[60px] w-full flex items-center justify-center gap-[10px] p-[10px] lg:overflow-hidden whitespace-nowrap lg:whitespace-normal overflow-x-scroll scroll-mr-4"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="w-full mx-[132px] flex items-center justify-between gap-x-20">
        <Image src={ProSaasSvg} alt="ProSaas Svg" />
        <Image src={NolCitySvg} alt="Nol City Svg" />
        <Image src={MataSvg} alt="Mata Svg" />
        <Image src={RandSvg} alt="Rand Svg" />
        <Image src={TechHouseSvg} alt="Tech House Svg" />
      </div>
    </div>
  )
}
