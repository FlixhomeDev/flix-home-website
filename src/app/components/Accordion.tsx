import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFaqs() {
  return (
    <Accordion type="single" collapsible className="w-full mt-[50px]">
      <AccordionItem value="item-1" className="px-[40px] py-[24px] border-[3px] border-gray-400 rounded-xl mb-6">
        <AccordionTrigger className="text-[24px] text-[#3D3D3D]">Como posso agendar um serviço?</AccordionTrigger>
        <AccordionContent className="text-gray-400">
        É fácil! Basta escolher o serviço que deseja e entrar em contacto conosco pelo WhatsApp. Vamos confirmar a disponibilidade e fornecer todos os detalhes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="px-[40px] py-[24px] border-[3px] border-gray-400 rounded-xl mb-6">
        <AccordionTrigger className="text-[24px] text-[#3D3D3D]">Como posso pagar pelo serviço?</AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="px-[40px] py-[24px] border-[3px] border-gray-400 rounded-xl mb-6">
        <AccordionTrigger className="text-[24px] text-[#3D3D3D]">Os profissionais são qualificados?</AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="px-[40px] py-[24px] border-[3px] border-gray-400 rounded-xl">
        <AccordionTrigger className="text-[24px] text-[#3D3D3D]">Posso reagendar o serviço?</AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
