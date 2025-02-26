"use client";
import { WeTake01, WeTake02 } from '@/app/assets/images'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export function WeTake() {
  const router = useRouter()
  return (
    <div className="mt-10 lg:mt-[50px] w-full grid grid-cols-1 lg:grid-cols-2 h-[400px]">
      <div className='h-full w-full'>
        <Image
          src={WeTake01}
          alt="We Take your home"
          className="h-full w-full hidden lg:flex"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#3C91E6DE] bg-opacity-[87%] h-full" />
        <Image
          src={WeTake02}
          alt="We Take your home"
          className="h-full absolute -z-10"
        />
        <div className="relative flex flex-col justify-center items-start mx-[50px] z-50 h-full">
          <h2 className="text-[#FFFFFF] text-2xl font-bold font-inter leading-[29.05px]">
            Cuidamos do seu lar, do jeito que gostarias
          </h2>
          <p className="mt-[10px] max-w-[480px] w-full text-[#FFFFFF] text-base font-medium font-inter leading-[19.36px]">
            Transformar o cuidado com o lar em algo descomplicado e acessível e
            Proporcionar confiança, eficiência e tempo para nossos clientes
          </p>
          <div className='self-start mt-5'>
            <Button
              onClick={() => router.push('/plans')}
              variant={'ghost'}
              className="bg-[#FFFFFF] text-[#3C91E6] text-sm font-medium font-inter leading-[16.94px] mx-auto h-[41px] w-[193px] flex items-center py-3 px-[10px] gap-[10px] border border-[#FFFFFF] rounded-[5px]"
            >
              Ver Planos preventivos
              <ArrowRight size={9} color='#3C91E6' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
