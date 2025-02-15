'use client'
import React, { useState } from 'react'

import { Input } from '@/components/ui/Input'
import { SearchIcon } from 'lucide-react'
import ToggleButtons from '@/components/ToggleButtons'
import { ServiceCard } from '@/components/ServiceCard'
import BreadcrumbBar from '@/components/Breadcrumb'

export default function Services() {
  const servicesData = [
    {
      id: '1',
      title: 'Serviço de Jardinagem Vida Verde',
      oldPrice: 129.99,
      newPrice: 99.5,
      category: 'Jardinagem',
      image: 'https://source.unsplash.com/300x200/?gardening',
    },
    {
      id: '2',
      title: 'Limpeza Residencial Completa',
      oldPrice: 150.0,
      newPrice: 120.0,
      category: 'Limpeza',
      image: 'https://source.unsplash.com/300x200/?cleaning',
    },
    {
      id: '3',
      title: 'Manutenção Elétrica Residencial',
      oldPrice: 180.0,
      newPrice: 150.75,
      category: 'Elétrica',
      image: 'https://source.unsplash.com/300x200/?electrician',
    },
    {
      id: '4',
      title: 'Pintura de Interior Profissional',
      oldPrice: 250.0,
      newPrice: 200.0,
      category: 'Pintura',
      image: 'https://source.unsplash.com/300x200/?painting',
    },
  ]
  const [active, setActive] = useState('cleaning')
  return (
    <div className="px-4 md:px-8">
      <div className="max-w-[1256px] w-full mx-auto mt-[100px]">
        <div className="mb-4">
          <BreadcrumbBar
            items={[
              { label: 'Serviços', href: '/services' },
              { label: 'Todos' }, // Último item sem href (BreadcrumbPage)
            ]}
          />
        </div>
        <span className="text-primaryColor">Serviços</span>
        <h2 className="text-lg md:text-2xl font-bold">
          Serviços que cuidam de tudo para você.
        </h2>

        <div className="max-w-[714px] mx-auto mt-8 flex flex-col">
          <label htmlFor="services">Que serviço deseja?</label>
          <div className="flex items-center w-full gap-x-2 mt-2 border px-3 py-1 h-14 rounded-md">
            <label htmlFor="services">
              <SearchIcon color="#6F6F6F" size={18} />
            </label>
            <Input
              id="services"
              placeholder="ex: limpeza de casa"
              className="flex-1 border-0 outline-none ring-0 h-full"
            />
          </div>
        </div>

        <div className="max-w-[714px] mx-auto mt-8 ">
          <ToggleButtons active={active} setActive={setActive} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-4 px-4 md:px-8 mt-8">
          {servicesData.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}
