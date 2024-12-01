import Image from 'next/image'
import React from 'react'
import { imgBanner } from '../assets/images'
import { VectorSvg } from '../assets/svgs'
import { Button } from '@/components/ui/button'

export default function Banner() {
  return (
    <div
      className="w-full flex items-center flex-col-reverse overflow-hidden mt-14 pt-8 xl:flex-row px-8 gap-[94px]
     mx-auto md:px-[162px] justify-between"
    >
      <div className="max-w-[644px] flex flex-col gap-4 justify-center lg:justify-start">
        <h1 className="text-3xl font-medium  lg:text-5xl lg:font-bold text-center xl:text-left leading-tight tracking-wide text-[#3D3D3D]">
          Cuidamos do <span className="text-secondaryColor">seu lar</span> para
          você cuidar do que importa!
        </h1>
        <p className="text-lg lg:text-[28px] leading-tight font-yrsa text-center xl:text-left my-4 tracking-wide text-[#3D3D3D]">
          A Flix Home oferece serviços residenciais sob demanda, com
          profissionais qualificados e preços fixos.
        </p>
        <Button variant={'secondary'}>Experimente Agora</Button>
      </div>

      <div className="relative lg:mr-6">
        <div className="w-[444px] h-[570px] bg-secondaryColor rounded-[35px] rounded-tr-[191px]" />
        <Image
          src={imgBanner}
          alt="image banner"
          className="absolute z-40 bottom-0 right-1/2 translate-x-1/2 max-w-[899px]"
        />
      </div>
      <Image
        src={VectorSvg}
        alt="Vector svg"
        className="absolute z-40 bottom-[150px] w-[200px] lg:w-auto  lg:top-[500px] md:bottom-0 right-0 "
      />
    </div>
  )
}
