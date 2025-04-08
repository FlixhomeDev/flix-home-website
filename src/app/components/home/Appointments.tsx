"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { AppointmentCard } from "@/components/AppointmentCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import useWindowSize from "@/app/hooks/useWindowSize";
import { useTranslations } from "next-intl";
import { GoogleReviews, Trustpilot } from "@/app/assets/images";

export function Appointments() {
  const t = useTranslations();
  const { width } = useWindowSize();

  const getAmount = () => {
    if (width < 620) return 1; // Mobile
    if (width < 760) return 2; // Mobile
    if (width < 968) return 4; // Mobile
    return 4; // Desktop
  };

  const appointments = [
    {
      id: "1",
      user: {
        name: "João Silva",
        location: "Porto, PT",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      createdAt: "1 day ago",
      appointment: t("Home.Depoinments.first"),
      rating: 5,
    },
    {
      id: "2",
      user: {
        name: "Ana Maria",
        location: "Aveiro, PT",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      createdAt: "1 day ago",
      appointment: t("Home.Depoinments.second"),
      rating: 5,
    },
    {
      id: "3",
      user: {
        name: "Paulo",
        location: "Porto, PT",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      createdAt: "2 day ago",
      appointment: t("Home.Depoinments.three"),
      rating: 5,
    },
    {
      id: "4",
      user: {
        name: "Eduardo",
        location: "Porto, PT",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      createdAt: "1 day ago",
      appointment: t("Home.Depoinments.four"),
      rating: 5,
    },
    {
      id: "5",
      user: {
        name: "Eduardo",
        location: "Porto, PT",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      createdAt: "1 day ago",
      appointment: t("Home.Depoinments.five"),
      rating: 5,
    },
  ];

  return (
    <div className="max-w-[1256px] w-full mx-auto mt-[48px] lg:mt-24 2xl:mt-64 px-4 md:px-8 overflow-hidden">
      <h2 className="hidden md:block text-lg text-[#292D33] md:text-2xl font-bold font-inter leading-[29.05px] -tracking-[1.5%] text-center">
        {t("Home.Depoinments.title")}
      </h2>
      <div className="flex flex-col md:hidden">
        <h2 className="text-lg text-[#292D33] font-bold font-inter leading-[21.78px] -tracking-[1.5%] text-center">
          {t("Home.Depoinments.title")}
        </h2>
      </div>

      <div className="flex gap-[10px] mt-[26px] w-full">
        <Swiper
          spaceBetween={12}
          slidesPerView={getAmount()}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full flex items-center gap-10"
        >
          {appointments.map((appoint) => (
            <SwiperSlide key={appoint?.id}>
              <AppointmentCard key={appoint?.id} {...appoint} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full justify-normal items-center mt-[26px] flex">
        <div className="max-w-[712px] w-full mx-auto md:h-[150px] h-[250px] py-[14px] px-[16px] bg-[#FFFFFF] shadow-[#090B2105] flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              href={"https://g.page/r/CU6-gg3ZBiQaEAE/review"}
              target="_blank"
            >
              <Image
                src={GoogleReviews}
                alt="ProSaas Svg"
                className="h-auto md:h-auto"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              href={"https://www.trustpilot.com/evaluate/flixhome.app"}
              target="_blank"
            >
              <Image
                src={Trustpilot}
                alt="ProSaas Svg"
                className="h-28 md:h-auto"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="w-full justify-normal items-center mt-[26px] flex">
        <div className="max-w-[712px] w-full mx-auto md:h-[69px] h-[110px] py-[14px] px-[16px] border border-[#DEE2E7] rounded-[12px] bg-[#FFFFFF] shadow-[#090B2105] flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm md:text-base text-[#000000] font-medium font-inter leading-[22.4px]">
            {t("Home.Depoinments.help")}
          </span>
          <Link
            href={"https://wa.me/message/PHDJAIL6RKWZC1"}
            target="_blank"
            className="text-[#3C91E6] text-sm font-medium font-inter leading-[16.94px] w-[300px] h-[41px]  flex items-center justify-center gap-[10px] px-[10px] py-3 border border-[#3C91E6] rounded-[5px]"
          >
            {t("Home.Depoinments.button")}
            <ArrowRight size={9} color="#3C91E6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
