import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function StartNow() {
  return (
    <div className="w-full mt-5 md:mt-12 flex items-center justify-center flex-col gap-y-4 px-4 md:px-8">
      <h2 className="text-lg md:text-2xl text-[#3D3D3D] font-semibold font-inter leading-[21.78px] md:leading-[29.05px]">Comece agora mesmo!</h2>
      <p className="mt-0 md:mt-3 text-[#3D3D3D] text-xs md:text-lg text-center font-normal font-inter leading-[14.52px] md:leading-[21.78px] -tracking-[2%] max-w-[854px] w-full">
        A Flix Home é mais do que uma plataforma de serviços domésticos – somos
        seu parceiro confiável para facilitar o dia a dia.
      </p>
      <Button variant={'ghost'} className="bg-[#3C91E6] w-[124px] md:w-[166px] h-[30px] md:h-[41px] mt-[15px] md:mt-[30px] rounded-[5px] flex items-center gap-[7px] md:gap-[10px] py-[9px] px-[7px] md:py-3 md:px-[10px] text-[#FFFFFF] text-[10px] md:text-sm font-medium font-inter leading-[12.71px] md:leading-[16.94px]">
        Experimente agora
        <ArrowRight size={9} color='#FFFFFF' />
      </Button>
    </div>
  )
}
