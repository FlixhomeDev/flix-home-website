import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PlanData {
  id: string;
  plan: string;
  title: string;
  priceByMonth: number;
  priceByYear: number;
  link: string;
  image: StaticImageData;
  items: { title: string; example?: string; subtitle?: string }[];
  itemsnotinclud: { title: string; subtitle?: string }[];
}

interface CardPlansProps {
  planData: PlanData;
  showMonthly: boolean;
}

export default function CardPlans({ planData, showMonthly }: CardPlansProps) {
  const t = useTranslations();
  const price = showMonthly ? planData.priceByMonth : planData.priceByYear;
  const pricePeriod = showMonthly ? "/ mês" : "/ Ano";
  return (
    <div className="w-[252px] h-[480px] md:w-[380px] md:h-[700px] rounded-[10px] border border-[#DEE2E7] flex flex-col gap-5 bg-[#FCFCFC]">
      <div className="w-full h-[152px] rounded-t-[10px]">
        <Image
          src={planData.image}
          alt="Casal relaxando no sofá"
          className="w-full h-full object-cover rounded-t-[10px]"
        />
      </div>
      <div className="mt-0 md:mt-5 ml-5 w-[230px] md:w-full flex items-center gap-[10px]">
        <div
          className={`w-[90px] h-[23px] md:w-[150px] md:h-[36px] ${planData.plan === "Premium" ? "bg-[#ECAB2A]" : "bg-[#3C91E6]"
            } py-[9px] px-[13px] rounded-[8px] flex items-center justify-center`}
        >
          <span
            className={`text-[8px] md:text-sm ${planData.plan === "Premium" ? "text-[#0E0E0E]" : "text-[#FFFFFF]"
              } font-medium font-inter`}
          >
            {planData.plan}
          </span>
        </div>
        <span className="text-[11.34px] md:text-2xl text-[#3C91E6] font-medium font-inter">
          {planData.id === "1" ? "" : "€" + price}
        </span>
        <span className="text-[8.82px] md:text-lg text-[#3C91E6] font-medium font-inter">
          {planData.id === "1" ? "Gratuito" : pricePeriod}
        </span>
      </div>
      {/* <div className="-mt-[6px] md:mt-[10px] ml-5 flex items-center gap-[3px]">
        <span className="text-[8.82px] md:text-lg text-[#6F6F6F] font-bold font-inter">
          {planData.plan === "Freemium" ? "" : "€" + price}
        </span>
        <span className="text-[7.56px] md:text-base text-[#6F6F6F] font-medium font-inter">
          {planData.plan === "Freemium" ? "" : pricePeriod}
        </span>
      </div> */}
      <span className="text-[8.82px] md:text-lg text-[#6F6F6F] font-normal font-inter -mt-[6px] md:mt-[10px] ml-5 w-auto md:w-[300px]">
        {planData.title}
      </span>
      <div className="-mt-[6px] md:mt-5 mx-5 flex flex-col gap-[10px]">
        {planData.items
          .map((category, index) => (
            <div key={index} className="flex items-center gap-[10px]">
              <div className="w-[15px] h-[15px] md:w-[24px] md:h-[24px]">
                <ShieldCheck
                  className="w-[15px] h-[15px] md:w-[24px] md:h-[24px]"
                  color="#3C91E6"
                />
              </div>
              {/* <span className="mt-5 text-[7.56px] md:text-base text-[#6F6F6F] font-normal font-inter"> */}
              <span className={`"text-[7.56px] md:text-base text-[#6F6F6F] font-normal font-inter" ${category.example ? "mt-5" : "mt-0"} `} >
                {category.title}
                <span className="text-[6.56px] md:text-[12px] text-[#6F6F6F] ml-1 font-normal font-inter">
                  {category.example}
                </span>
              </span>

              {/* <span className="text-[7.56px] md:text-[7.56px] text-[#6F6F6F] font-normal font-inter">
                  {category.example}
                </span> */}
            </div>
          ))
          .slice(0, 4)}
      </div>

      <Link
        href={planData.link}
        target="_blank"
        className="whitespace-nowrap w-[227px] h-[30px] md:w-[347px] md:h-[48px] self-center bg-[#3C91E6] rounded-[8px] text-[8.19px] md:text-[13px] text-center text-[#FFFFFF] font-semibold font-inter flex items-center justify-center px-8 mt-0"
      >
        {planData.id === "1" ? t("Plans.button_free") : t("Plans.button")}
      </Link>

      <Link
        href={`/plans/details/${planData.id}`}
        className="self-center underline text-[8.19px] md:text-[13px] text-center text-[#000] font-semibold font-inter py-2 px-8 -mt-3"
      >
        {t("Plans.link")}
      </Link>
    </div>
  );
}
