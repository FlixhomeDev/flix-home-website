import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { NoPictureIllustrationSvg } from '@/app/assets/svgs'
import { CalendarDaysIcon } from 'lucide-react'

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
  return (
    <div className="p-2 rounded-md max-w-[195px] md:max-w-[258px] w-full border bg-white">
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
        <span className="bg-gray-500 p-2 rounded-md absolute top-1 left-0 text-xs text-white">
          {category}
        </span>
      </div>
      <h4 className="flex items-center gap-x-1 font-bold mt-2">
        <span className="text-primaryColor font-medium">{newPrice}</span>
        <span className="text-gray-400 line-through font-light">
          {oldPrice}
        </span>
      </h4>
      <p className="text-gray-500 text-sm mt-1">{title}</p>
      <Button
        variant={'outline'}
        className="max-h-[44px] text-primaryColor mt-4 text-sm"
      >
        <CalendarDaysIcon size={16} />
        Agendar Serviço
      </Button>
    </div>
  )
}
