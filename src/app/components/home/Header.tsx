"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/app/assets/svgs";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="w-full shadow px-8 relative z-50 lg:px-[112px] h-[41px] flex flex-row justify-between items-center">
      <Link href={"/"} className="w-[154px] h-[32px]">
        <Image src={Logo} alt="FlixHome logo" className="w-full h-full" />
      </Link>

      <button
        type="button"
        className="lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon />
      </button>

      <nav
        className={`
        lg:flex lg:flex-row lg:gap-x-[14px] lg:items-center
        ${isMenuOpen ? "flex" : "hidden"}
        flex-col absolute items-center top-[133px] left-0 right-0
        bg-white shadow-lg lg:shadow-none
        lg:static lg:bg-transparent
        p-4 lg:p-0
      `}
      >
        <Link
          href={"/"}
          className={`text-base font-inter font-semibold px-1 py-6 ${pathname === "/" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Início
        </Link>
        <Link
          href={"/services"}
          className={`text-base font-inter font-semibold px-1 py-6 ${pathname === "/services" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Serviços
        </Link>
        <Link
          href={"/plans"}
          className={`text-base font-inter font-semibold px-1 py-6 ${pathname === "/plans" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Planos Preventivos
        </Link>
        <Link
          href={"/about-us"}
          className={`text-base font-inter font-semibold px-1 py-6 ${pathname === "/about-us" ? "text-[#3C91E6]" : "text-[#484848]"
            }`}
        >
          Sobre Nós
        </Link>
        <Link
          href={"/"}
          className={`text-base font-inter font-semibold px-1 py-6 ${pathname === "/contacts" ? "text-[#3C91E6]" : "text-[#484848]"
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
