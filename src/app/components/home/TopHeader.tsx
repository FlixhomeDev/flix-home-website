"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SelectLang from "./SelectLang";

export function TopHeader() {
  const t = useTranslations();
  return (
    <div
      className={
        "z-50 w-full flex fixed top-0 bg-primaryColor px-10 py-3 md:flex flex-row justify-between items-center"
      }
    >
      <nav className={"w-full h-full flex items-center justify-around"}>
        <nav className="flex items-center gap-4">
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSeTY-18Zi3QxhUQv7vWsIBlIh_IsdFWgge2rusq22paNvfKbQ/viewform"
            }
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            {t("TopHeader.support")}
          </Link>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSeTY-18Zi3QxhUQv7vWsIBlIh_IsdFWgge2rusq22paNvfKbQ/viewform"
            }
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            {t("TopHeader.partners")}
          </Link>
        </nav>
        <nav className="flex items-center gap-4">
          <SelectLang />
        </nav>
      </nav>
    </div>
  );
}
