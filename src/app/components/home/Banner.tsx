import { backgroundImage } from '@/app/assets/images'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export function Banner() {
  return (
    <div className="max-w-[1256px] w-full flex flex-col lg:flex-row gap-8 items-center px-[132px] mt-7">
      <div className="flex flex-col">
        <h1 className="text-[32px] text-[#000000] leading-[38.73px] font-bold font-inter max-w-[521px] w-full text-center lg:text-left">
          Prevenir é sempre mais barato do que corrigir
        </h1>
        <p className="text-[#6F6F6F] text-2xl leading-[29.05px] font-normal font-inter -tracking-[1.5%] max-w-[410px] mt-4 text-center lg:text-left">
          Simplifique o cuidado com o seu lar com a Flix Home!
        </p>

        <div className="flex items-center gap-[14px] mt-5">
          <div className="flex items-center gap-[11px] w-[141.8px]">
            <span className="text-base font-bold font-helvetica text-[#3C91E6] tracking-[2%]">+2.000</span>
            <span className="text-base text-[#3C91E6] font-normal font-inter tracking-[2%] leading-[19.36px]">
              Famílias atendidas
            </span>
          </div>
          <div className="flex items-center gap-[11px] w-[161.8px]">
            <span className="text-base font-bold font-helvetica text-[#3C91E6] tracking-[2%]">+150</span>
            <span className="text-base font-normal font-inter text-[#3C91E6] tracking-[2%] leading-[19.36px]">
              Serviços <br /> para sua casa
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[10px] mt-5 mx-auto lg:mx-0">
          <Button variant={'ghost'} className="flex items-center gap-[10px] px-[10px] py-3 bg-[#3C91E6] border border-[#3C91E6] hover:bg-[#ffffff] hover:text-[#3C91E6] text-[#ffffff] text-sm font-medium font-inter leading-[16.94px] w-[215px]">
            Solicite um Serviço Agora!
            <ArrowRightIcon size={9} />
          </Button>
          <Button
            variant={'outline'}
            className="w-[128px] border border-[#3C91E6] text-[#3C91E6] hover:text-[#3C91E6] hover:opacity-60 text-sm font-medium font-inter leading-[16.94px]"
          >
            Fale conosco
            <ArrowRightIcon size={9} />
          </Button>
        </div>
      </div>
      <div className='w-[584px] h-[456px] mt-[29px]'>
        <Image
          src={backgroundImage}
          alt="Background Image"
          className='w-full h-full'
        />
      </div>
    </div>
  )
}
