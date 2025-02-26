import { WeTake02, WantBeImage } from '@/app/assets/images'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

export function WantToBe() {
  return (
    <div className="mt-10 lg:mt-[48px] w-full grid grid-cols-1 lg:grid-cols-2 h-[400px]">
      <div className="relative h-full">
        <div className="absolute h-full top-0 left-0 right-0 bottom-0 bg-[#3C91E6DE] bg-opacity-[87%]" />
        <Image
          src={WeTake02}
          alt="We Take your home"
          className="h-full w-full absolute -z-10"
        />
        <div className="relative flex flex-col justify-center items-start mx-[50px] z-50 h-[422px]">
          <h2 className="text-white text-2xl font-bold font-inter leading-[29.05px]">
            Queres ser um Flix?
          </h2>
          <p className="mt-[10px] max-w-[350px] w-full text-[#FFFFFF] text-base font-medium font-inter leading-[19.36px] ">
            És um profissional experiente e gostavas de pertencer à equipa de
            técnicos da FlixHome? Regista-te agora!
          </p>
          <div className='self-start mt-[27px]'>
            <Button
              variant={'ghost'}
              className="bg-[#FFFFFF] text-[#3C91E6] text-sm font-medium font-inter leading-[16.94px] w-[148px] h-[41px] flex items-center gap-[10px] py-[12px] px-[10px] border rounded-[5px]"
            >
              Torna-te um Flix
              <ArrowRightIcon size={9} color='#3C91E6' />
            </Button>
          </div>
        </div>
      </div>
      <div className='h-full w-full'>
        <Image
          src={WantBeImage}
          alt="We Take your home"
          className="h-full w-full hidden lg:flex"
        />
      </div>

    </div>
  )
}
