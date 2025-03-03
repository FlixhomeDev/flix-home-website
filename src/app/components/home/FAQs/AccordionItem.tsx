import {
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '@/components/ui/accordion'
import React from 'react'

type Props = {
  title?: string
  className?: string
  value: string
  description?: string
}

export function AccordionItemLabel({ title, value, description, className }: Props) {
  return (
    <AccordionItem value={value} className={`border py-4 px-11 rounded-lg mb-2 ${className}`}>
      <AccordionTrigger className="text-xs md:text-[13px] text-[#000000] font-semibold md:font-bold font-manrope">{title}</AccordionTrigger>
      <AccordionContent className='flex text-[13px] text-[#6F6F6F] font-medium font-manrope mt-[19px]'>{description}</AccordionContent>
    </AccordionItem>
  )
}
