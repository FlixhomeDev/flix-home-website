import { Accordion } from '@/components/ui/accordion';
import { AccordionItemLabel } from '../home/FAQs/AccordionItem';

export default function FaqsPlans() {
    const faqs = [
        {
            title: 'O que é a Flix Home?',
            value: 'value-01',
            description:
                'A Flix Home é uma plataforma que simplifica o cuidado com o lar, oferecendo serviços domésticos de forma confiável e acessível. Nosso objetivo é prevenir problemas antes que eles aconteçam, através de planos de manutenção preventiva, e também oferecer soluções rápidas e eficientes para problemas pontuais, como reparos ou limpeza.',
        },
        {
            title: 'Como funciona o agendamento de serviços',
            value: 'value-02',
            description:
                'Para agendar um novo serviço, basta entrar em contato com um dos nossos profissionais altamente qualificados, através do nosso WhatsApp. Lembre-se de verificar as horas disponíveis para cada profissional e agendar o seu atendimento com cautela. Se você precisar cancelar um atendimento ou mudar o horário, não hesite em contactar-nos.',
        },
        {
            title: 'A Flix Home oferece garantia nos serviços',
            value: 'value-03',
            description:
                'Para agendar um novo serviço, basta entrar em contato com um dos nossos profissionais altamente qualificados, através do nosso WhatsApp. Lembre-se de verificar as horas disponíveis para cada profissional e agendar o seu atendimento com cautela. Se você precisar cancelar um atendimento ou mudar o horário, não hesite em contactar-nos.',
        },
        {
            title: 'Quem são os profissionais da Flix Home',
            value: 'value-04',
            description:
                'Para agendar um novo serviço, basta entrar em contato com um dos nossos profissionais altamente qualificados, através do nosso WhatsApp. Lembre-se de verificar as horas disponíveis para cada profissional e agendar o seu atendimento com cautela. Se você precisar cancelar um atendimento ou mudar o horário, não hesite em contactar-nos.',
        },
        {
            title: 'Quais serviços estão disponíveis na Flix Home',
            value: 'value-05',
            description:
                'Para agendar um novo serviço, basta entrar em contato com um dos nossos profissionais altamente qualificados, através do nosso WhatsApp. Lembre-se de verificar as horas disponíveis para cada profissional e agendar o seu atendimento com cautela. Se você precisar cancelar um atendimento ou mudar o horário, não hesite em contactar-nos.',
        },
    ]
    return (
        <>
            <h3 className="md:text-2xl text-lg text-[#1C1F35] font-semibold font-rubik text-center">Perguntas frequentes</h3>
            <nav>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map(faq => (
                        <AccordionItemLabel
                            className='w-full border border-[#DEE2E7] rounded-[8px] py-2 md:py-4 px-[41px] mt-3'
                            key={faq.value}
                            title={faq.title}
                            value={faq.value}
                            description={faq.description}
                        />
                    ))}
                </Accordion>
                {/* <div className="w-full h-[46px] md:h-[61px] border border-[#DEE2E7] rounded-[8px] py-2 md:py-5 px-[41px] mt-3">
                    <Link href={"/#"} className="text-xs md:text-[13px] text-[#000000] font-semibold md:font-bold font-manrope">Topic</Link>
                </div> */}
            </nav>
        </>
    );
}
