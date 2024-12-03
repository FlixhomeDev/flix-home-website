"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "../assets/svgs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="w-full px-8 fixed top-0 z-50 bg-white lg:px-[112px] h-[81px] flex flex-row justify-between items-center">
      <Link href={"/"}>
        <Image src={Logo} alt="FlixHome logo" width={140} height={41} />
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
      flex-col absolute items-center top-[81px] left-0 right-0
      bg-white shadow-lg lg:shadow-none
      lg:static lg:bg-transparent
      p-4 lg:p-0
    `}
      >
        <Link
          href={"#"}
          className={`text-lg font-normal font-fredoka px-5 py-6 ${
            pathname === "/about" && "text-primaryColor"
          }`}
        >
          Quem somos
        </Link>
        <Link
          href={"#"}
          className={`text-lg font-normal font-fredoka px-5 py-6 ${
            pathname === "/our-services" && "text-primaryColor"
          }`}
        >
          Serviços
        </Link>
        <Link
          href={"#how-work"}
          className="text-lg font-normal font-fredoka px-5 py-6"
        >
          Como funciona
        </Link>
        <Link
          href={"https://wa.me/message/PHDJAIL6RKWZC1"}
          target="_blank"
          className="bg-primaryColor max-w-full lg:w-auto lg:max-w-[196px] text-white rounded-[14px] mx-auto xl:ml-0 h-[46px]  lg:h-[61px] w-full justify-center px-6 flex items-center hover:bg-blue-400 transition-all active:scale-95"
        >
          Experimente Agora
        </Link>
      </nav>
    </header>
  );
}
