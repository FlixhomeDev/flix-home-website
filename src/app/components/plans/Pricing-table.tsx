import { useTranslations } from "next-intl";
import { CheckIcon } from "lucide-react";

interface PlanFeature {
  name: string;
  freemium?: string | number | boolean;
  essencial?: string | number | boolean;
  familiar?: string | number | boolean;
  premium?: string | number | boolean;
}

interface PricingTableProps {
  plans: any[]; // Ajuste o tipo conforme a estrutura dos seus planos
  showMonthly: boolean;
}

export default function PricingTable({
  plans,
  showMonthly,
}: PricingTableProps) {
  const t = useTranslations();

  // Defina as características que você quer comparar
  const features: PlanFeature[] = [
    {
      name: t("PricingTable.assets_covered"),
      freemium: "3",
      essencial: "5",
      familiar: "10",
      premium: "15",
    },
    {
      name: t("PricingTable.visits_per_year"),
      freemium: "1 (levantamento)",
      essencial: "3",
      familiar: "5",
      premium: "5",
    },
    {
      name: t("PricingTable.on_demand_discount"),
      freemium: "0%",
      essencial: "5%",
      familiar: "10%",
      premium: "12%",
    },
    {
      name: t("PricingTable.maintenance_tips"),
      freemium: t("PricingTable.via_whatsapp"),
      essencial: t("PricingTable.monthly_personalized"),
      familiar: t("PricingTable.monthly_personalized_1_2"),
      premium: t("PricingTable.monthly_personalized_2"),
    },
    {
      name: t("PricingTable.emergency_discount"),
      freemium: false,
      essencial: "5%",
      familiar: "10%",
      premium: "12%",
    },
    {
      name: t("PricingTable.preventive_corrective_maintenance"),
      freemium: false,
      essencial: false,
      familiar: false,
      premium: false,
    },
    {
      name: t("PricingTable.replacement_parts"),
      freemium: false,
      essencial: false,
      familiar: t("PricingTable.can_be_acquired"),
      premium: t("PricingTable.can_be_acquired"),
    },
    {
      name: t("PricingTable.priority_support"),
      freemium: false,
      essencial: false,
      familiar: false,
      premium: false,
    },
    {
      name: t("PricingTable.corrective_repairs"),
      freemium: false,
      essencial: t("PricingTable.service_can_be_requested"),
      familiar: t("PricingTable.out_of_scope"),
      premium: t("PricingTable.out_of_scope"),
    },
  ];

  return (
    <div className="overflow-x-auto w-full mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {t("PricingTable.compare_plans")}
      </h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              {t("PricingTable.feature")}
            </th>
            {plans.map((plan) => (
              <th
                key={plan.id}
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
              >
                {plan.plan}
              </th>
            ))}
          </tr>
          <tr>
            <th className="px-6 py-3 border-b"></th>
            {plans.map((plan) => (
              <th key={plan.id} className="px-6 py-3 text-center border-b">
                <div className="font-bold text-lg text-blue-600">
                  {plan.id === "1"
                    ? t("PricingTable.free")
                    : `€${showMonthly ? plan.priceByMonth : plan.priceByYear}`}
                </div>
                <div className="text-sm text-gray-500">
                  {plan.id === "1"
                    ? ""
                    : showMonthly
                    ? t("PricingTable.per_month_short")
                    : t("PricingTable.per_year_short")}
                </div>
                <a
                  href={plan.link}
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  {plan.id === "1"
                    ? t("PricingTable.get_started")
                    : t("PricingTable.choose_plan")}
                </a>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                {feature.name}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 border-b">
                {feature.freemium === true ? (
                  <CheckIcon className="mx-auto text-green-500 w-5 h-5" />
                ) : feature.freemium === false ? (
                  <span className="text-gray-400">-</span>
                ) : (
                  feature.freemium
                )}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 border-b">
                {feature.essencial === true ? (
                  <CheckIcon className="mx-auto text-green-500 w-5 h-5" />
                ) : feature.essencial === false ? (
                  <span className="text-gray-400">-</span>
                ) : (
                  feature.essencial
                )}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 border-b">
                {feature.familiar === true ? (
                  <CheckIcon className="mx-auto text-green-500 w-5 h-5" />
                ) : feature.familiar === false ? (
                  <span className="text-gray-400">-</span>
                ) : (
                  feature.familiar
                )}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 border-b">
                {feature.premium === true ? (
                  <CheckIcon className="mx-auto text-green-500 w-5 h-5" />
                ) : feature.premium === false ? (
                  <span className="text-gray-400">-</span>
                ) : (
                  feature.premium
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
