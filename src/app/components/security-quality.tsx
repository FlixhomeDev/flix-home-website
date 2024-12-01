import Image from 'next/image'
import { security } from '../assets/images'
import { Button } from '@/components/ui/button'

export default function SecurityAndQuality() {
  return (
    <div className="w-full flex items-center flex-col-reverse  pt-8 xl:flex-row px-8 mt-20 lg:mt-[220px] gap-[94px] md:px-[112px] mx-auto justify-between">
      <div className="relative mt-56 lg:mt-auto">
        <div className="w-[500px] h-[510px] bg-primaryColor rounded-[35px] " />
        <Image
          src={security}
          alt="image banner"
          className="absolute pt-[180px] z-40 bottom-0 right-1/2 translate-x-1/2 max-w-[899px]"
        />
      </div>

      <div className="max-w-[644px] flex flex-col gap-4 justify-center lg:justify-start">
        <h1 className="text-3xl font-medium lg:text-5xl lg:font-bold text-center xl:text-left leading-relaxed tracking-wide text-[#3D3D3D]">
          A segurança e <span className="text-primaryColor">qualidade</span> são
          as nossas maiores prioridades.
        </h1>
        <p className="text-lg lg:text-[28px] font-yrsa text-center xl:text-left mt-4 leading-normal tracking-wide text-[#3D3D3D]">
          Na Flix Home, priorizamos sua segurança e a qualidade dos serviços.
        </p>
        <p className="text-lg lg:text-[28px] font-yrsa text-center xl:text-left leading-normal tracking-wide text-[#3D3D3D]">
          Todos os profissionais passam por uma rigirosa seleção e treinamento,
          além de serem avaliados regularmente
        </p>
        <p className="text-lg lg:text-[28px] font-yrsa text-center xl:text-left leading-normal tracking-wide text-[#3D3D3D]">
          Conosco, você pode ficar tranquilo sabendo que sua casa está em boas
          mãos.
        </p>
        <Button variant={'secondary'}> Experimente Agora</Button>
      </div>
    </div>
  )
}
