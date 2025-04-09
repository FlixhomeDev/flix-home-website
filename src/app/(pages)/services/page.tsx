"use client";
import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/Input";
import { SearchIcon } from "lucide-react";
import ToggleButtons from "@/components/ToggleButtons";
import { ServiceCard } from "@/components/ServiceCard";
import BreadcrumbBar from "@/components/Breadcrumb";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ICategory, IServices } from "@/app/components/home/Our-services";
import axios from "axios";

export default function Services() {
  const t = useTranslations();
  const [active, setActive] = useState<string>("");

  const [services, setServices] = useState<IServices[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);

  const getServices = async () => {
    try {
      const res = await axios.get(
        "https://flix-home-app-api-production.up.railway.app/service"
      );
      setServices(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const getCategory = async () => {
    try {
      const res = await axios.get(
        "https://flix-home-app-api-production.up.railway.app/category"
      );
      setCategory(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredServices = services.filter(
    (service) => service.categoriesId === active
  );

  // Se nenhum serviço for encontrado, mostramos todos:
  const servicesToDisplay =
    filteredServices.length > 0 ? filteredServices : services;

  useEffect(() => {
    getServices();
    getCategory();
  }, []);

  useEffect(() => {
    if (category.length > 0 && !active) {
      setActive(category[0].id);
    }
  }, [category]);

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
            categorys={category}
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-4 px-0 md:px-8 mt-8 w-full">
          {servicesToDisplay.map((service, index) => {
            const categoryName =
              category.find((cat) => cat.id === service.categoriesId)?.name ||
              "Sem categoria";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ServiceCard {...service} categoryName={categoryName} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
