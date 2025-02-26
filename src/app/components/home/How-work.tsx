"use client";
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Payment01 } from '@/app/assets/images'
import { BookSvg } from '@/app/assets/svgs'

export default function HowWork() {
  return (
    <div className="max-w-[1256px] w-full mx-auto flex flex-col lg:flex-row px-4 overflow-hidden justify-between gap-20 mt-[38px] md:mt-14">
      <Image
        src={Payment01}
        alt="Payment"
        width={453}
        height={560}
        className="lx:hover:scale-110 hover:rounded-lg transition-all hidden xl:flex"
      />

      <div className="flex flex-col gap-y-6">
        <div className="mx-auto w-[95%]">
          <h2 className="md:text-2xl text-lg text-[#000000] font-semibold font-inter text-center md:text-start leading-[21.78px] md:leading-[19.05px]">Como funciona</h2>
          <p className="max-w-[620px] w-full md:text-[#484848] text-[#6F6F6F] text-xs md:text-lg font-medium font-inter text-center md:text-start leading-[14.52px] md:leading-[21.78px] mt-[10px] md:mt-6">
            A Flix Home é uma plataforma que facilita o cuidado com a casa,
            oferecendo serviços como manutenção preventiva, reparos e limpeza
            com profissionais confiáveis e preços fixos.
          </p>
        </div>

        <div
          className="hidden mt-6 md:flex w-full lg:grid grid-cols-2 gap-3 lg:overflow-hidden whitespace-nowrap overflow-x-auto lg:whitespace-normal px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Escolha o Serviço</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              De reparos a manutenções preventivas, encontre a solução ideal
              para sua casa.
            </p>
          </div>
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Agende Fácil</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              Marque seu atendimento rapidamente pelo WhatsApp ou app.
            </p>
          </div>
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Receba o Atendimento</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              Profissionais qualificados realizam o serviço com segurança e
              eficiência.
            </p>
          </div>
          <div className="h-[179px] w-[311px] p-5 flex flex-col items-start gap-[10px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="text-[#000000] text-lg font-semibold font-inter leading-[21.78px]">Evite Problemas Futuramente</h3>
            <p className="text-[#6F6F6F] text-base font-normal font-inter leading-[19.36px]">
              Nossos planos preventivos ajudam a evitar gastos inesperados e
              economizar seu tempo.
            </p>
          </div>
        </div>

        <div
          className="md:hidden mt-[21px] flex gap-[7px] w-full h-[170px]"
        >
          <Swiper
            spaceBetween={12}
            slidesPerView={1.3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full flex items-center gap-20"
          >
            <SwiperSlide>
              <div className="h-[137px] w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">Escolha o Serviço</h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  De reparos a manutenções preventivas, encontre a solução ideal
                  para sua casa.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[137px] w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">Agende Fácil</h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  Marque seu atendimento rapidamente pelo WhatsApp ou app.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[137px] w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">Receba o Atendimento</h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  Profissionais qualificados realizam o serviço com segurança e
                  eficiência.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[137px] w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">Evite Problemas Futuramente</h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  Nossos planos preventivos ajudam a evitar gastos inesperados e
                  economizar seu tempo.
                </p>
              </div>
            </SwiperSlide>
            <div className="w-full mt-10">
              <button className="w-2 h-2 bg-transparent"></button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
