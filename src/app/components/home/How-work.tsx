import { Payment01 } from '@/app/assets/images'
import { BookSvg } from '@/app/assets/svgs'
import Image from 'next/image'
import React from 'react'

export default function HowWork() {
  return (
    <div className="max-w-[1256px] w-full mx-auto flex justify-between gap-20 mt-14">
      <Image
        src={Payment01}
        alt="Payment"
        width={453}
        height={560}
        className="hover:scale-110 hover:rounded-lg transition-all"
      />

      <div className="flex flex-col gap-y-6">
        <h2 className="text-2xl font-bold">Como funciona</h2>
        <p className="max-w-[634px] w-full text-gray-500">
          A Flix Home é uma plataforma que facilita o cuidado com a casa,
          oferecendo serviços como manutenção preventiva, reparos e limpeza com
          profissionais confiáveis e preços fixos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Escolha o Serviço</h3>
            <p className="text-gray-500">
              De reparos a manutenções preventivas, encontre a solução ideal
              para sua casa.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Agende Fácil</h3>
            <p className="text-gray-500">
              Marque seu atendimento rapidamente pelo WhatsApp ou app.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Receba o Atendimento</h3>
            <p className="text-gray-500">
              Profissionais qualificados realizam o serviço com segurança e
              eficiência.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Evite Problemas Futuramente</h3>
            <p className="text-gray-500">
              Nossos planos preventivos ajudam a evitar gastos inesperados e
              economizar seu tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
