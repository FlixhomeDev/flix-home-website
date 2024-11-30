'use client'

import React, { useState } from 'react'
import Avatar from './avatar'
import Image from 'next/image'
import { DotSvg } from '../assets/svgs'

interface Testimonial {
  id: number
  name: string
  role: string
  image: string | null
  text: string
  createdAt: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Proprietário',
    image: '/avatars/avatar1.png',
    text: 'Incrível como o FlixHome facilitou a gestão do meu imóvel. Recomendo fortemente!',
    createdAt: '3',
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Inquilina',
    image: '/avatars/avatar2.png',
    text: 'Interface intuitiva e suporte excepcional. Simplificou muito minha vida!',
    createdAt: '3',
  },
  {
    id: 3,
    name: 'Pedro Costa',
    role: 'Corretor',
    image: '/avatars/avatar3.png',
    text: 'Ferramenta essencial para qualquer profissional imobiliário. Muito satisfeito!',
    createdAt: '3',
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    role: 'Proprietária',
    image: '/avatars/avatar4.png',
    text: 'Gestão de múltiplos imóveis sem dor de cabeça. Excelente plataforma!',
    createdAt: '3',
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    role: 'Investidor',
    image: '/avatars/avatar5.png',
    text: 'O FlixHome revolucionou a forma como gerencio meus investimentos imobiliários.',
    createdAt: '3',
  },
  {
    id: 6,
    name: 'Lucia Ferreira',
    role: 'Síndica',
    image: '/avatars/avatar6.png',
    text: 'Controle total e transparência na gestão. Recomendo para todos os síndicos!',
    createdAt: '3',
  },
  {
    id: 7,
    name: 'Roberto Almeida',
    role: 'Administrador',
    image: '/avatars/avatar7.png',
    text: 'A melhor solução para gestão de propriedades que já utilizei. Simplesmente perfeita!',
    createdAt: '3',
  },
  {
    id: 8,
    name: 'Patricia Lima',
    role: 'Corretora',
    image: '/avatars/avatar8.png',
    text: 'Fechamento de contratos muito mais ágil. Meus clientes adoram a praticidade!',
    createdAt: '3',
  },
  {
    id: 9,
    name: 'Fernando Gomes',
    role: 'Investidor',
    image: '/avatars/avatar9.png',
    text: 'Consigo acompanhar todos os meus investimentos em um só lugar. Fantástico!',
    createdAt: '3',
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(testimonials.length / 3)

  const getCurrentSlideTestimonials = () => {
    const start = currentSlide * 3
    return testimonials.slice(start, start + 3)
  }

  return (
    <section className="w-full bg-[#3C91E6] py-16 overflow-hidden mt-[180px]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Depoimentos de <span className="text-secondaryColor">clientes</span>
        </h2>
        <p className="text-white text-2xl font-yrsa text-center">
          Veja o que nossos clientes dizem sobre a experiência com a Flix Home.
        </p>
        <p className="text-white text-2xl font-yrsa font-bold text-center mt-4">
          Mais de 5 mil avaliações
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[78px]">
          {getCurrentSlideTestimonials().map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 h-full"
            >
              <div className="flex items-start gap-4">
                <Image src={DotSvg} alt="DotSvg" />
                <p className="text-gray-700 font-yrsa leading-tight text-2xl">
                  {`"${testimonial.text}"`}
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4 mx-auto justify-center">
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  size={48}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 text-right">
                Há 2 {testimonial.createdAt} semanas
              </p>
            </div>
          ))}
        </div>

        {/* Dots de navegação */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[30px] h-3 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
