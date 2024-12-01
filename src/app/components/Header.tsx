'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { logo } from '../assets/images'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full px-8 relative z-50 lg:px-[112px] mt-[52px] h-[81px] flex flex-row justify-between items-center mx-auto">
      <Link href={'/'}>
        <Image src={logo} alt="FlixHome logo" width={140} height={41} />
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
        ${isMenuOpen ? 'flex' : 'hidden'}
        flex-col absolute items-center top-[133px] left-0 right-0
        bg-white shadow-lg lg:shadow-none
        lg:static lg:bg-transparent
        p-4 lg:p-0
      `}
      >
        <Link href={'/about'} className="text-lg px-5 py-6">
          Quem somos
        </Link>
        <Link href={'#services'} className="text-lg px-5 py-6">
          Serviços
        </Link>
        <Link href={'#how-work'} className="text-lg px-5 py-6">
          Como funciona
        </Link>
        <Button variant={'default'} className="max-w-[196px]">
          Experimente Agora
        </Button>
      </nav>
    </header>
  )
}
