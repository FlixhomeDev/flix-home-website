"use client"
import React from "react";
import { BadgeInfoIcon, CheckCircle2, ArrowRightIcon, CircleXIcon } from "lucide-react";
import Image from "next/image";
import { HomePlansSvg } from "@/app/assets/svgs";
import { ImagePlans } from "@/app/assets/images";
import Link from "next/link";
import FaqsPlans from "@/app/components/plans/Faqs";
import { useParams } from "next/navigation";
import { dataPlans } from "../../page";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactUsDialog from "@/app/components/plans/contactus-dialog";

export default function Details() {
    const { id } = useParams<{ id: string }>()

    return (
        <div className="flex flex-col">
            <div className="hidden md:block bg-[#3C91E6] w-full h-[61px]"></div>
            {
                dataPlans.filter((i) => i.id === id).map((item) => (
                    <section key={item.id} className="ml-0 w-full max-w-[350px] md:max-w-full self-center md:self-start md:px-[50px] mt-10 md:mt-[51px]">
                        <div className="hidden w-[126px] h-[36px] py-[9px] px-[13px] rounded-[8px] bg-[#3C91E6] md:flex items-center justify-center">
                            <span className="text-sm text-[#FFFFFF] font-medium font-inter">{item.plan}</span>
                        </div>
                        <div className="mt-0 md:mt-[10px] flex flex-col">
                            <h1 className="text-base md:text-[32px] text-[#000000] font-bold font-inter mt-0 md:mt-[10px]">{item.title}</h1>
                            <div className="flex flex-col-reverse md:flex-row">
                                <div className="w-full">
                                    <div className="mt-10 md:mt-[52px]">
                                        <div className="flex items-center gap-[5px]">
                                            <BadgeInfoIcon color="#3C91E6" size={18} />
                                            <h3 className="text-[15px] text-[#000000] font-medium font-inter">O que está Incluído</h3>
                                        </div>
                                        <ul className="mt-[15px] px-5 flex flex-col gap-[13px]">
                                            {
                                                item.items.map((item, key) => (
                                                    <li key={key} className="flex items-start gap-[10px]">
                                                        <CheckCircle2 color="#6F6F6F" size={18} />
                                                        <div className="flex flex-col">
                                                            <span className="text-[13px] text-[#484848] font-semibold font-inter">{item.title}</span>
                                                            <span className="text-xs text-[#6F6F6F] font-normal font-inter mt-[5px]">{item.subtitle}</span>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="w-full md:w-[395px] h-[1px] border border-[#DEE2E7] my-5"></div>
                                        <div className="flex items-center gap-[5px]">
                                            <BadgeInfoIcon color="#3C91E6" size={18} />
                                            <h3 className="text-[15px] text-[#000000] font-medium font-inter">O que não está Incluído</h3>
                                        </div>
                                        <ul className="mt-[15px] px-5 flex flex-col gap-[13px]">
                                            {
                                                item.itemsnotinclud.map((item, key) => (
                                                    <li key={key} className="flex items-start gap-[10px]">
                                                        <CircleXIcon color="#6F6F6F" size={18} />
                                                        <div className="flex flex-col">
                                                            <span className="text-[13px] text-[#484848] font-semibold font-inter">{item.title}</span>
                                                            <span className="text-xs text-[#6F6F6F] font-normal font-inter mt-[5px]">{item.subtitle}</span>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="w-full md:w-[670px] h-[1px] border border-[#E5E7EB] my-5"></div>
                                        <p className="text-[13px] md:text-base text-[#6F6F6F] font-normal font-inter mt-[32px]">
                                            Nota: São utilizadas técnicas de limpeza profunda com recurso a equipamentos
                                            de injecção e extracção de água. Tempo de secagem de 3 a 8 horas, dependendo das condições
                                            climatéricas. A chaise longue equivale a um lugar extra.
                                        </p>
                                        <div className="hidden md:block w-full md:w-[670px] h-[1px] border border-[#E5E7EB] my-[32px]"></div>
                                        <div className="hidden md:block w-full md:w-[670px] h-[1px] border border-[#E5E7EB] mb-[32px]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full mt-[10px] md:mt-0 md:w-[400px] h-[152px] bg-[#000000] bg-opacity-45 rounded-t-[10px]">
                                        <Image
                                            src={ImagePlans}
                                            alt="Casal relaxando no sofá"
                                            className="w-full h-full object-cover rounded-t-[10px]"
                                        />
                                    </div>
                                    <div className="flex items-center gap-[10px] mt-5 mx-5">
                                        <div className="w-[73px] h-[36px] bg-[#3C91E6] py-[9px] flex items-center justify-center rounded-[8px] text-sm text-[#FFFFFF] font-medium font-inter">{item.plan}</div>
                                        <h3 className="text-lg md:text-2xl text-[#3C91E6] font-bold font-inter">€ {item.priceByMonth}</h3>
                                        <span className="text-sm md:text-lg text-[#3C91E6] font-medium font-inter">por / mês</span>
                                    </div>
                                    <div className="mt-[10px] mx-5 flex items-center gap-[3px]">
                                        <h2 className="text-sm md:text-lg text-[#6F6F6F] font-bold font-inter">€ {item.priceByYear}</h2>
                                        <span className="text-xs md:text-base text-[#6F6F6F] font-medium font-inter">/Ano</span>
                                    </div>
                                    <p className="mx-5 mt-[10px] text-[#6F6F6F] text-sm md:text-lg font-normal font-inter">
                                        Sempre enviaremos um lembrete antes da data de renovação,
                                        que incluirá quaisquer alterações no seu preço.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[32px] flex flex-col">
                            <h3 className="text-lg md:text-2xl text-[#292D33] font-bold font-inter text-center">Legibilidade</h3>
                            <p className="self-center text-sm md:text-lg text-[#6F6F6F] leading-[21px] tracking-[-1.5%] font-normal font-inter mt-[5px] w-full md:w-[450px] text-center">Tudo o que você precisa para manter sua casa em ordem. Somos seu parceiro confiável para facilitar o dia a dia.</p>
                        </div>
                    </section>
                ))
            }

            <div className="mt-[40px] w-full max-w-[350px] md:w-[620px] md:max-w-full md:px-10 flex flex-col md:flex-row items-center self-center md:self-start gap-[40px] md:gap-2">
                <div className="flex items-center w-full h-[136px] md:w-[620px] md:h-auto gap-2">
                    <div className="h-[92px] w-[74px]">
                        <Image src={HomePlansSvg} alt="Play Store" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[#6F6F6F] font-inter flex flex-col h-full w-full md:w-[540px] space-y-1 pr-5">
                        <span className="font-bold text-sm md:text-xl leading-6 tracking-[-1.5%]">Primeiro, verifique se você é elegível - este plano é apenas para proprietários de imóveis</span>
                        <span className="font-normal text-sm md:text-lg leading-[21px] tracking-[-1.5%]">
                            Casas móveis, casas de parque, instalações comerciais, propriedades de conselhos e associações habitacionais não são elegíveis para este plano.</span>
                    </div>
                </div>
                <div className="flex items-center w-full md:w-[530px] h-[136px] md:h-[143px] gap-2">
                    <div className="h-[92px] w-[74px]">

                        <Image src={HomePlansSvg} alt="Play Store" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[#6F6F6F] font-inter flex flex-col h-full w-full md:w-[450px] space-y-4 pr-5">
                        <span className="font-bold text-sm md:text-xl leading-6 tracking-[-1.5%]">Não se esqueça de ler os documentos do plano</span>
                        <span className="font-normal text-sm md:text-lg leading-[21px] tracking-[-1.5%]">
                            É importante que você leia o <span className="text-[#3C91E6]">Resumo do Plano</span> e os <span className="text-[#3C91E6]">Termos e Condições</span> antes de contratar o plano.</span>
                    </div>
                </div>
            </div>
            <div className="w-[108px] h-[41px] mt-10 bg-[#3C91E6] self-center flex items-center gap-[10px] py-[12px] px-[10px] rounded-[5px]">
                <Link href={"#"} className="text-sm text-[#FFFFFF] font-medium font-inter">Label CTA</Link>
                <ArrowRightIcon color="#FFFFFF" size={9} />
            </div>
            <div className="mt-[70px] md:px-10 w-full max-w-[350px] md:w-auto self-center md:max-w-full">
                <FaqsPlans />
            </div>
            <div className="hidden w-[712px] h-[69px] mt-[29px] self-center border border-[#DEE2E7] rounded-[12px] py-[14px] px-[16px] md:flex items-center gap-[16px]">
                <span className="w-[502px] text-base text-[#000000] font-medium font-inter">Não encontrou o que procura? </span>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="w-[170px] h-[41px] border border-[#3C91E6] rounded-[5px] py-3 px-[10px] flex items-center gap-[10px] text-sm text-[#3C91E6] font-medium font-inter">
                            Entre em contacto
                            <ArrowRightIcon color="#3C91E6" size={9} />
                        </button>
                    </DialogTrigger>
                    <ContactUsDialog />
                </Dialog>

            </div>
        </div>
    );
}
