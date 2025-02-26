"use client";
import React from "react";
import Link from "next/link";

export function TopHeader() {

  return (
    <div className="hidden w-full fixed top-0 bg-[#3C91E6] px-10 py-3 h-[40px] md:flex flex-row justify-between items-center mb-[4px]">
      <nav
        className="w-full h-full flex items-center justify-around"
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
