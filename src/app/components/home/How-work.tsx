import { Payment01 } from '@/app/assets/images'
import { BookSvg } from '@/app/assets/svgs'
import Image from 'next/image'
import React from 'react'

export default function HowWork() {
  return (
    <div className="max-w-[1256px] w-full mx-auto flex flex-col lg:flex-row px-4 overflow-hidden justify-between gap-20 mt-14">
      <Image
        src={Payment01}
        alt="Payment"
        width={453}
        height={560}
        className="lx:hover:scale-110 hover:rounded-lg transition-all hidden xl:flex"
      />

      <div className="flex flex-col gap-y-6">
        <div className="mx-auto w-[95%]">
          <h2 className="text-2xl text-[#000000] font-semibold font-inter text-start leading-[19.05px]">Como funciona</h2>
          <p className="max-w-[620px] w-full text-[#484848] text-lg font-medium font-inter text-start leading-[21.78px] mt-6">
            A Flix Home é uma plataforma que facilita o cuidado com a casa,
            oferecendo serviços como manutenção preventiva, reparos e limpeza
            com profissionais confiáveis e preços fixos.
          </p>
        </div>

        <div
          className="mt-6 flex w-full lg:grid grid-cols-2 gap-3 lg:overflow-hidden whitespace-nowrap overflow-x-auto lg:whitespace-normal px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Escolha o Serviço</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              De reparos a manutenções preventivas, encontre a solução ideal
              para sua casa.
            </p>
          </div>
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Agende Fácil</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              Marque seu atendimento rapidamente pelo WhatsApp ou app.
            </p>
          </div>
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Receba o Atendimento</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              Profissionais qualificados realizam o serviço com segurança e
              eficiência.
            </p>
          </div>
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Evite Problemas Futuramente</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              Nossos planos preventivos ajudam a evitar gastos inesperados e
              economizar seu tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
