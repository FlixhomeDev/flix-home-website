"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import { BroomSvg } from "@/app/assets/svgs/broom";
import { HomeTrendUpSvg } from "@/app/assets/svgs/home-trend-up";
import { BrushSvg } from "@/app/assets/svgs/brush";
import { BuildingSvg } from "@/app/assets/svgs/building";
import { ICategory } from "@/app/components/home/Our-services";

interface ToggleButtonsProps {
  categorys: ICategory[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function ToggleButtons({
  categorys,
  active,
  setActive,
}: ToggleButtonsProps) {
  return (
    <div className="w-full">
      <div
        className="flex md:justify-center justify-start lg:justify-center items-center gap-[7px] mt-[17px] overflow-x-scroll pl-[0px] whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
      >
        <Swiper
          spaceBetween={7.5}
          slidesPerView={3.5}
          pagination={{ clickable: true }}
          modules={[]}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full flex items-center gap-[7.5px] justify-center mx-auto"
        >
          {categorys?.map(({ name, id }) => (
            <SwiperSlide key={id} className="!w-[119px] flex justify-center">
              <Button
                key={id}
                className={`mx-0 w-[119px] h-[30px] md:h-[41px] text-[9.75px] leading-[16.58px] md:text-[13px] md:leading-[21.1px] tracking-[0.5px] font-normal font-inter rounded-[7px] md:rounded-[10px] border-2 border-[#3C91E614] ${
                  active === id ? "text-white" : "text-[#3C91E6]"
                }`}
                variant={active === id ? "default" : "outline"}
                onClick={() => setActive(id)}
              >
                {name === "Limpeza" && (
                  <BroomSvg fill={active === name ? "#FFF" : "#4094e4"} />
                )}
                {name === "Pintura" && (
                  <HomeTrendUpSvg fill={active === name ? "#FFF" : "#4094e4"} />
                )}
                {name === "Jardinagem" && (
                  <BrushSvg fill={active === name ? "#FFF" : "#4094e4"} />
                )}
                {name === "Instalação" && (
                  <BuildingSvg fill={active === name ? "#FFF" : "#4094e4"} />
                )}
                {name === "Decoração" && (
                  <BrushSvg fill={active === name ? "#FFF" : "#4094e4"} />
                )}
                {name.trim().length > 10 ? name.substring(0, 10) + "..." : name}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
