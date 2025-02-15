import { backgroundImage } from '@/app/assets/images'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export function Banner() {
  return (
    <div className="max-w-[1256px] w-full flex flex-col lg:flex-row gap-8 items-center justify-between mx-auto mt-7">
      <div className="flex flex-col">
        <h1 className="text-[32px] font-bold max-w-[521px] w-full text-center lg:text-left">
          Prevenir é sempre mais barato do que corrigir
        </h1>
        <p className="text-[#6F6F6F] text-xl max-w-[410px] mt-4 text-center lg:text-left">
          Simplifique o cuidado com o seu lar com a Flix Home!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-auto lg:mx-0">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primaryColor">+2.000</span>
            <span className="text-lg text-primaryColor">
              Famílias atendidas
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primaryColor">+150</span>
            <span className="text-lg text-primaryColor">
              Serviços para sua casa
            </span>
          </div>
        </div>

        <div className="flex gap-2 mt-5 mx-auto lg:mx-0">
          <Button variant={'ghost'} className="bg-primaryColor text-white">
            Solicite um Serviço Agora!
          </Button>
          <Button
            variant={'outline'}
            className="border border-primaryColor text-primaryColor hover:text-primaryColor hover:opacity-60"
          >
            Fale conosco
            <ArrowRightIcon size={14} />
          </Button>
        </div>
      </div>
      <Image
        src={backgroundImage}
        alt="Background Image"
        width={584}
        height={456}
      />
    </div>
  )
}
