import { ShieldTickSvg } from "@/app/assets/svgs";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardPlansProps {
  id: string;
  plan: string;
  title: string;
  priceByMonth: number;
  priceByYear: number;
  link: string;
  image: StaticImageData;
  items: { title: string; subtitle?: string }[];
  itemsnotinclud: { title: string; subtitle?: string }[];
}

export default function CardPlans(item: CardPlansProps) {
  const t = useTranslations();
  return (
    <div className="w-[252px] h-[480px] md:w-[380px] md:h-[780px] rounded-[10px] border border-[#DEE2E7] flex flex-col gap-5 bg-[#FCFCFC]">
      <div className="w-full h-[152px] rounded-t-[10px]">
        <Image
          src={item.image}
          alt="Casal relaxando no sofá"
          className="w-full h-full object-cover rounded-t-[10px]"
        />
      </div>
      <div className="mt-0 md:mt-5 ml-5 w-[230px] md:w-full flex items-center gap-[10px]">
        <div
          className={`w-[90px] h-[23px] md:w-[150px] md:h-[36px] ${
            item.plan === "Premium" ? "bg-[#ECAB2A]" : "bg-[#3C91E6]"
          } py-[9px] px-[13px] rounded-[8px] flex items-center justify-center`}
        >
          <span
            className={`text-[8px] md:text-sm ${
              item.plan === "Premium" ? "text-[#0E0E0E]" : "text-[#FFFFFF]"
            } font-medium font-inter`}
          >
            {item.plan}
          </span>
        </div>
        <span className="text-[11.34px] md:text-2xl text-[#3C91E6] font-medium font-inter">
          {item.id === "1" ? "" : "€" + item.priceByMonth}
        </span>
        <span className="text-[8.82px] md:text-lg text-[#3C91E6] font-medium font-inter">
          {item.id === "1" ? "Gratuito" : "por / mês"}
        </span>
      </div>
      <div className="-mt-[6px] md:mt-[10px] ml-5 flex items-center gap-[3px]">
        <span className="text-[8.82px] md:text-lg text-[#6F6F6F] font-bold font-inter">
          {item.plan === "Freemium" ? "" : "€" + item.priceByYear}
        </span>
        <span className="text-[7.56px] md:text-base text-[#6F6F6F] font-medium font-inter">
          {item.plan === "Freemium" ? "" : "/Ano"}
        </span>
      </div>
      <span className="text-[8.82px] md:text-lg text-[#6F6F6F] font-normal font-inter -mt-[6px] md:mt-[10px] ml-5 w-auto md:w-[360px]">
        {item.title}
      </span>
      <div className="-mt-[6px] md:mt-5 ml-5 flex flex-col gap-[10px]">
        {item.items
          .map((category, index) => (
            <div key={index} className="flex items-center gap-[10px]">
              <div className="w-[15px] h-[15px] md:w-[24px] md:h-[24px]">
                <Image
                  src={ShieldTickSvg}
                  alt="Shield Tick Svg"
                  className="w-full h-full"
                />
              </div>
              <span className="text-[7.56px] md:text-base text-[#6F6F6F] font-normal font-inter">
                {category.title}
              </span>
            </div>
          ))
          .slice(0, 4)}
      </div>
      <Link
        href={item.link}
        target="_blank"
        className="w-[227px] h-[30px] md:w-[347px] md:h-[48px] self-center bg-[#3C91E6] rounded-[8px] text-[8.19px] md:text-[13px] text-center text-[#FFFFFF] font-semibold font-inter flex items-center justify-center px-8 mt-5"
      >
        {item.id === "1" ? t("Plans.button_free") : t("Plans.button")}
      </Link>
      <Link
        href={`/plans/details/${item.id}`}
        className="self-center underline text-[8.19px] md:text-[13px] text-center text-[#000] font-semibold font-inter py-2 px-8 -mt-3"
      >
        {t("Plans.link")}
      </Link>
    </div>
  );
}
