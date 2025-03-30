import { Accordion } from "@/components/ui/accordion";
import { AccordionItemLabel } from "./AccordionItem";
import { useTranslations } from "next-intl";

export function FAQs() {
  const t = useTranslations();

  const faqs = [
    {
      title: t("Faqs.first"),
      value: "value-01",
      description: t("Faqs.first_description"),
    },
    {
      title: t("Faqs.second"),
      value: "value-02",
      description: t("Faqs.second_description"),
    },
    {
      title: t("Faqs.three"),
      value: "value-03",
      description: t("Faqs.three_description"),
    },
    {
      title: t("Faqs.four"),
      value: "value-04",
      description: t("Faqs.four_description"),
    },
    {
      title: t("Faqs.five"),
      value: "value-05",
      description: t("Faqs.five_description"),
    },
    {
      title: t("Faqs.six"),
      value: "value-06",
      description: t("Faqs.six_description"),
    },
    {
      title: t("Faqs.seven"),
      value: "value-07",
      description: t("Faqs.seven_description"),
    },
    {
      title: t("Faqs.height"),
      value: "value-08",
      description: t("Faqs.height_description"),
    },
  ];

  return (
    <div className="w-full max-w-[1256px] 2xl:max-w-full mx-auto mt-[60px] md:mt-[200px] px-4 md:px-8 2xl:px-16">
      <h2 className="text-lg md:text-2xl text-[#1C1F35] text-center font-semibold font-rubik">
        {t("Faqs.title")}
      </h2>

      <div className="w-full flex gap-3 mt-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItemLabel
              className="w-full border border-[#DEE2E7] rounded-[8px] py-2 md:py-4 px-[41px] mt-3"
              key={faq.value}
              title={faq.title}
              value={faq.value}
              description={faq.description}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
