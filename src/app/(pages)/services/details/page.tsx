"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FlagIcon } from "lucide-react";
import { ServiceDetails, ServiceDetails2, ServiceDetails3, ServiceDetails4, ServiceDetails5 } from "@/app/assets/images";
import FaqsPlans from "@/app/components/plans/Faqs";
import ListItems from "@/components/ListItems";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ReportDialog from "@/app/components/services/report-dialog";

export default function Details() {

    const data = [
        {
            id: "1",
            title: "Green Life Gardening Service",
            subtitle: "O que está Incluído",
            subtitlenotinclud: "O que não está incluído",
            items: [
                { title: "Limpeza do Pó em todas as divisões", subtitle: "You’ll have the apartment to yourself" },
                { title: "Limpeza do Pó em todas as divisões", subtitle: "You’ll have the apartment to yourself" },
                { title: "Limpeza do Pó em todas as divisões", subtitle: "You’ll have the apartment to yourself" }
            ],
            itemsnotinclud: [
                { title: "Limpeza do Pó em todas as divisões", subtitle: "You’ll have the apartment to yourself" },
                { title: "Limpeza do Pó em todas as divisões", subtitle: "You’ll have the apartment to yourself" },
                { title: "Limpeza do Pó em todas as divisões", subtitle: "You’ll have the apartment to yourself" }
            ],
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="hidden w-full md:flex items-center gap-[5px] px-[100px] mt-[55px]">
                <span className="text-sm text-[#9497A1] font-medium font-manrope">Serviços</span>
                <div className="bg-[#9497A1] w-[1.5px] h-[14px]"></div>
                <span className="text-sm text-[#292D33] font-semibold font-manrope">Details</span>
            </div>
            <div className="mt-[60px] md:mt-2 w-full h-[220px] md:h-[400px] md:px-[100px]">
                <div className="hidden w-full h-full rounded-[16px] md:flex items-center gap-2">
                    <div className="w-[58%] h-full rounded-l-[16px]">
                        <Image src={ServiceDetails} alt="service details" className="w-full h-full object-cover rounded-l-[16px]" />
                    </div>
                    <div className="w-[42%] h-full md:flex flex-col gap-2 hidden">
                        <div className="flex items-center gap-2 w-full h-[50%]">
                            <div className="w-[50%] h-full">
                                <Image src={ServiceDetails2} alt="service details" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-[50%] h-full rounded-tr-[16px]">
                                <Image src={ServiceDetails3} alt="service details" className="w-full h-full object-cover rounded-tr-[16px]" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 w-full h-[48%]">
                            <div className="w-[50%] h-full">
                                <Image src={ServiceDetails4} alt="service details" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-[50%] h-full rounded-br-[16px]">
                                <Image src={ServiceDetails5} alt="service details" className="w-full h-full object-cover rounded-br-[16px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full h-full rounded-[16px] flex items-center gap-2">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full h-full max-w-[360px] flex items-center gap-20"
                    >
                        <SwiperSlide>
                            <div className="w-full h-[183px]">
                                <Image src={ServiceDetails} alt="service details" className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[183px]">
                                <Image src={ServiceDetails} alt="service details" className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[183px]">
                                <Image src={ServiceDetails} alt="service details" className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[183px]">
                                <Image src={ServiceDetails} alt="service details" className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                        <div className="w-full mt-5">
                            <button className="w-2 h-2 bg-transparent"></button>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className="mt-10 w-full md:px-[100px] flex flex-col md:flex-row items-center justify-between">
                <div>
                    {
                        data.map((item) => (
                            <ListItems key={item.id} {...item} />
                        ))
                    }
                </div>
                <div className="w-[340px] flex flex-col items-start justify-start md:hidden">
                    <div className="w-full h-[1px] border border-[#E5E7EB] mt-5"></div>
                    <p className="w-full text-[13px] md:text-base text-[#6F6F6F] font-normal font-inter mt-[10px]">
                        Nota: São utilizadas técnicas de limpeza profunda com recurso a equipamentos
                        de injecção e extracção de água. Tempo de secagem de 3 a 8 horas, dependendo das condições
                        climatéricas. A chaise longue equivale a um lugar extra.
                    </p>
                </div>
                <div className="relative w-[340px] md:w-[358px] h-[258px] top-10 md:-top-32">
                    <div className="w-full h-[215px] border border-[#E5E7EB] rounded-[7px] p-[23px] bg-[#FFFFFF] shadow-[0px_9.7px_9.7px_rgba(31,41,55,0.04),0px_19.39px_24.24px_rgba(31,41,55,0.1)]">
                        <div className="bg-[#3C91E6] shadow-[#1F293714] px-[15px] py-[11px] rounded-[7px] w-full h-[43px] flex items-center justify-center">
                            <Link href={"https://wa.me/message/PHDJAIL6RKWZC1"} target="_blank" className="md:text-[13px] text-sm text-[#FFFFFF] font-medium font-inter">Agendar Serviço</Link>
                        </div>
                        <div className="w-full flex items-center justify-between mt-[15px]">
                            <span className="text-[15px] text-[#000000] font-normal font-inter">Serviço</span>
                            <span className="text-[15px] text-[#000000] font-normal font-inter">€ 83</span>
                        </div>
                        <div className="w-full flex items-center justify-between mt-[7px]">
                            <span className="md:text-[15px] text-base text-[#000000] font-normal font-inter">Deslocação</span>
                            <span className="md:text-[15px] text-base text-[#000000] font-normal font-inter">€ 83</span>
                        </div>
                        <div className="w-full h-[1px] border border-[#E5E7EB] my-[15px]"></div>
                        <div className="w-full flex items-center justify-between mt-[7px]">
                            <span className="md:text-[15px] text-base text-[#000000] font-medium font-inter">Total</span>
                            <span className="md:text-[15px] text-base text-[#000000] font-medium font-inter">€ 701</span>
                        </div>
                    </div>
                    <div className="mt-[23px] flex items-center justify-center gap-[7px]">
                        <FlagIcon color="#6B7280" size={15} />
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="md:text-[13px] text-sm text-[#6B7280] font-normal font-inter border-b border-[#6B7280]">Denunciar</button>
                            </DialogTrigger>
                            <ReportDialog />
                        </Dialog>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex md:flex-col w-full px-[100px]">
                <div className="w-[670px] h-[1px] border border-[#E5E7EB] my-5"></div>
                <p className="w-[670px] text-base text-[#6F6F6F] font-normal font-inter mt-[32px]">
                    Nota: São utilizadas técnicas de limpeza profunda com recurso a equipamentos
                    de injecção e extracção de água. Tempo de secagem de 3 a 8 horas, dependendo das condições
                    climatéricas. A chaise longue equivale a um lugar extra.
                </p>
                <div className="w-[670] h-[1px] border border-[#E5E7EB] my-[32px]"></div>
                <div className="w-[670] h-[1px] border border-[#E5E7EB] mb-[32px]"></div>
            </div>

            <div className="mt-[70px] md:px-[100px] w-[340px] md:w-full self-center">
                <FaqsPlans />
            </div>
        </div>
    );
}
