"use client";

import BreadcrumbBar from "@/components/Breadcrumb";
import { FAQs } from "@/app/components/home/FAQs/FAQs";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  const sectionKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

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
            {t("PrivacyPolicy.title")}
          </span>
        </div>

        <div className="mt-10 space-y-10 px-[15px] md:px-[70px]">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h3 className="text-lg md:text-xl font-semibold text-[#185CFF] mb-2">
                {t(`PrivacyPolicy.${key}.title`)}
              </h3>
              <p className="whitespace-pre-line text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                {t(`PrivacyPolicy.${key}.description`)}
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
