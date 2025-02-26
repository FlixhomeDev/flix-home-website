import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function StartNow() {
  return (
    <div className="w-full mt-12 flex items-center justify-center flex-col gap-y-4 px-4 md:px-8">
      <h2 className="text-lg md:text-2xl text-[#3D3D3D] font-semibold font-inter leading-[29.05px]">Comece agora mesmo!</h2>
      <p className="mt-3 text-[#3D3D3D] text-lg text-center font-normal font-inter leading-[21.78px] -tracking-[2%] max-w-[854px] w-full">
        A Flix Home é mais do que uma plataforma de serviços domésticos – somos
        seu parceiro confiável para facilitar o dia a dia.
      </p>
      <Button variant={'ghost'} className="bg-[#3C91E6] w-[166px] h-[41px] mt-[30px] rounded-[5px] flex items-center gap-[10px] py-3 px-[10px] text-[#FFFFFF] text-sm font-medium font-inter leading-[16.94px]">
        Experimente agora
        <ArrowRight size={9} color='#FFFFFF' />
      </Button>
    </div>
  )
}
