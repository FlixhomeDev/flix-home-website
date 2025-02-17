import {
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '@/components/ui/accordion'
import React from 'react'

type Props = {
  title?: string
  value: string
  description?: string
}

export function AccordionItemLabel({ title, value, description }: Props) {
  return (
    <AccordionItem value={value} className="border py-4 px-11 rounded-lg mb-2">
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  )
}
