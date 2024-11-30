import { Logo } from "@/app/assets/svgs";
import FormCareers from "@/app/components/FormCareers";
import Image from "next/image";

export const categories: string[] = [
  "All",
  "Administrador",
  "Advogado",
  "Analista de Dados",
  "Analista de Marketing",
  "Analista de Recursos Humanos",
  "Analista de Sistemas",
  "Arquiteto",
];
export default function Page() {
  return (
    <div className="w-full h-full bg-white">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between font-[family-name:var(--font-geist-sans)]">
        <div className="hidden lg:flex relative flex-col w-[600px] h-[600px] bg-[url('/careers.png')] bg-cover bg-no-repeat bg-[bottom_0rem_center]">
          <Image
            src={Logo}
            alt="Logo"
            className="absolute top-4 left-4 w-[140px] h-auto"
          />
        </div>
        <FormCareers />
      </div>
    </div>
  );
}
