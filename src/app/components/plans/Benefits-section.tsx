import { useTranslations } from "next-intl";
import { Lightbulb, Clock, CheckCircle, Settings } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const t = useTranslations("Benefits");

  const benefits: Benefit[] = [
    {
      icon: (
        <Lightbulb
          className="w-10 h-10 mx-auto mb-4 text-flix-blue"
          color="#4094e4"
        />
      ),
      title: t("intelligent_prevention_title"),
      description: t("intelligent_prevention_description"),
    },
    {
      icon: (
        <Clock
          className="w-10 h-10 mx-auto mb-4 text-flix-green"
          color="#4094e4"
        />
      ),
      title: t("fast_support_title"),
      description: t("fast_support_description"),
    },
    {
      icon: (
        <CheckCircle
          className="w-10 h-10 mx-auto mb-4 text-flix-gold"
          color="#4094e4"
        />
      ),
      title: t("total_flexibility_title"),
      description: t("total_flexibility_description"),
    },
    {
      icon: (
        <Settings
          className="w-10 h-10 mx-auto mb-4 text-flix-gray"
          color="#4094e4"
        />
      ),
      title: t("simple_management_title"),
      description: t("simple_management_description"),
    },
  ];

  return (
    <section className="py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t("why_choose_our_plans")}
      </h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            {benefit.icon}
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
          >
            <div className="text-flix-gold">{benefit.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
