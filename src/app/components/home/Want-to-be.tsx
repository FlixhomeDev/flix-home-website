import { WeTake02, EquipeFh } from "@/app/assets/images";
import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function WantToBe() {
  const t = useTranslations();
  return (
    <div className="mt-10 lg:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 md:h-[357px] relative z-10">
      <div className="relative">
        <div className="absolute h-[357px] top-0 left-0 right-0 bottom-0 bg-primaryColor/95" />
        <Image
          src={WeTake02}
          alt="We Take your home"
          className="h-[357px] absolute -z-10 top-0 left-0 right-0 bottom-0"
        />
        <div className="relative flex flex-col justify-center items-center lg:items-start px-6 lg:px-[147px] z-50 h-[357px]">
          <h2 className="text-center lg:text-left text-white text-2xl font-bold">
            {t("Home.Partners.title")}
          </h2>
          <p className="mt-2 max-w-[508px] w-full text-white text-xs md:text-base text-center lg:text-left">
            {t("Home.Partners.description")}
          </p>
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTY-18Zi3QxhUQv7vWsIBlIh_IsdFWgge2rusq22paNvfKbQ/viewform"
            // variant={"ghost"}
            className="hover:bg-accent hover:text-accent-foreground rounded-[5px] w-[130px] bg-white flex flex-row items-center justify-around text-primaryColor mt-5 !h-8 !text-sm active:scale-95 transition-all mx-auto lg:ml-0"
          >
            {t("Home.Partners.button")}
            <ArrowRightIcon size={25} />
          </Link>
        </div>
      </div>
      <div className="h-[357px] overflow-hidden hidden lg:block">
        <Image
          src={EquipeFh}
          alt="We Take your home"
          className="hidden lg:flex relative bottom-12"
        />
      </div>
    </div>
  );
}
