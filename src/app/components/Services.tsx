import React from 'react'
import { GardenSvg, HomeSvg, SettingsSvg } from '../assets/svgs'
import Image from 'next/image'
import Link from 'next/link'

const SERVICES = [
  {
    id: '53a3dde9-1b8e-5583-b4aa-7455822dde8d',
    name: 'Limpeza residencial',
    description:
      'Limpeza profunda de todas as áreas comuns e quartos da residência, focada em eliminar sujeiras e higienizar o ambiente...',
    icon: HomeSvg,
    url: 'https://fixo.pt/Fixo/s/servicos-para-casa/limpeza-de-casas-particulares',
  },
  {
    id: '64d01e0f-d91b-51b7-afe6-37c5279daf55',
    name: 'Reparos Gerais',
    description:
      'Serviços de manutenção e pequenos reparos domésticos, como conserto de portas, janelas, e pintura de pequenas áreas.',
    icon: SettingsSvg,
    url: '',
  },
  {
    id: '5ee5aa34-8d5b-5468-a6c7-454c082013d3',
    name: 'Montagem',
    description:
      'Montagem de móveis variados, com eficiência e seguindo as instruções de segurança.',
    icon: HomeSvg,
    url: '',
  },
  {
    id: '930732c0-48e2-5827-b94a-8f230f5619a2',
    name: 'Assistência Técnica para Eletrodomésticos ',
    description:
      'Reparos em eletrodomésticos de pequeno e médio porte para residências, como geladeiras. ',
    icon: HomeSvg,
    url: 'https://www.oscar-app.com/pt/reparacoes-eletrodomesticos-maquina-lavar-loica',
  },
  {
    id: '0c3cf831-99b8-552f-9939-2a1277090dfc',
    name: 'Serviço de Organização de Ambientes',
    description:
      'Organização de áreas específicas da casa, como armários, despensas e closets.',
    icon: HomeSvg,
    url: '',
  },
  {
    id: '4f7aac6a-ae30-5710-948b-93b2f293a3a0',
    name: 'Serviço de Jardinagem',
    description:
      'Manutenção de jardins e quintais, incluindo poda de plantas e remoção de ervas daninhas.',
    icon: GardenSvg,
    url: '',
  },
]

export default function Services() {
  return (
    <div
      id="services"
      className="relative z-40 mt-24 mx-auto px-6 md:px-[112px]"
    >
      <h2 className="text-3xl xl:text-5xl font-medium text-center font-fredoka">
        Serviços disponíveis
      </h2>
      <p className="text-lg lg:text-[28px] font-medium text-center font-yrsa mt-8 text-[#3D3D3D] max-w-[929px] mx-auto">
        Tudo o que você precisa para manter sua casa em ordem. Somos seu
        parceiro confiável para facilitar o dia a dia.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-11 mt-16 justify-center items-center">
        {SERVICES.map(service => (
          <div
            key={service.id}
            className="flex-1 w-full p-6 gap-4 flex flex-col rounded-[30px] border border-[#3C91E6]"
          >
            <div className="w-[94px] h-[94px] rounded-[30px] flex justify-center items-center bg-primaryColor/50">
              <Image src={service.icon} alt="Settings svg" />
            </div>
            <span className="font-fredoka text-xl xl:text-4xl">
              {service.name}
            </span>
            <p className="font-yrsa text-base xl:text-xl">
              {service.description}
            </p>
            <Link
              href={service.url}
              target="_blank"
              className="bg-primaryColor text-white rounded-[14px] mx-auto xl:ml-0 h-[46px]  lg:h-[61px] w-full justify-center px-6 flex items-center hover:bg-blue-400 transition-all active:scale-95"
            >
              Ver Serviço
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
