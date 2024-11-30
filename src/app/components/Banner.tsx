import Image from 'next/image'
import React from 'react'
import { imgBanner } from '../assets/images'
import { VectorSvg } from '../assets/svgs'

export default function Banner() {
  return (
    <div className="w-full flex items-center flex-col-reverse overflow-hidden mt-14 pt-8 lg:flex-row px-8 gap-[94px] md:px-[112px] mx-auto justify-between">
      <div className="max-w-[644px] flex flex-col gap-4 justify-center lg:justify-start">
        <h1 className="text-2xl font-medium lg:text-5xl lg:font-bold text-center lg:text-left leading-normal tracking-wide text-[#3D3D3D]">
          Cuidamos do <span className="text-secondaryColor">seu lar</span> para você cuidar do que importa!
        </h1>
        <p className="text-base lg:text-[28px] font-yrsa text-center lg:text-left leading-normal tracking-wide text-[#3D3D3D]">
          A Flix Home oferece serviços residenciais sob demanda, com
          profissionais qualificados e preços fixos.
        </p>
        <button
          type="button"
          className="bg-secondaryColor mt-11 text-white rounded-[14px] w-[200px] mx-auto lg:w-[235px] h-[46px] lg:h-[61px] lg:ml-0"
        >
          Experimente Agora
        </button>
      </div>

      <div className="relative">

      <div className="w-[444px] h-[570px] bg-secondaryColor rounded-[35px] rounded-tr-[191px]" />
      <Image src={imgBanner} alt='image banner' className='absolute z-40 bottom-0 right-1/2 translate-x-1/2 max-w-[899px]' />
      </div>
      <Image src={VectorSvg} alt='Vector svg' className='absolute z-40 top-[500px] lg:bottom-0 right-0 ' />  

    </div>
  )
}
