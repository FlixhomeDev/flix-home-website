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
      className="bg-primaryColor h-11 w-full flex items-center justify-center lg:overflow-hidden whitespace-nowrap lg:whitespace-normal px-4 overflow-x-scroll scroll-mr-4"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="max-w-[1256px] w-full mx-auto flex items-center justify-between gap-x-20">
        <Image src={ProSaasSvg} alt="ProSaas Svg" />
        <Image src={NolCitySvg} alt="Nol City Svg" />
        <Image src={MataSvg} alt="Mata Svg" />
        <Image src={RandSvg} alt="Rand Svg" />
        <Image src={TechHouseSvg} alt="Tech House Svg" />
      </div>
    </div>
  )
}
