import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
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
      onClick={() => router.push('/services/details')} className="cursor-pointer p-2 rounded-md max-w-[166px] md:max-w-[258px] w-full border bg-white">
      <div className="relative flex justify-center items-center w-full h-[187px] bg-gray-100 rounded-md">
        {!image ? (
          <Image src={image} alt={'title'} width={107} height={107} />
        ) : (
          <Image
            src={NoPictureIllustrationSvg}
            alt={'title'}
            width={107}
            height={107}
          />
        )}
        <span className="bg-[#000000] bg-opacity-35 rounded-md w-[80px] h-[30px] absolute top-1 left-0 text-center p-2 text-[10px] text-white font-medium font-inter">
          {category}
        </span>
      </div>
      <h4 className="flex items-center gap-x-1 font-bold mt-2">
        <span className="text-[#3C91E6] text-[17px] font-semibold font-inter">€ {newPrice}</span>
        <span className="text-[#6F6F6F] text-sm font-normal font-inter line-through">
          € {oldPrice}
        </span>
      </h4>
      <p className="text-[#484848] text-[13px] font-medium font-inter mt-1">{title}</p>
      <Link href={"https://wa.me/message/PHDJAIL6RKWZC1"}
        className="h-[37px] w-[145px] flex items-center justify-center gap-[5.31px] border border-[#3C91E614] border-opacity-[8%] bg-[#3C91E605] bg-opacity-[2%] rounded-[7px] text-[#3C91E6] mt-4 text-[13px] font-medium font-inter"
      >
        <CalendarDaysIcon size={14} />
        Agendar Serviço
      </Link>
    </div>
  )
}
