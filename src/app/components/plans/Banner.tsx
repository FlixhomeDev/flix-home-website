import { ImageBannerPlans } from '@/app/assets/images'
import Image from 'next/image'

export default function Banner() {
  return (
    <div
      id="Principal"
      className="relative py-[22px] md:py-16 px-[14px] md:px-8 mt-2 h-auto md:h-[376px] w-full bg-white md:bg-custom-gradient flex"
    >
      <div className="relative text-white">
        <div className="relative z-10 w-[340px] md:w-full md:max-w-3xl">
          <nav className="text-[10px] md:text-sm bg-[#FFFFFF1F] md:bg-opacity-15 h-[30px] w-auto md:w-[230px] rounded-[4px] px-[5px] py-[3px] flex items-center gap-[4px]">
            <span className="text-[#D3D3D3] font-medium font-inter">Home</span>
            <span className="bg-[#D3D3D3] md:bg-[#FFFFFF] w-[1.5px] h-[14px]"></span>
            <span className="text-[#185CFF] md:text-[#FFFFFF] font-semibold font-inter">
              Planos Preventivos
            </span>
          </nav>
          <h1 className="text-2xl md:text-[32px] text-[#292D33] md:text-[#FFFFFF] font-bold font-inter mt-[10px]">
            Cuide do seu lar hoje para evitar <br className="hidden md:block" />{' '}
            surpresas amanhã!
          </h1>
          <p className="flex md:hidden text-xs text-[#6F6F6F] font-normal font-inter mt-2 w-full">
            Evite gastos inesperados e dores de cabeça com nossos planos
            preventivos.
          </p>
          <p className="hidden md:flex text-lg text-[#FFFFFF] md:font-medium font-inter mt-2 w-[790px]">
            Evite gastos inesperados e dores de cabeça com nossos planos
            preventivos. Com inspeções regulares e manutenção especializada,
            garantimos mais segurança, conforto e tranquilidade para você e sua
            família. Escolha o plano ideal e proteja seu lar antes que pequenos
            problemas se tornem grandes preocupações!
          </p>
        </div>
      </div>
      <div
        id="Image"
        className="relative hidden md:block top-28 right-0 self-end bottom-0 w-1/2 max-w-lg"
      >
        <Image
          src={ImageBannerPlans}
          alt="Casal relaxando no sofá"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  )
}
