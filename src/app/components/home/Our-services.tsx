"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ServiceCard } from "@/components/ServiceCard";
import ToggleButtons from "@/components/ToggleButtons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function OurServices() {
  const [active, setActive] = useState("cleaning");

  const servicesData = [
    {
      id: "1",
      title: "Serviço de Jardinagem Vida Verde",
      oldPrice: 129.99,
      newPrice: 99.5,
      category: "Jardinagem",
      image: "https://source.unsplash.com/300x200/?gardening",
    },
    {
      id: "2",
      title: "Limpeza Residencial Completa",
      oldPrice: 150.0,
      newPrice: 120.0,
      category: "Limpeza",
      image: "https://source.unsplash.com/300x200/?cleaning",
    },
    {
      id: "3",
      title: "Manutenção Elétrica Residencial",
      oldPrice: 180.0,
      newPrice: 150.75,
      category: "Elétrica",
      image: "https://source.unsplash.com/300x200/?electrician",
    },
    {
      id: "4",
      title: "Pintura de Interior Profissional",
      oldPrice: 250.0,
      newPrice: 200.0,
      category: "Pintura",
      image: "https://source.unsplash.com/300x200/?painting",
    },
  ];

  return (
    <div className="max-w-[1256px] w-full mx-auto mt-[15px] md:mt-8 lg:mt-[78px]">
      <div className="w-full max-w-[340px] md:max-w-[468px] mx-auto">
        <h2 className="text-center font-bold font-inter leading-[21.78px] md:leading-[29.05px] -tracking-[1.5%] text-lg md:text-2xl text-[#292D33]">
          Serviços que cuidam de tudo para você.
        </h2>
        <p className="text-center text-[#6F6F6F] text-xs md:text-lg font-normal font-inter leading-[14.52px] md:leading-[21.78px] -tracking-[1.5%] mt-[5px]">
          Tudo o que você precisa para manter sua casa em ordem. Somos seu
          parceiro confiável para facilitar o dia a dia.
        </p>
      </div>

      <div className="w-full pl-[15px] md:pl-0">
        <ToggleButtons slidesPerView={4} active={active} setActive={setActive} />
      </div>
      <div
        className="hidden md:flex items-center justify-center gap-5 mt-[27px]"
        style={{ scrollbarWidth: "none" }}
      >
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <div
        className="md:hidden flex items-center justify-center w-full px-[15px] gap-5 mt-[10px]"
      >
        <Swiper
          spaceBetween={12}
          slidesPerView={1.8}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full flex items-center gap-10"
        >
          {
            servicesData.map((item, key) => (
              <SwiperSlide key={key}>
                <ServiceCard key={key} {...item} />
              </SwiperSlide>
            ))
          }
          <div className="w-full mt-5">
            <button className="w-2 h-2 bg-transparent"></button>
          </div>
        </Swiper>
      </div>

      <div className="w-full justify-normal items-center mt-5 hidden md:flex">
        <div className="max-w-[712px] w-full mx-auto h-[69px] py-[14px] px-[16px] border border-[#DEE2E7] rounded-[12px] bg-[#FFFFFF] shadow-[#090B2105] flex justify-between items-center">
          <span className="text-base text-[#000000] font-medium font-inter leading-[22.4px]">Não encontrou o que procura? </span>
          <Link
            href={"/services"}
            className="text-[#3C91E6] text-sm font-medium font-inter leading-[16.94px] w-[186px] h-[41px]  flex items-center gap-[10px] px-[10px] py-3 border border-[#3C91E6] rounded-[5px]"
          >
            Ver todos os Serviços
            <ArrowRight size={9} color="#3C91E6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
