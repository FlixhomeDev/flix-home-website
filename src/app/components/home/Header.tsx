"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo } from "../../assets/images";
import Link from "next/link";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="fixed w-full shadow px-8 bg-white top-0 left-0 right-0 z-50 lg:px-[112px] h-[81px] flex flex-row justify-between items-center">
      <Link href={"/"}>
        <Image src={logo} alt="FlixHome logo" width={140} height={41} />
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
          href={"/"}
          className={`text-base px-1 py-6 ${
            pathname === "/" && "text-primaryColor"
          }`}
        >
          Início
        </Link>
        <Link
          href={"/services"}
          className={`text-base px-1 py-6 ${
            pathname === "/#services" && "text-primaryColor"
          }`}
        >
          Serviços
        </Link>
        <Link
          href={"/"}
          className={`text-base px-1 py-6 ${
            pathname === "/#plans" && "text-primaryColor"
          }`}
        >
          Planos Preventivos
        </Link>
        <Link
          href={"/about-us"}
          className={`text-base px-1 py-6 ${
            pathname === "/about-us" && "text-primaryColor"
          }`}
        >
          Sobre Nós
        </Link>
        <Link
          href={"/"}
          className={`text-base px-1 py-6 ${
            pathname === "/#contacts" && "text-primaryColor"
          }`}
        >
          Contatos
        </Link>
      </nav>
      <Link
        href={"https://wa.me/message/PHDJAIL6RKWZC1"}
        target="_blank"
        className="bg-primaryColor max-w-full hidden xl:flex lg:w-auto lg:max-w-[196px] gap-x-1 text-white rounded-[14px] h-[46px]  lg:h-[61px] w-full justify-center px-2 items-center hover:bg-blue-400  text-sm transition-all active:scale-95"
      >
        Agendar Serviço
        <ArrowRightIcon size={14} />
      </Link>
    </header>
  );
}
