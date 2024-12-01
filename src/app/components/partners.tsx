import Image from 'next/image'
import { user01 } from '../assets/images'
import { CircleCheck, HeartIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Partners() {
  return (
    <div className="w-full flex items-center flex-col  pt-8 lg:flex-row px-8 mt-20 lg:mt-[180px] gap-[94px] md:px-[112px] mx-auto justify-between">
      <div className="max-w-[644px] flex flex-col gap-4 justify-center lg:justify-start">
        <h1 className="text-3xl font-medium lg:text-5xl lg:font-bold text-center lg:text-left leading-normal tracking-wide text-[#3D3D3D]">
          Junte-se à <span className="text-secondaryColor">FlixHome:</span>
          Transforme seu Talento em Oportunidade!
        </h1>
        <p className="text-lg lg:text-[28px] mb-4 font-yrsa text-center lg:text-left mt-4 leading-normal tracking-wide text-[#3D3D3D]">
          Seja um parceiro e transforme sua experiência em renda estável
          enquanto ajuda a simplificar a vida dos nossos clientes. Inscreva-se
          hoje e seja parte de uma comunidade que valoriza o profissionalismo e
          a excelência!
        </p>
        <Button variant={'secondary'}>Torna-se parceiro</Button>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <div className="p-5 h-[112px] rounded-[22px] flex justify-between items-center max-w-[368px] w-full lg:max-w-[500px] border border-secondaryColor hover:shadow-md transition-all">
          <div className="flex gap-4 items-center">
            <Image src={user01} alt="Partners" width={55} height={55} />
            <div className="flex flex-col">
              <span className="text-base lg:text-[24px] text-gray-400">
                Técnica de limpeza
              </span>
              <span className="font-bold text-sm">Fernanda Mafalda</span>
            </div>
          </div>
          <HeartIcon className="text-[24px] text-gray-400" />
        </div>

        <div className="">
          <div className="flex p-5 rounded-[22px] flex-col gap-1 max-w-[368px] w-full lg:max-w-[500px] border border-primaryColor/30 shadow-lg">
            <div className="flex items-center gap-1">
              <CircleCheck className="text-green-400 text-base lg:text-[26px]" />
              <span className="text-primaryColor text-xl lg:text-[24px] font-bold">
                Limpeza para sua casa
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-gray-300 text-xl lg:text-[26px]" />
              <span className="text-gray-300 text-base lg:text-[24px] font-bold">
                Manutenção de ar condicionado
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-gray-300 text-xl lg:text-[26px]" />
              <span className="text-gray-300 text-base lg:text-[24px] font-bold">
                Serviços de canalização
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CircleCheck className="text-gray-300 text-xl lg:text-[26px]" />
              <span className="text-gray-300 text-base lg:text-[24px] font-bold">
                E muito mais
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
