"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Banner from "@/app/components/plans/Banner";
import CardPlans from "@/app/components/plans/Card-plans";
import FaqsPlans from "@/app/components/plans/Faqs";
import React from "react";

export const dataPlans = [
  {
    id: "1",
    plan: "Fremium",
    title: "Para quem quer segurança sem gastar muito!",
    priceByMonth: 53.23,
    priceByYear: 129.99,
    items: [
      { title: "Revisão elétrica e hidráulica", subtitle: "You’ll have the apartment to yourself" },
      { title: "Verificação de gás included in Basic", subtitle: "You’ll have the apartment to yourself" },
      { title: "Pequenos reparos domésticos", subtitle: "You’ll have the apartment to yourself" },
      { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
      { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
      { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
    ],
    itemsnotinclud: [
      { title: "Revisão elétrica e hidráulica", subtitle: "You’ll have the apartment to yourself" },
      { title: "Verificação de gás included in Basic", subtitle: "You’ll have the apartment to yourself" },
      { title: "Pequenos reparos domésticos", subtitle: "You’ll have the apartment to yourself" },
      { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
      { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
      { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
    ],
  },
  {
    id: "2",
    plan: "Médio",
    title: "Mais proteção com visitas mais frequentes!",
    priceByMonth: 53.23,
    priceByYear: 129.99,
    items: [
      { title: "Revisão elétrica e hidráulica", subtitle: "You’ll have the apartment to yourself" },
      { title: "Verificação de gás included in Basic", subtitle: "You’ll have the apartment to yourself" },
      { title: "Pequenos reparos domésticos", subtitle: "You’ll have the apartment to yourself" },
      { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
      { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
      { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
    ],
    itemsnotinclud: [
      { title: "Revisão elétrica e hidráulica", subtitle: "You’ll have the apartment to yourself" },
      { title: "Verificação de gás included in Basic", subtitle: "You’ll have the apartment to yourself" },
      { title: "Pequenos reparos domésticos", subtitle: "You’ll have the apartment to yourself" },
      { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
      { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
      { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
    ],
  },
  {
    id: "3",
    plan: "Avançado",
    title: "Máxima segurança e conforto para sua casa!",
    priceByMonth: 53.23,
    priceByYear: 129.99,
    items: [
      { title: "Revisão elétrica e hidráulica", subtitle: "You’ll have the apartment to yourself" },
      { title: "Verificação de gás included in Basic", subtitle: "You’ll have the apartment to yourself" },
      { title: "Pequenos reparos domésticos", subtitle: "You’ll have the apartment to yourself" },
      { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
      { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
      { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
    ],
    itemsnotinclud: [
      { title: "Revisão elétrica e hidráulica", subtitle: "You’ll have the apartment to yourself" },
      { title: "Verificação de gás included in Basic", subtitle: "You’ll have the apartment to yourself" },
      { title: "Pequenos reparos domésticos", subtitle: "You’ll have the apartment to yourself" },
      { title: "Suporte remoto para dúvidas técnicas", subtitle: "You’ll have the apartment to yourself" },
      { title: "Checklist preventivo geral", subtitle: "You’ll have the apartment to yourself" },
      { title: "Relatório digital de manutenção", subtitle: "You’ll have the apartment to yourself" },
    ],
  },
];

export default function Plans() {

  return (
    <div className="flex flex-col">
      <Banner />
      <div className="hidden mt-0 md:mt-[127px] w-full h-[510px] md:h-[800px] px-[14px] md:px-10 md:self-center md:flex items-center gap-5">
        {
          dataPlans.map((item, key) => (
            <CardPlans key={key} {...item} />
          ))
        }

      </div>
      <div className="md:hidden mt-0 md:mt-[127px] w-full h-[510px] md:h-[800px] px-[14px] md:px-10 md:self-center flex items-center gap-5">
        <Swiper
          spaceBetween={12}
          slidesPerView={1.3}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-[360px] flex items-center gap-20"
        >
          {
            dataPlans.map((item, key) => (
              <SwiperSlide key={key} >
                <CardPlans {...item} />
              </SwiperSlide>
            ))
          }
          <div className="w-full mt-3">
            <button className="w-2 h-2 bg-transparent"></button>
          </div>
        </Swiper>

      </div>
      <div className="mt-[70px] w-[340px] md:w-full self-center md:px-10">
        <FaqsPlans />
      </div>
    </div>
  );
}
