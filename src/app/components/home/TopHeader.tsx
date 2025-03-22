'use client'
import Link from 'next/link'
import SelectLang from './SelectLang'
// import { useLocale } from "next-intl";

export function TopHeader() {
  return (
    <div
      className={
        'z-50 w-full flex fixed top-0 bg-primaryColor px-10 py-3 md:flex flex-row justify-between items-center'
      }
    >
      <nav className={'w-full h-full flex items-center justify-around'}>
        <nav className="flex items-center gap-4">
          <Link
            href={'/'}
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            Apoio ao Cliente
          </Link>
          <Link
            href={'/services'}
            className={`text-xs text-[#ffffff] font-inter font-normal"
            }`}
          >
            Torna-te um parceiro 
          </Link>
        </nav>
        <nav className="flex items-center gap-4">
          {/* <select value={locale} onChange={handleLanguageChange} className="text-xs bg-transparent text-[#ffffff] font-inter font-normal border-none">
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select> */}
          <SelectLang />
        </nav>
      </nav>
    </div>
  )
}
