"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardPlans from "@/app/components/plans/Card-plans";
import { useTranslations } from "next-intl";
import {
  PlanoEssencial,
  PlanoFamiliar,
  PlanoFreemium,
} from "@/app/assets/images";
import { useState } from "react";
import SwitchPrice from "../plans/Switch-price";

export default function OurPlans() {
  const t = useTranslations();
  const [showMonthly, setShowMonthly] = useState(true);

  const handlePriceToggle = (isMonthly: boolean) => {
    setShowMonthly(isMonthly);
  };

  const dataPlans = [
    {
      id: "1",
      plan: t("Plans.first_plan"),
      title: t("Plans.first_description"),
      priceByMonth: 0.0,
      priceByYear: 0.0,
      link: "https://wa.me/351939936372?text=Quero%20o%20plano%Freemium",
      image: PlanoFreemium,
      items: [
        {
          title: "3 Ativos",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "1 visita (levantamento)",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "0% desconto on-demand",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title:
            "Notificações e alertas sobre boas práticas de manutenção dos seus ativos",
          subtitle: "via whatsapp",
        },
      ],
      itemsnotinclud: [
        {
          title: "Manutenção preventiva ou corretiva.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "Peças de reposição.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "Atendimento prioritário.",
          subtitle: "You’ll have the apartment to yourself",
        },
      ],
    },
    {
      id: "2",
      plan: t("Plans.second_plan"),
      title: t("Plans.second_description"),
      priceByMonth: 18,
      priceByYear: 180,
      link: "https://wa.me/351939936372?text=Quero%20o%20plano%Essencial",
      image: PlanoEssencial,
      items: [
        {
          title: "5 ativos cobertos.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "3 visitas/ano.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "5% desconto on-demand.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title:
            "Dicas personalizadas mensais para aumentar a vida útil dos seus equipamentos.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "5% desconto em emergências",
          subtitle: "You’ll have the apartment to yourself",
        },
      ],
      itemsnotinclud: [
        {
          title: "Peças de reposição.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "Manutenções corretivas.",
          subtitle:
            "caso haja um problema, o serviço pode ser solicitado à parte",
        },
        {
          title: "Atendimento prioritário.",
          subtitle: "You’ll have the apartment to yourself",
        },
      ],
    },
    {
      id: "3",
      plan: t("Plans.three_plan"),
      title: t("Plans.three_description"),
      priceByMonth: 28,
      priceByYear: 280,
      link: "https://wa.me/351939936372?text=Quero%20o%20plano%Familia",
      image: PlanoFamiliar,
      items: [
        {
          title: "10 ativos cobertos.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "5 visitas/ano.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "10% desconto on-demand.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "1-2 dicas personalizadas/mês.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "10% desconto em emergências.",
          subtitle: "desconto especial para correções",
        },
      ],
      itemsnotinclud: [
        {
          title: "Peças de reposição",
          subtitle: "podem ser adquiridas separadamente",
        },
        {
          title: "Reparos corretivos fora do escopo da manutenção preventiva.",
          subtitle: "You’ll have the apartment to yourself",
        },
      ],
    },
    {
      id: "4",
      plan: t("Plans.four_plan"),
      title: t("Plans.four_description"),
      priceByMonth: 45,
      priceByYear: 450,
      link: "https://wa.me/351939936372?text=Quero%20o%20plano%20Premium",
      image: PlanoFamiliar,
      items: [
        {
          title: "15 ativos cobertos.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "5 visitas/ano.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "12% desconto on-demand.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "2 dicas personalizadas/mês.",
          subtitle: "You’ll have the apartment to yourself",
        },
        {
          title: "12% desconto em emergências.",
          subtitle: "desconto especial para correções",
        },
      ],
      itemsnotinclud: [
        {
          title: "Peças de reposição",
          subtitle: "podem ser adquiridas separadamente",
        },
        {
          title: "Reparos corretivos fora do escopo da manutenção preventiva.",
          subtitle: "You’ll have the apartment to yourself",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col mt-10 lg:mt-20">
      <div className="w-full max-w-[340px] md:max-w-[468px] mx-auto">
        <h2 className="text-center font-bold font-inter leading-[21.78px] md:leading-[29.05px] -tracking-[1.5%] text-lg md:text-2xl text-[#292D33]">
          {t("Plans.title_home")}
        </h2>
        <p className="text-center lg:text-base text-gray-500 text-sm leading-4 md:text-lg font-normal font-inter  md:leading-[21.78px] -tracking-[1.5%] mt-[5px]">
          {t("Plans.description_home")}
        </p>
      </div>
      <div className="flex justify-center mt-[50px]">
        <SwitchPrice onToggle={handlePriceToggle} />
      </div>
      {/* <div className="hidden mt-0 md:mt-[10px] w-full h-[510px] md:h-[800px] px-[14px] md:px-0 md:flex items-center justify-center gap-5 mx-auto">
        {dataPlans.map((item) => (
          <CardPlans key={item.id} planData={item} showMonthly={showMonthly} />
        ))}
      </div> */}
      {/* <div className="hidden md:grid grid-cols-3 gap-6 mt-[10px] w-full bg-green-400 max-w-[1256px] px-[14px] md:px-0 mx-auto"> */}
      <div className="hidden md:grid gap-6 mt-[10px] w-full max-w-[1256px] px-[14px] md:px-0 mx-auto">
        {/* {dataPlans.slice(0, 3).map((item) => (
          <CardPlans key={item.id} planData={item} showMonthly={showMonthly} />
        ))}
        <div className="col-span-3 flex justify-center">
          <CardPlans
            key={dataPlans[3].id}
            planData={dataPlans[3]}
            showMonthly={showMonthly}
          />
        </div> */}
        <Swiper
          spaceBetween={5}
          slidesPerView={3.2}
          breakpoints={{
            768: { slidesPerView: 2.5 },
          }}
          className="w-full"
        >
          {dataPlans.map((item) => (
            <SwiperSlide key={item.id}>
              <CardPlans
                key={item.id}
                planData={item}
                showMonthly={showMonthly}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
          {dataPlans.map((item) => (
            <SwiperSlide key={item.id}>
              <CardPlans
                key={item.id}
                planData={item}
                showMonthly={showMonthly}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
