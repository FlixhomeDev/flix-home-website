import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { NoPictureIllustrationSvg } from '@/app/assets/svgs'
import { CalendarDaysIcon } from 'lucide-react'
import Link from 'next/link'

type Props = {
  title: string
  newPrice: number
  oldPrice: number
  category?: string
  image: string
}

export function ServiceCard({
  title,
  newPrice,
  oldPrice,
  category,
  image,
}: Props) {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/services/details')} className="cursor-pointer py-[13px] px-[9px] rounded-[7px] max-w-[166px] md:max-w-[258px] w-full h-[336px] border border-[#DEE2E7] bg-[#FFFFFF]">
      <div className="relative flex justify-center items-center w-full h-[187px] bg-[#F8F8F8] rounded-[7px]">
        {!image ? (
          <Image src={image} alt={'image service'} width={107} height={107} />
        ) : (
          <Image
            src={NoPictureIllustrationSvg}
            alt={'image service'}
            width={107}
            height={107}
          />
        )}
        <span className="bg-[#000000] bg-opacity-35 rounded-[3.98px] w-[60px] h-[20px] absolute top-3 left-[9px] text-center px-[2px] py-[3px] text-[10px] text-[#FFFFFF] leading-[12.84px] font-medium font-inter">
          {category}
        </span>
      </div>
      <h4 className="flex items-center gap-[2.65px] mt-[13px]">
        <span className="text-[#3C91E6] text-[17px] font-semibold font-inter leading-[20.87px] -tracking-[0.27px]">€ {newPrice}</span>
        <span className="text-[#6F6F6F] text-sm font-normal font-inter leading-[17.66px] -tracking-[0.27px] line-through">
          € {oldPrice}
        </span>
      </h4>
      <p className="text-[#484848] text-[13px] font-medium font-inter leading-[16.05px] -tracking-[0.27px] mt-[6px]">{title}</p>
      <Link href={"https://wa.me/message/PHDJAIL6RKWZC1"}
        className="h-[37.22px] w-[145.77px] flex items-center gap-[5.31px] py-[11px] px-[10px] border border-[#3C91E614] border-opacity-[8%] bg-[#3C91E605] bg-opacity-[2%] rounded-[7px] mt-4 text-[#3C91E6] text-[13px] font-medium font-inter leading-[16.05px] -tracking-[0.27px]"
      >
        <CalendarDaysIcon size={14} />
        Agendar Serviço
      </Link>
    </div>
  )
}
