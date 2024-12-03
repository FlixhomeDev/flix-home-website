import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFaqs() {
  return (
    <Accordion type="single" collapsible className="w-full mt-[50px]">
      <AccordionItem
        value="item-1"
        className="px-[40px] py-1 border-[3px] border-gray-400 rounded-xl mb-6"
      >
        <AccordionTrigger className="text-base lg:text-[24px] text-left text-[#3D3D3D]">
          Como posso agendar um serviço?
        </AccordionTrigger>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          É fácil! Basta escolher o serviço que deseja e entrar em contacto
          conosco pelo WhatsApp. Vamos confirmar a disponibilidade e fornecer
          todos os detalhes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="px-[40px] py-1 border-[3px] mb-6 border-gray-400 rounded-xl"
      >
        <AccordionTrigger className="text-base lg:text-[24px] text-left text-[#3D3D3D]">
          Como posso pagar pelo serviço?
        </AccordionTrigger>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          Após confirmar o agendamento, o pagamento pode ser feito por
          transferência bancária ou por referência. Assim que o pagamento é
          concluído, o serviço é oficialmente agendado.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="px-[40px] py-1 border-[3px] mb-6 border-gray-400 rounded-xl"
      >
        <AccordionTrigger className="text-base lg:text-[24px] text-left text-[#3D3D3D]">
          Quanto tempo demora, em média, a conseguir uma marcação?
        </AccordionTrigger>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          Não tens que te preocupar com encontrar técnicos, esse é o nosso
          trabalho! Assim que efetuares o teu pedido, o teu serviço está
          confirmado. Se por algum motivo houver um imprevisto, avisaremos-te
          antecipadamente!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="px-[40px] py-1 border-[3px] mb-6 border-gray-400 rounded-xl"
      >
        <AccordionTrigger className="text-base lg:text-[24px] text-left text-[#3D3D3D]">
          Os profissionais são qualificados e de confiança?
        </AccordionTrigger>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          Sim! Todos os nossos profissionais são treinados, avaliados e passam
          por uma seleção rigorosa para garantir a segurança e a qualidade dos
          serviços.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-5"
        className="px-[40px] py-1 border-[3px] mb-6 border-gray-400 rounded-xl"
      >
        <AccordionTrigger className="text-base lg:text-[24px] text-left text-[#3D3D3D]">
          Posso cancelar ou reagendar o serviço?
        </AccordionTrigger>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          Sim, basta nos informar com antecedência pelo WhatsApp para que
          possamos reorganizar a data ou reembolsar, conforme necessário.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-6"
        className="px-[40px] py-1 border-[3px] mb-6 border-gray-400 rounded-xl"
      >
        <AccordionTrigger className="text-base lg:text-[24px] text-left text-[#3D3D3D]">
          Qual é a política de cancelamento e a garantia dos serviços Flix Home?
        </AccordionTrigger>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          Oferecemos uma garantia de 15 dias para todos os nossos serviços. Se
          não ficares satisfeito, podes solicitar uma visita de retificação sem
          custos adicionais. Em relação ao cancelamento, podes fazê-lo a
          qualquer momento, mas as taxas de cancelamento variam conforme o
          momento do cancelamento:
        </AccordionContent>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          - 50% se for cancelado 15 minutos após o início de um serviço imediato
          ou durante o mesmo;
        </AccordionContent>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          - 25% se for cancelado 15 minutos após o agendamento;
        </AccordionContent>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          - 50% se for cancelado menos de 2 horas antes do horário agendado.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-7"
        className="px-[40px] py-1 border-[3px] mb-6 border-gray-400 rounded-xl"
      >
        <AccordionTrigger className="text-base lg:text-[24px] text-left text-[#3D3D3D]">
          Quais serviços oferece a Flix Home?
        </AccordionTrigger>
        <AccordionContent className="text-sx lg:text-base text-gray-400">
          Flix Home oferece uma ampla gama de serviços, desde limpeza doméstica
          até mudanças. Se precisares de outros serviços, basta verificar no
          nosso catálogo do WhatsApp as várias opções disponíveis, sempre com a
          mesma garantia de qualidade.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
