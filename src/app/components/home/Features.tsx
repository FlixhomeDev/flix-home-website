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
      className="max-w-[1256px] w-full mx-auto flex items-center justify-between gap-x-10 mt-8 overflow-x-auto lg:overflow-hidden whitespace-nowrap lg:whitespace-normal px-4"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="flex items-center gap-4">
        <Image
          src={ShieldTickSvg}
          alt="Shield Tick Svg"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <h3 className="font-bold">Confiabilidade</h3>
          <p className="text-gray-500">
            Todos os profissionais são treinados e avaliados.
          </p>
        </div>
      </div>

      <div className="h-8 w-px bg-slate-200" />

      <div className="flex items-center gap-4">
        <Image src={UserTickSvg} alt="User Tick Svg" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-bold">Tranquilidade</h3>
          <p className="text-gray-500">
            Planos de manutenção preventiva para evitar surpresas.
          </p>
        </div>
      </div>

      <div className="h-8 w-px bg-slate-200" />

      <div className="flex items-center gap-4">
        <Image src={FlashSvg} alt="Flash Svg" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-bold">Agilidade</h3>
          <p className="text-gray-500">
            Agendamento simples, sem complicações.
          </p>
        </div>
      </div>

      <div className="h-8 w-px bg-slate-200" />

      <div className="flex items-center gap-4">
        <Image src={MoneysSvg} alt="Moneys Svg" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-bold">Preço fixo</h3>
          <p className="text-gray-500">Sem surpresas no orçamento.</p>
        </div>
      </div>
    </div>
  )
}
