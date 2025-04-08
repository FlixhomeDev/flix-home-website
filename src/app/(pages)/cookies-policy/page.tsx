"use client";

import BreadcrumbBar from "@/components/Breadcrumb";
import { FAQs } from "@/app/components/home/FAQs/FAQs";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  const sectionKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div>
      <div className="w-full mx-auto mt-40">
        <div className="mb-2 px-4 md:px-[70px] hidden md:block">
          <BreadcrumbBar
            items={[{ label: "Home", href: "/home" }, { label: "Sobre Nós" }]}
          />
        </div>

        <div className="px-[15px] md:px-[70px]">
          <span className="text-sm md:text-base text-[#185CFF] font-bold font-manrope">
            {t("CookiePolicy.title")}
          </span>
        </div>

        <h2 className="mt-[10px] md:mt-[15px] text-2xl text-[#292D33] font-bold md:font-extrabold font-inter px-[15px] md:px-[70px]">
          {t("CookiePolicy.subtitle")}
        </h2>

        <div className="mt-10 space-y-10 px-[15px] md:px-[70px]">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h3 className="text-lg md:text-xl font-semibold text-[#185CFF] mb-2">
                {t(`CookiePolicy.${key}.title`)}
              </h3>
              <p className="whitespace-pre-line text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                {t(`CookiePolicy.${key}.description`)}
              </p>
            </section>
          ))}
        </div>

        <div className="block md:hidden mt-10">
          <FAQs />
        </div>
      </div>
    </div>
  );
}
