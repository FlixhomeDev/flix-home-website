'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Banner from '@/app/components/plans/Banner'
import CardPlans from '@/app/components/plans/Card-plans'
import FaqsPlans from '@/app/components/plans/Faqs'

export default function Plans() {
  const dataPlans = [
    {
      id: '1',
      plan: 'Freemium',
      title:
        'Ideal para quem quer conhecer nosso serviço e começar a cuidar dos seus ativos residenciais',
      priceByMonth: 53.23,
      priceByYear: 129.99,
      link: 'https://wa.link/jgmwg5',
      items: [
        {
          title: '1 visita técnica de diagnóstico e levantamento de ativos',
          subtitle:
            'ar-condicionado, canal hidráulico, eletrodomésticos, entre outros',
        },
        {
          title: 'Relatório técnico com o estado dos ativos identificados.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title:
            'Dicas personalizadas para aumentar a vida útil dos seus equipamentos.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title:
            'Notificações e alertas sobre boas práticas de manutenção dos seus ativos',
          subtitle: 'via whatsapp',
        },
      ],
      itemsnotinclud: [
        {
          title: 'Manutenção preventiva ou corretiva.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Peças de reposição.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Atendimento prioritário.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        // { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
        // { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
        // { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
      ],
    },
    {
      id: '2',
      plan: 'Essencial',
      title:
        'Para quem deseja uma manutenção preventiva básica e evitar problemas inesperados.',
      priceByMonth: 15,
      priceByYear: 129.99,
      link: 'https://wa.link/4iozk1',
      items: [
        {
          title: '1 visita de diagnóstico para cadastrar os ativos.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: '1 visita técnica anual de manutenção preventiva.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Checklist completo de avaliação do equipamento escolhido.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title:
            'Dicas personalizadas para aumentar a vida útil dos seus equipamentos.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title:
            'Notificações e alertas sobre boas práticas de manutenção dos seus ativos',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Relatório técnico detalhado após cada visita.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Suporte remoto para dúvidas.',
          subtitle: 'You’ll have the apartment to yourself',
        },
      ],
      itemsnotinclud: [
        {
          title: 'Peças de reposição.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Manutenções corretivas.',
          subtitle:
            'caso haja um problema, o serviço pode ser solicitado à parte',
        },
        {
          title: 'Atendimento prioritário.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        // { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
        // { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
        // { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
      ],
    },
    {
      id: '3',
      plan: 'Premium',
      title:
        'Para quem quer a proteção completa da casa com um atendimento mais abrangente.',
      priceByMonth: 25,
      priceByYear: 229.99,
      link: 'https://wa.link/y610ch',
      items: [
        {
          title: '1 visita inicial para cadastro dos ativos da residência.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title:
            '2 visitas técnicas anuais de manutenção preventiva em múltiplos equipamentos',
          subtitle:
            'ar-condicionado, eletrodomésticos, canal hidráulico, esquentadores...',
        },
        {
          title:
            'Dicas personalizadas para aumentar a vida útil dos seus equipamentos.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title:
            'Notificações e alertas sobre boas práticas de manutenção dos seus ativos.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Atendimento prioritário para serviços emergenciais',
          subtitle: 'desconto especial para correções',
        },
        {
          title:
            'Relatórios técnicos detalhados e recomendações personalizadas.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        {
          title: 'Desconto exclusivo em serviços on-demand.',
          subtitle: 'You’ll have the apartment to yourself',
        },
      ],
      itemsnotinclud: [
        {
          title: 'Peças de reposição',
          subtitle: 'podem ser adquiridas separadamente',
        },
        {
          title: 'Reparos corretivos fora do escopo da manutenção preventiva.',
          subtitle: 'You’ll have the apartment to yourself',
        },
        // { title: "Pequenos reparos domésticos", subtitle: "You’ll have the apartment to yourself" },
        // { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
        // { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
        // { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
      ],
    },
  ]
  return (
    <div className="flex flex-col pt-28 mt-10 lg:mt-2">
      <Banner />
      <div className="hidden mt-0 md:mt-[127px] w-full h-[510px] md:h-[800px] px-[14px] md:px-10 md:flex items-center gap-5 mx-auto max-w-[1261px]">
        {dataPlans.map(item => (
          <CardPlans key={item.id} {...item} />
        ))}
      </div>
      <div className="md:hidden mt-10 md:mt-[127px] w-full h-[510px] md:h-[800px] px-[14px] md:px-10 md:self-center flex items-center gap-5  mx-auto">
        <Swiper
          spaceBetween={12}
          slidesPerView={1.3}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-[360px] flex items-center gap-20"
        >
          {dataPlans.map(item => (
            <SwiperSlide key={item.id}>
              <CardPlans {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-[70px] w-[340px] md:w-full self-center md:px-10">
        <FaqsPlans />
      </div>
    </div>
  )
}
