'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ServiceCard } from '@/components/ServiceCard'
import ToggleButtons from '@/components/ToggleButtons'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import useWindowSize from '@/app/hooks/useWindowSize'
import { motion } from 'motion/react'

export function OurServices() {
  const [active, setActive] = useState<'Limpeza' | 'Pintura' | 'Jardinagem' | 'Elétrica' | string>('')

  const { width } = useWindowSize()

  const getAmount = () => {
    if (width < 420) return 1 // Mobile
    if (width < 560) return 2 // Mobile
    if (width < 968) return 3 // Mobile
    return 5 // Desktop
  }

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
    {
      id: '5',
      title: 'Pintura de Interior Profissional',
      oldPrice: 250.0,
      newPrice: 200.0,
      category: 'Pintura',
      image: 'https://source.unsplash.com/300x200/?painting',
    },
  ]

  const filteredServices = servicesData.filter((service) => service.category === active)
  console.log(filteredServices)


  return (
    <div className="max-w-[1256px] w-full mx-auto mt-[58px] lg:mt-[78px]">
      <div className="w-full max-w-[340px] md:max-w-[468px] mx-auto">
        <h2 className="text-center font-bold font-inter leading-[21.78px] md:leading-[29.05px] -tracking-[1.5%] text-lg md:text-2xl text-[#292D33]">
          Serviços que cuidam de tudo para você.
        </h2>
        <p className="text-center lg:text-base text-gray-500 text-sm leading-4 md:text-lg font-normal font-inter  md:leading-[21.78px] -tracking-[1.5%] mt-[5px]">
          Tudo o que você precisa para manter sua casa em ordem. Somos seu
          parceiro confiável para facilitar o dia a dia.
        </p>
      </div>

      <ToggleButtons active={active} setActive={setActive} />
      <h3 className="block md:hidden ml-[15px] mt-[27px] text-[#000000] text-[15px] font-semibold font-inter leading-[26px] tracking-[2%]">
        Promoções
      </h3>
      <div
        className="hidden md:flex items-center justify-center gap-5 mt-[27px] px-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>

      <div className="md:hidden flex items-center justify-center w-full px-5 gap-5 mt-[10px] overflow-x-hidden">
        <Swiper
          spaceBetween={12}
          slidesPerView={getAmount()}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full flex items-center gap-10"
        >
          {filteredServices.map((item, index) => (
            <SwiperSlide key={item?.id}>
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ServiceCard key={item?.id} {...item} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full justify-normal items-center mt-5 hidden md:flex">
        <div className="max-w-[712px] w-full mx-auto h-[69px] py-[14px] px-[16px] border border-[#DEE2E7] rounded-[12px] bg-[#FFFFFF] shadow-[#090B2105] flex justify-between items-center">
          <span className="text-base text-[#000000] font-medium font-inter leading-[22.4px]">
            Não encontrou o que procura?{' '}
          </span>
          <Link
            href={'/services'}
            className="text-[#3C91E6] text-xs font-medium font-inter leading-[16.94px] w-[186px] h-[41px]  flex items-center gap-[10px] px-[10px] py-3 border border-[#3C91E6] rounded-[5px]"
          >
            Ver todos os Serviços
            <ArrowRight size={14} color="#3C91E6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
