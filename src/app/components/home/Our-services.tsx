"use client";
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
    <div className="max-w-[1256px] w-full mx-auto mt-8 lg:mt-20">
      <div className="w-full max-w-[468px] mx-auto">
        <h2 className="text-center font-bold text-2xl">
          Serviços que cuidam de tudo para você.
        </h2>
        <p className="text-center text-gray-500 mt-3">
          Tudo o que você precisa para manter sua casa em ordem. Somos seu
          parceiro confiável para facilitar o dia a dia.
        </p>
      </div>

      <ToggleButtons active={active} setActive={setActive} />
      <div className="w-full items-center justify-between flex mt-8 px-4 md:px-8">
        <h3 className="text-lg md:text-2xl font-bold">Promoções</h3>
        <Link href={"/"} className="text-primaryColor">
          Ver todas
        </Link>
      </div>
      <div
        className="flex gap-x-1 px-4 md:px-8 mt-3 overflow-x-auto xl:overflow-x-hidden pl-8"
        style={{ scrollbarWidth: "none" }}
      >
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <div className="w-full justify-normal items-center mt-5 hidden md:flex">
        <div className="max-w-[712px] w-full mx-auto border h-[69px] p-2 rounded-md bg-white shadow-sm flex justify-between items-center">
          <span className="">Não encontrou o que procura? </span>
          <Link
            href={"/"}
            className="text-primaryColor flex items-center gap-x-1 border border-primaryColor p-1 rounded px-4 py-2"
          >
            Ver todos os Serviços
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
