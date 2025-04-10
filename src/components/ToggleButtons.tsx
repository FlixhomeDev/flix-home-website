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
  const array = [
    "eecd2f03-56b9-4ca8-aad9-4b04ce79c5dd",
    "5eb90ce6-2210-410e-b69d-3099d56ebd06",
    "184e6c21-b4d3-4ad1-85af-1feb70cbfdeb",
    "d888cd1f-4b07-46e6-a461-6ad33580a426",
    "99e28911-447c-4ccb-b0ae-e6643f2a2650",
  ];

  const filteredCategories = categorys.filter((category) =>
    array.includes(category.id)
  );

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
          {filteredCategories?.map(({ name, id }) => (
            <SwiperSlide key={id} className="!w-[119px] flex justify-center">
              <Button
                key={id}
                className={`mx-0 w-[119px] h-[30px] md:h-[41px] text-[9.75px] leading-[16.58px] md:text-[13px] md:leading-[21.1px] tracking-[0.5px] font-normal font-inter rounded-[7px] md:rounded-[10px] border-2 border-[#3C91E614] ${
                  active === id ? "text-white" : "text-[#3C91E6]"
                }`}
                variant={active === id ? "default" : "outline"}
                onClick={() => setActive(id)}
              >
                {name === "Reparos Gerais" && (
                  <HomeTrendUpSvg fill={active === id ? "#FFF" : "#4094e4"} />
                )}
                {name === "Limpeza Residencial" && (
                  <BroomSvg fill={active === id ? "#FFF" : "#4094e4"} />
                )}
                {name === "Jardinagem" && (
                  <BrushSvg fill={active === id ? "#FFF" : "#4094e4"} />
                )}
                {name === "Instalação" && (
                  <BuildingSvg fill={active === id ? "#FFF" : "#4094e4"} />
                )}
                {name === "Impermeabilização" && (
                  <BrushSvg fill={active === id ? "#FFF" : "#4094e4"} />
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
