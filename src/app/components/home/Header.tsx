"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/app/assets/svgs";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="fixed w-full shadow px-8 bg-white top-0 left-0 right-0 z-50 lg:px-[112px] h-[81px] flex flex-row justify-between items-center">
      <Link href={"/"}>
        <Image src={Logo} alt="FlixHome logo" width={140} height={41} />
      </Link>

      <button
        type="button"
        className="lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      <nav
        className={`
        lg:flex lg:flex-row lg:gap-x-[14px] lg:items-center
        ${isMenuOpen ? "flex" : "hidden"}
        flex-col absolute items-center top-[81px] lg:top-[133px] left-0 right-0
        bg-white shadow-lg lg:shadow-none
        lg:static lg:bg-transparent
        p-4 lg:p-0
      `}
      >
        <Link
          href={"https://wa.me/message/PHDJAIL6RKWZC1"}
          target="_blank"
          className="bg-[#3C91E6] md:hidden flex gap-x-1 rounded-[5px] h-full w-full px-[10px] py-3 items-center justify-center hover:bg-blue-400  text-[10px] text-[#FFFFFF] font-medium font-inter transition-all active:scale-95"
        >
          Agendar Serviço
          <ArrowRightIcon size={14} />
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsMenuOpen(false)}
          className={`text-xs md:text-base self-start font-inter font-medium md:font-semibold leading-[24px] w-full md:w-auto border-b border-[#DEE2E7] md:border-b-0  px-1 mt-[15px] md:mt-0 py-2 md:py-6 ${pathname === "/" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Início
        </Link>
        <Link
          href={"/services"}
          onClick={() => setIsMenuOpen(false)}
          className={`text-xs md:text-base self-start font-inter font-medium md:font-semibold leading-[24px] w-full md:w-auto px-1 border-b border-[#DEE2E7] md:border-b-0  mt-[15px] md:mt-0 py-2 md:py-6 ${pathname === "/services" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Serviços
        </Link>
        <Link
          href={"/plans"}
          onClick={() => setIsMenuOpen(false)}
          className={`text-xs md:text-base self-start font-inter font-medium md:font-semibold leading-[24px] w-full md:w-auto px-1 border-b border-[#DEE2E7] md:border-b-0  mt-[15px] md:mt-0 py-2 md:py-6 ${pathname === "/plans" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Planos Preventivos
        </Link>
        <Link
          href={"/about-us"}
          onClick={() => setIsMenuOpen(false)}
          className={`text-xs md:text-base self-start font-inter font-medium md:font-semibold leading-[24px] w-full md:w-auto px-1 border-b border-[#DEE2E7] md:border-b-0  mt-[15px] md:mt-0 py-2 md:py-6 ${pathname === "/about-us" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Sobre Nós
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsMenuOpen(false)}
          className={`text-xs md:text-base self-start font-inter font-medium md:font-semibold leading-[24px] w-full md:w-auto px-1 border-b border-[#DEE2E7] md:border-b-0  mt-[15px] md:mt-0 py-2 md:py-6 ${pathname === "/contacts" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Contatos
        </Link>
      </nav>
      <Link
        href={"https://wa.me/message/PHDJAIL6RKWZC1"}
        target="_blank"
        className="bg-[#3C91E6] hidden xl:flex gap-x-1 rounded-[5px] h-full w-[151px] px-[10px] py-3 items-center justify-center hover:bg-blue-400  text-sm text-[#FFFFFF] font-medium font-inter transition-all active:scale-95"
      >
        Agendar Serviço
        <ArrowRightIcon size={14} />
      </Link>
    </header>
  );
}
