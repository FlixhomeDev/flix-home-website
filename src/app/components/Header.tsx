"use client";
import Image from "next/image";
import { Logo } from "../assets/svgs";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full my-4 h-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Logo"
            className="max-w-[140px] mx-auto h-auto"
          />
        </div>

        <div className="flex items-center justify-around w-[80px] md:w-[653px] h-81">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-primaryColor">
              Quem somos
            </a>
            <a href="#" className="text-gray-800 hover:text-primaryColor">
              Serviços
            </a>
            <a href="#" className="text-gray-800 hover:text-primaryColor">
              Como funciona
            </a>
          </nav>

          <a
            href="#"
            className="hidden md:inline-block bg-primaryColor w-[191px] h-61 text-lg text-center text-white px-2 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Experimente Agora
          </a>

          <button
            id="menu-toggle"
            onClick={toggleMenu}
            className="md:hidden text-gray-800 hover:text-primaryColor px-2"
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0 h-screen w-[80%] bg-white/70 md:hidden flex flex-col space-y-6 px-6 py-6 shadow-lg transform transition-transform duration-300 ease-in-out`}
        >
          <a
            href="#"
            className="text-gray-800 hover:text-primaryColor"
            onClick={closeMenu}
          >
            Quem somos
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-primaryColor"
            onClick={closeMenu}
          >
            Serviços
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-primaryColor"
            onClick={closeMenu}
          >
            Como funciona
          </a>
        </div>
      )}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
