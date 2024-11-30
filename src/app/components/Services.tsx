import React from 'react'
import { SettingsSvg } from '../assets/svgs'
import Image from 'next/image'

export default function Services() {
  return (
    <div id="#services" className="mt-24 mx-auto px-6 md:px-[112px]">
      <h2 className="text-5xl font-medium text-center font-fredoka">
        Serviços disponíveis
      </h2>
      <p className="text-xl font-medium text-center font-yrsa mt-10">
        Tudo o que você precisa para manter sua casa em ordem. Somos seu
        parceiro confiável para facilitar o dia a dia.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-11 mt-16 justify-center items-center">
        {Array.from({ length: 6 }).map((service, index) => (
          <div
            key={index}
            className="flex-1 w-full p-6 gap-4 flex flex-col rounded-[30px] border border-[#3C91E6]"
          >
            <div className="w-[94px] h-[94px] rounded-[30px] flex justify-center items-center bg-[#3C91E6]">
              <Image src={SettingsSvg} alt="Settings svg" />
            </div>
            <span className="font-fredoka text-4xl">Limpeza residencial</span>
            <p className="font-yrsa text-xl">
              Limpeza profunda de todas as áreas comuns e quartos da residência,
              focada em eliminar sujeiras e higienizar o ambiente...
            </p>
            <button
              type="button"
              className="bg-primaryColor text-white px-5 py-6 w-full h-[61px] rounded-[14px]"
            >
              Ver Serviço
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
