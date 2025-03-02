

import { FlashSvg, MoneysSvg, ShieldTickSvg, UserTickSvg } from '@/app/assets/svgs'
import Image from 'next/image'
import React from 'react'

const FEATURES = [
  {
    icon: ShieldTickSvg,
    title: 'Confiabilidade',
    description:
      'Todos os profissionais são treinados e avaliados.',
  },
  {
    icon: UserTickSvg,
    title: 'Tranquilidade',
    description:
      'Planos de manutenção preventiva para evitar surpresas.',
  },
  {
    icon: FlashSvg,
    title: 'Agilidade',
    description:
      'Agendamento simples, sem complicações.',
  },
  {
    icon: MoneysSvg,
    title: 'Preço fixo',
    description:
      'Sem surpresas no orçamento.',
  },
]

export function Features() {
  return (
    <div
      className="w-full p-3 md:px-[50px] flex items-center gap-x-5 overflow-x-auto lg:overflow-hidden whitespace-nowrap lg:whitespace-normal"
      style={{ scrollbarWidth: 'none' }}
    >
      {FEATURES.map((feature, index) => (
        <div key={feature.title} className="flex">
          <div className="flex items-center gap-3 w-[400px] lg:w-[85%]">
            <Image
              src={feature.icon}
              alt="Shield Tick Svg"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <h3 className="font-semibold font-inter leading-[16.8px] md:leading-[21.6px] text-sm md:text-base text-[#1A1A1A]">
                Confiabilidade
              </h3>
              <p className="text-[#808080] text-xs md:text-sm font-normal font-inter leading-[14.4px] md:leading-[19.2px] mt-[6px]">
                Todos os profissionais são treinados e avaliados.
              </p>
            </div>
          </div>
          {index !== FEATURES.length - 1 && (
            <div className="h-8 w-px bg-[#E6E6E6] self-center" />
          )}
        </div>
      ))}



    </div>
  )
}
