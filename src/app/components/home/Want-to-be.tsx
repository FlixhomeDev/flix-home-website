import { WeTake02, EquipeFh } from '@/app/assets/images'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

export function WantToBe() {
  return (
    <div className="mt-10 lg:mt-[48px] w-full grid grid-cols-1 lg:grid-cols-2 h-[251px] md:h-[400px]">
      <div className="relative h-full">
        <div className="absolute h-full top-0 left-0 right-0 bottom-0 bg-[#3C91E6DE] bg-opacity-[87%]" />
        <Image
          src={WeTake02}
          alt="We Take your home"
          className="h-full w-full absolute -z-10"
        />
        <div className="relative flex flex-col justify-center items-start mx-[50px] z-50 h-full md:h-[422px]">
          <h2 className="text-white text-xs md:text-2xl font-bold font-inter leading-[14.52px] md:leading-[29.05px]">
            Queres ser um Flix?
          </h2>
          <p className="mt-[10px] max-w-[350px] w-full text-[#FFFFFF] text-[7px] md:text-base font-medium font-inter leading-[8.47px] md:leading-[19.36px]">
            És um profissional experiente e gostavas de pertencer à equipa de
            técnicos da FlixHome? Regista-te agora!
          </p>
          <div className='self-start mt-[27px]'>
            <Button
              variant={'ghost'}
              className="bg-[#FFFFFF] text-[#3C91E6] text-[10px] md:text-sm font-normal md:font-medium font-inter leading-[12.1px] md:leading-[16.94px] w-[120px] md:w-[148px] h-[24px] md:h-[41px] flex items-center gap-[10px] py-[12px] px-[10px] border rounded-[5px]"
            >
              Torna-te um Flix
              <ArrowRightIcon size={9} color='#3C91E6' />
            </Button>
          </div>
        </div>
      </div>
      <div className='h-full w-full'>
        <Image
          src={EquipeFh}
          alt="We Take your home"
          className="h-full w-full hidden lg:flex"
        />
      </div>

    </div>
  )
}
