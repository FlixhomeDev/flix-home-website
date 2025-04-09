import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { NoPictureIllustrationSvg } from "@/app/assets/svgs";
import { CalendarDaysIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IServices } from "@/app/components/home/Our-services";

interface ServiceCardProps extends IServices {
  categoryName: string;
}
export function ServiceCard({ name, price, categoryName }: ServiceCardProps) {
  const t = useTranslations();
  const router = useRouter();
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={() => router.push("/services/details")}
      className="cursor-pointer py-[13px] px-[9px] rounded-[7px] max-w-[195px] md:max-w-[258px] w-full h-[254px] md:h-[336px] border border-[#DEE2E7] bg-[#FFFFFF] "
    >
      <div className="relative flex justify-center items-center w-full h-[141px] md:h-[187px] bg-[#F8F8F8] rounded-[7px]">
        {/* {!image ? (
          <Image src={image} alt={"image service"} width={107} height={107} />
        ) : ( */}
        <Image
          src={NoPictureIllustrationSvg}
          alt={"image service"}
          width={107}
          height={107}
        />
        {/* )} */}
        <span className="bg-[#000000] bg-opacity-35 rounded-[3.98px] w-[60px] h-[18px] md:h-[20px] absolute top-3 left-[9px] text-center px-[2px] py-[3px] text-[10px] text-[#FFFFFF] leading-[12.84px] font-medium font-inter">
          {categoryName.trim().length > 10
            ? categoryName.substring(0, 10) + "..."
            : categoryName}
        </span>
      </div>
      <h4 className="flex items-center gap-[2.65px] mt-[13px]">
        <span className="text-[#3C91E6] text-[13px] md:text-[17px] font-semibold font-inter leading-[15.73px] md:leading-[20.87px] -tracking-[0.2px]">
          € {price}
        </span>
        {/* <span className="text-[#6F6F6F] text-[11px] md:text-sm font-normal font-inter leading-[13.31px] md:leading-[17.66px] -tracking-[0.2px] line-through">
          € {oldPrice}
        </span> */}
      </h4>
      <p className="text-[#484848] text-[10px] md:text-[13px] font-medium font-inter leading-[12.1px] md:leading-[16.05px] -tracking-[0.2px] mt-[6px]">
        {name}
      </p>
      <Link
        href={"https://wa.me/message/PHDJAIL6RKWZC1"}
        className="md:h-[37.22px] h-[28px] w-[140px] md:w-[180.77px] flex items-center gap-[10px] md:gap-[5.31px] py-[8px] px-[9px] md:py-[11px] md:px-[10px] border border-[#3C91E614] border-opacity-[8%] bg-[#3C91E605] bg-opacity-[2%] rounded-[7px] mt-4 text-[#3C91E6] text-[10px] md:text-[13px] font-medium font-inter leading-[12.1px] md:leading-[16.05px] -tracking-[0.2px]"
      >
        <CalendarDaysIcon size={14} />
        {t("Header.schedule_service")}
      </Link>
    </div>
  );
}
