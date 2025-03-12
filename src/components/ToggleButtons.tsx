'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'
import { BroomSvg } from '@/app/assets/svgs/broom'
import { HomeTrendUpSvg } from '@/app/assets/svgs/home-trend-up'
import { BrushSvg } from '@/app/assets/svgs/brush'
import { BuildingSvg } from '@/app/assets/svgs/building'

const buttonOptions = [
  { id: 'Limpeza', label: 'Limpeza', color: '#4094e4' },
  { id: 'Reparações', label: 'Reparações', color: '#4094e4' },
  { id: 'Jardinagem', label: 'Jardinagem', color: '#4094e4' },
  { id: 'Repar Electro', label: 'Repar Electro', color: '#4094e4' },
  { id: 'Decoração', label: 'Decoração', color: '#4094e4' },
  { id: 'Instalação', label: 'Instalação', color: '#4094e4' },
  { id: 'Impermeabilização', label: 'Impermeabilização', color: '#4094e4' },
]

type Props = {
  active: string
  slidesPerView: number
  setActive: React.Dispatch<
    React.SetStateAction<
      | 'Limpeza'
      | 'Reparações'
      | 'Jardinagem'
      | 'Repar Electro'
      | 'Decoração'
      | 'Instalação'
      | 'Impermeabilização'
      | string
    >
  >
}

export default function ToggleButtons({
  active = 'cleaning',
  setActive,
  slidesPerView,
}: Props) {
  return (
    <div className="w-full">
      {/* <div
        className="flex md:hidden md:justify-center justify-start items-center gap-[7px] md:gap-4 mt-[17px] md:mt-[30px] overflow-x-scroll pl-[10px] md:pl-8 whitespace-nowrap"
        style={{ scrollbarWidth: 'none' }}
      >
        {buttonOptions.map(({ label }) => (
          <Button
            key={label}
            variant={active === label ? 'default' : 'outline'}
            className={`mx-0 h-[30px] md:h-[41px] hover:!text-primaryColor text-[9.75px] leading-[16.58px] md:text-[13px] md:leading-[21.1px] tracking-[0.5px] font-normal font-inter rounded-[7px] md:rounded-[10px] border-2 border-[#3C91E614] ${active === label ? 'text-white' : 'text-[#3C91E6]'}`}
            onClick={() => setActive(label)}
          >
            {label === 'Limpeza' && (
              <BroomSvg fill={active === id ? '#FFF' : color} />
            )}
            {label === 'Reparações' && (
              <HomeTrendUpSvg fill={active === id ? '#FFF' : color} />
            )}
            {label === 'Jardinagem' && (
              <BrushSvg fill={active === id ? '#FFF' : color} />
            )}
            {label === 'Reparação de Eletrodomésticos' && (
              <BuildingSvg fill={active === id ? '#FFF' : color} />
            )}
            {label === 'Decoração' && (
              <BuildingSvg fill={active === id ? '#FFF' : color} />
            )}
            {label === 'Instalação' && (
              <BuildingSvg fill={active === id ? '#FFF' : color} />
            )}
            {label === 'Impermeabilização' && (
              <BuildingSvg fill={active === id ? '#FFF' : color} />
            )}
            {label}
          </Button>
        ))}
      </div> */}
      <div
        className="flex md:justify-center justify-start items-center gap-[7px] mt-[17px] overflow-x-scroll pl-[0px] whitespace-nowrap"
        style={{ scrollbarWidth: 'none' }}
      >
        <Swiper
          spaceBetween={7.5}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          modules={[]}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full flex items-center gap-[7.5px]"
        >
          {buttonOptions.map(({ label }) => (
            <SwiperSlide key={label} className="!w-[119px]">
              <Button
                key={label}
                variant={active === label ? 'default' : 'outline'}
                className={`mx-0 w-[119px] h-[30px] md:h-[41px] text-[9.75px] leading-[16.58px] md:text-[13px] md:leading-[21.1px] tracking-[0.5px] font-normal font-inter rounded-[7px] md:rounded-[10px] border-2 border-[#3C91E614] ${active === label ? 'text-white' : 'text-[#3C91E6]'}`}
                onClick={() => setActive(label)}
              >
                {label === 'Limpeza' && (
                  <BroomSvg fill={active === label ? '#FFF' : '#4094e4'} />
                )}
                {label === 'Pintura' && (
                  <HomeTrendUpSvg
                    fill={active === label ? '#FFF' : '#4094e4'}
                  />
                )}
                {label === 'Jardinagem' && (
                  <BrushSvg fill={active === label ? '#FFF' : '#4094e4'} />
                )}
                {label === 'Elétrica' && (
                  <BuildingSvg fill={active === label ? '#FFF' : '#4094e4'} />
                )}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
