"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/Input";
import { SearchIcon } from "lucide-react";
import ToggleButtons from "@/components/ToggleButtons";
import { ServiceCard } from "@/components/ServiceCard";
import BreadcrumbBar from "@/components/Breadcrumb";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations();
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
    {
      id: "5",
      title: "Pintura de Interior Profissional",
      oldPrice: 250.0,
      newPrice: 200.0,
      category: "Pintura",
      image: "https://source.unsplash.com/300x200/?painting",
    },
    {
      id: "6",
      title: "Pintura de Interior Profissional",
      oldPrice: 250.0,
      newPrice: 200.0,
      category: "Pintura",
      image: "https://source.unsplash.com/300x200/?painting",
    },
  ];
  const [active, setActive] = useState("Limpeza");

  const filteredServices = servicesData.filter(
    (service) => service.category === active
  );

  return (
    <div className="px-4 md:px-8 mb-36 pt-24 lg:pt-20">
      <div className="max-w-[1256px] w-full mx-auto mt-[48px] md:mt-[100px]">
        <div className="mb-4 hidden md:block ml-9">
          <BreadcrumbBar
            items={[
              { label: t("Services.services"), href: "/services" },
              { label: t("Services.all") },
            ]}
          />
        </div>
        <h2 className="ml-9 hidden md:block text-lg md:text-[32px] text-[#292D33] font-bold font-inter">
          {t("Services.services_that_take_care")}
        </h2>

        <div className="max-w-[714px] mx-auto mt-16 md:mt-8 flex flex-col">
          <label
            htmlFor="services"
            className="text-[13px] text-[#000000] font-inter font-medium"
          >
            {t("Services.what_service_do_you_want")}
          </label>
          <div className="flex items-center w-full gap-x-2 mt-2 border px-3 py-1 h-[40px] rounded-md">
            <label htmlFor="services">
              <SearchIcon color="#6F6F6F" size={18} />
            </label>
            <Input
              id="services"
              placeholder="ex: limpeza de casa"
              className="flex-1 border-0 outline-none ring-0 h-full placeholder:text-xs placeholder:text-[#6F6F6F] placeholder:font-normal placeholder:font-inter"
            />
          </div>
        </div>

        <span className="text-xs text-[#000000] font-inter font-medium mt-[19px] block md:hidden">
          {t("Services.popular_topics")}
        </span>

        <div className="w-full md:max-w-[714px] mx-auto mt-[10px] md:mt-8 ">
          <ToggleButtons
            slidesPerView={3.2}
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-4 px-0 md:px-8 mt-8 w-full">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ServiceCard key={service.id} {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
