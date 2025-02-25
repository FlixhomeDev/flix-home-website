import {
  FlashSvg,
  MoneysSvg,
  ShieldTickSvg,
  UserTickSvg,
} from '@/app/assets/svgs'
import Image from 'next/image'
import React from 'react'

export function Features() {
  return (
    <div
      className="w-full h-[91px] px-[50px] flex items-center gap-5 overflow-x-auto lg:overflow-hidden whitespace-nowrap lg:whitespace-normal"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="flex items-center gap-3 w-[290px]">
        <Image
          src={ShieldTickSvg}
          alt="Shield Tick Svg"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <h3 className="font-semibold font-inter text-lg text-[#1A1A1A]">Confiabilidade</h3>
          <p className="text-[#1A1A1A] text-base font-normal font-inter leading-[19.2px] mt-[6px]">
            Todos os profissionais são treinados e avaliados.
          </p>
        </div>
      </div>

      <div className="h-8 w-px bg-[#E6E6E6]" />

      <div className="flex items-center gap-3">
        <Image src={UserTickSvg} alt="User Tick Svg" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-semibold font-inter text-lg text-[#1A1A1A]">Tranquilidade</h3>
          <p className="text-[#1A1A1A] text-base font-normal font-inter leading-[19.2px] mt-[6px] w-[290px]">
            Planos de manutenção preventiva para evitar surpresas.
          </p>
        </div>
      </div>

      <div className="h-8 w-px bg-[#E6E6E6]" />

      <div className="flex items-center gap-3 w-[290px]">
        <Image src={FlashSvg} alt="Flash Svg" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-semibold font-inter text-lg text-[#1A1A1A]">Agilidade</h3>
          <p className="text-[#1A1A1A] text-base font-normal font-inter leading-[19.2px] mt-[6px]">
            Agendamento simples, sem complicações.
          </p>
        </div>
      </div>

      <div className="h-8 w-px bg-[#E6E6E6]" />

      <div className="flex items-center gap-3">
        <Image src={MoneysSvg} alt="Moneys Svg" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-semibold font-inter text-lg text-[#1A1A1A]">Atendimento</h3>
          <p className="text-[#1A1A1A] text-base font-normal font-inter leading-[19.2px] mt-[6px]">Sem surpresas no orçamento.</p>
        </div>
      </div>
    </div>
  )
}
