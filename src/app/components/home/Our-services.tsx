"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ServiceCard } from "@/components/ServiceCard";
import ToggleButtons from "@/components/ToggleButtons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import axios from "axios";

export interface IServices {
  id: string;
  reference: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  status: string;
  categoriesId: string;
  created_at: string;
  updated_at: string;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export function OurServices() {
  const t = useTranslations();
  const [active, setActive] = useState<string>("");

  const [services, setServices] = useState<IServices[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);

  // const getServices = async () => {
  //   const cached = localStorage.getItem("services");
  //   const cachedTime = localStorage.getItem("services_cached_at");

  //   const now = Date.now();
  //   if (cached && cachedTime && now - parseInt(cachedTime) < CACHE_TTL) {
  //     setServices(JSON.parse(cached));
  //     return;
  //   }

  //   try {
  //     const res = await axios.get(
  //       "https://flix-home-app-api-production.up.railway.app/service"
  //     );
  //     setServices(res.data.items);
  //     localStorage.setItem("services", JSON.stringify(res.data.items));
  //     localStorage.setItem("services_cached_at", now.toString());
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const getServices = async () => {
    try {
      // 1. Buscar a primeira página
      const firstPageRes = await axios.get(
        "https://flix-home-app-api-production.up.railway.app/service?page=1"
      );

      const { items: firstItems, lastPage } = firstPageRes.data;
      let allItems = [...firstItems];

      // 2. Se tiver mais páginas, busca elas
      if (lastPage > 1) {
        const pageRequests = [];

        for (let page = 13; page <= lastPage; page++) {
          pageRequests.push(
            axios.get(
              `https://flix-home-app-api-production.up.railway.app/service?page=${page}`
            )
          );
        }

        const responses = await Promise.all(pageRequests);
        responses.forEach((res) => {
          allItems = [...allItems, ...res.data.items];
        });
      }

      // 3. Salva no estado e no cache
      setServices(allItems);
    } catch (error) {
      console.error("Erro ao buscar servicos:", error);
    }
  };

  const getCategory = async () => {
    try {
      // 1. Buscar a primeira página
      const firstPageRes = await axios.get(
        "https://flix-home-app-api-production.up.railway.app/category?page=1"
      );

      const { items: firstItems, lastPage } = firstPageRes.data;
      let allItems = [...firstItems];

      // 2. Se tiver mais páginas, busca elas
      if (lastPage > 1) {
        const pageRequests = [];

        for (let page = 2; page <= lastPage; page++) {
          pageRequests.push(
            axios.get(
              `https://flix-home-app-api-production.up.railway.app/category?page=${page}`
            )
          );
        }

        const responses = await Promise.all(pageRequests);
        responses.forEach((res) => {
          allItems = [...allItems, ...res.data.items];
        });
      }

      setCategory(allItems);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
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
    <div className="max-w-[1256px] w-full mx-auto mt-[58px] lg:mt-[78px]">
      <div className="w-full max-w-[340px] md:max-w-[468px] mx-auto">
        <h2 className="text-center font-bold font-inter leading-[21.78px] md:leading-[29.05px] -tracking-[1.5%] text-lg md:text-2xl text-[#292D33]">
          {t("Home.Services.title")}
        </h2>
        <p className="text-center lg:text-base text-gray-500 text-sm leading-4 md:text-lg font-normal font-inter  md:leading-[21.78px] -tracking-[1.5%] mt-[5px]">
          {t("Home.Services.description")}
        </p>
      </div>
      <div className="w-full md:max-w-[714px] mx-auto pl-[15px] md:pl-0">
        <ToggleButtons
          categorys={category}
          active={active}
          setActive={setActive}
        />
      </div>
      <div
        className="hidden md:flex items-center justify-center gap-5 mt-[27px] px-4"
        style={{ scrollbarWidth: "none" }}
      >
        {servicesToDisplay
          .map((service, index) => {
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
          })
          .slice(0, 5)}
      </div>

      <div className="md:hidden flex items-center justify-center w-full px-5 gap-5 mt-[10px]">
        <Swiper
          spaceBetween={12}
          slidesPerView={2}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full flex items-center gap-10"
        >
          {servicesToDisplay
            .map((item, index) => {
              const categoryName =
                category.find((cat) => cat.id === item.categoriesId)?.name ||
                "Sem categoria";
              return (
                <SwiperSlide key={item?.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ServiceCard {...item} categoryName={categoryName} />
                  </motion.div>
                </SwiperSlide>
              );
            })
            .slice(0, 4)}
        </Swiper>
      </div>

      <div className="w-full px-5 md:px-0 justify-normal items-center mt-5 flex">
        <div className="max-w-[712px] w-full mx-auto md:h-[69px] h-[110px] py-[14px] px-[16px] border border-[#DEE2E7] rounded-[12px] bg-[#FFFFFF] shadow-[#090B2105] flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm md:text-base text-[#000000] font-medium font-inter leading-[22.4px]">
            {t("Home.Services.not_found")}
          </span>
          <Link
            href={"/services"}
            className="text-[#3C91E6] text-xs font-medium font-inter leading-[16.94px] w-full md:w-[210px] h-[41px] flex items-center justify-center gap-[10px] px-[10px] py-3 border border-[#3C91E6] rounded-[5px]"
          >
            {t("Home.Services.button")}
            <ArrowRight size={14} color="#3C91E6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
