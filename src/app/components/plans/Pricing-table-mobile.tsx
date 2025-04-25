import { useTranslations } from "next-intl";
import { Info } from "lucide-react";
import { useState } from "react";
import CustomSelect from "./Custom-select";

interface Plan {
  id: string;
  plan: string;
  priceByMonth: number;
  priceByYear: number;
  link: string;
}

interface PlanFeature {
  name: string;
  freemium?: string | number | boolean;
  essencial?: string | number | boolean;
  familiar?: string | number | boolean;
  premium?: string | number | boolean;
}

interface PricingTableMobileProps {
  plans: Plan[];
  showMonthly: boolean;
}

export default function PricingTableMobile({
  plans,
  showMonthly,
}: PricingTableMobileProps) {
  const t = useTranslations();
  const freemiumPlan = plans.find((p) => p.id === "1");
  const essencialPlan = plans.find((p) => p.id === "2");
  const familiarPlan = plans.find((p) => p.id === "3");
  const premiumPlan = plans.find((p) => p.id === "4");

  const [selectedPlan1, setSelectedPlan1] = useState<string | null>(
    freemiumPlan?.id || null
  );
  const [selectedPlan2, setSelectedPlan2] = useState<string | null>(
    familiarPlan?.id || null
  );
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const handlePlan1Change = (newValue: string | null) => {
    setSelectedPlan1(newValue);
  };

  const handlePlan2Change = (newValue: string | null) => {
    setSelectedPlan2(newValue);
  };

  const handleFeatureClick = (featureName: string) => {
    setExpandedFeature(expandedFeature === featureName ? null : featureName);
  };

  const getPlanData = (planId: string | null) => {
    return plans.find((plan) => plan.id === planId);
  };

  const getAvailableOptions1 = () => {
    const options = [];
    if (selectedPlan2 !== freemiumPlan?.id)
      options.push({ value: freemiumPlan?.id, label: freemiumPlan?.plan });
    if (selectedPlan2 !== essencialPlan?.id)
      options.push({ value: essencialPlan?.id, label: essencialPlan?.plan });
    return options.filter(Boolean) as { value: string; label: string }[];
  };

  const getAvailableOptions2 = () => {
    const options = [];
    if (selectedPlan1 !== familiarPlan?.id)
      options.push({ value: familiarPlan?.id, label: familiarPlan?.plan });
    if (selectedPlan1 !== premiumPlan?.id)
      options.push({ value: premiumPlan?.id, label: premiumPlan?.plan });
    return options.filter(Boolean) as { value: string; label: string }[];
  };

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

  const getFeatureValue = (
    feature: PlanFeature | undefined,
    planId: string | null
  ) => {
    if (!feature) {
      return "-";
    }
    switch (planId) {
      case "1":
        return feature.freemium;
      case "2":
        return feature.essencial;
      case "3":
        return feature.familiar;
      case "4":
        return feature.premium;
      default:
        return "-";
    }
  };

  return (
    <div className="w-full mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        {t("PricingTable.compare_plans")}
      </h2>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <div className="w-1/2">
            <CustomSelect
              options={getAvailableOptions1()}
              value={selectedPlan1}
              onChange={handlePlan1Change}
              className="w-full"
            />
            {selectedPlan1 && (
              <div className="mt-2 text-center">
                <div className="font-bold text-lg text-blue-600">
                  {getPlanData(selectedPlan1)?.id === "1"
                    ? t("PricingTable.free")
                    : `€${
                        showMonthly
                          ? getPlanData(selectedPlan1)?.priceByMonth
                          : getPlanData(selectedPlan1)?.priceByYear
                      }`}
                </div>
                <div className="text-sm text-gray-500">
                  {getPlanData(selectedPlan1)?.id === "1"
                    ? ""
                    : showMonthly
                    ? t("PricingTable.per_month_short")
                    : t("PricingTable.per_year_short")}
                </div>
                <a
                  href={getPlanData(selectedPlan1)?.link}
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  {getPlanData(selectedPlan1)?.id === "1"
                    ? t("PricingTable.get_started")
                    : t("PricingTable.choose_plan")}
                </a>
              </div>
            )}
          </div>
          <div className="w-1/2">
            <CustomSelect
              options={getAvailableOptions2()}
              value={selectedPlan2}
              onChange={handlePlan2Change}
              className="w-full"
            />
            {selectedPlan2 && (
              <div className="mt-2 text-center">
                <div className="font-bold text-lg text-blue-600">
                  {getPlanData(selectedPlan2)?.id === "1"
                    ? t("PricingTable.free")
                    : `€${
                        showMonthly
                          ? getPlanData(selectedPlan2)?.priceByMonth
                          : getPlanData(selectedPlan2)?.priceByYear
                      }`}
                </div>
                <div className="text-sm text-gray-500">
                  {getPlanData(selectedPlan2)?.id === "1"
                    ? ""
                    : showMonthly
                    ? t("PricingTable.per_month_short")
                    : t("PricingTable.per_year_short")}
                </div>
                <a
                  href={getPlanData(selectedPlan2)?.link}
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  {getPlanData(selectedPlan2)?.id === "1"
                    ? t("PricingTable.get_started")
                    : t("PricingTable.choose_plan")}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="w-full">
          <h3 className="font-semibold text-gray-700 mb-2">
            {t("PricingTable.features")}
          </h3>
          <div className="flex flex-col space-y-2">
            {features.map((feature) => (
              <div key={feature.name} className="border rounded bg-gray-50">
                <button
                  className="w-full p-2 flex justify-between items-center"
                  onClick={() => handleFeatureClick(feature.name)}
                >
                  <span className="font-medium text-gray-700">
                    {feature.name}
                  </span>
                  <Info className="w-4 h-4 text-gray-500" />
                </button>
                {expandedFeature === feature.name && (
                  <div className="p-4 grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-blue-600">
                        {getPlanData(selectedPlan1)?.plan}:
                      </span>{" "}
                      <span>
                        {getFeatureValue(
                          features.find((f) => f.name === feature.name),
                          selectedPlan1
                        )}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-600">
                        {getPlanData(selectedPlan2)?.plan}:
                      </span>{" "}
                      <span>
                        {getFeatureValue(
                          features.find((f) => f.name === feature.name),
                          selectedPlan2
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
