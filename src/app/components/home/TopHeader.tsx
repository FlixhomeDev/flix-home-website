"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useLocale } from "next-intl";

export function TopHeader() {
  const pathname = usePathname();
  // const router = useRouter();
  // const locale = useLocale();

  // const handleLanguageChange = (event: any) => {
  //   const newLocale = event.target.value;
  //   router.push(`/${newLocale}${pathname}`);
  // };

  return (
    <div className={`z-50 hidden w-full fixed top-0 ${pathname === "/" ? "bg-[#3C91E6] h-10" : "bg-[#fff] h-4"} px-10 py-3 md:flex flex-row justify-between items-center mb-[4px]`}>
      <nav
        className={`w-full h-full ${pathname === "/" ? "flex" : "hidden"} items-center justify-around`}
      >
        <nav className="flex items-center gap-4">
          <Link
            href={"/"}
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            Apoio ao Cliente
          </Link>
          <Link
            href={"/services"}
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            Ajuda
          </Link>
        </nav>
        <nav className="flex items-center gap-4">
          <Link
            href={"/plans"}
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            Parceiros
          </Link>
          <Link
            href={"/about-us"}
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            Download
          </Link>
          {/* <select value={locale} onChange={handleLanguageChange} className="text-xs bg-transparent text-[#ffffff] font-inter font-normal border-none">
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select> */}
          <Link
            href={"/"}
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            PT
          </Link>
        </nav>
      </nav>
    </div>
  );
}
