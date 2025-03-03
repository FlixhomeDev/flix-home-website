'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'
import { BroomSvg } from '@/app/assets/svgs/broom'
import { HomeTrendUpSvg } from '@/app/assets/svgs/home-trend-up'
import { BrushSvg } from '@/app/assets/svgs/brush'
import { BuildingSvg } from '@/app/assets/svgs/building'

const buttonOptions = [
  { label: 'Limpeza' },
  { label: 'Pintura' },
  { label: 'Jardinagem' },
  { label: 'Elétrica' },
]

type Props = {
  buttonOptions?: {
    id: string
  }[]
  active: 'Limpeza' | 'Pintura' | 'Jardinagem' | 'Elétrica' | string
  setActive: React.Dispatch<
    React.SetStateAction<
      'Limpeza' | 'Pintura' | 'Jardinagem' | 'Elétrica' | string
    >
  >
}

export default function ToggleButtons({
  active = 'cleaning',
  setActive,
}: Props) {
  return (
    <div className="w-full">
      <div
        className="hidden md:flex md:justify-center justify-start items-center gap-[7px] md:gap-4 mt-[17px] md:mt-[30px] overflow-x-scroll pl-[10px] md:pl-8 whitespace-nowrap"
        style={{ scrollbarWidth: 'none' }}
      >
        {buttonOptions.map(({ label }) => (
          <Button
            key={label}
            variant={active === label ? 'default' : 'outline'}
            className={`mx-0 h-[30px] md:h-[41px] text-[9.75px] leading-[16.58px] md:text-[13px] md:leading-[21.1px] tracking-[0.5px] font-normal font-inter rounded-[7px] md:rounded-[10px] border-2 border-[#3C91E614] ${active === label ? 'text-white' : 'text-[#3C91E6]'}`}
            onClick={() => setActive(label)}
          >
            {label === 'Limpeza' && (
              <BroomSvg fill={active === label ? '#FFF' : '#4094e4'} />
            )}
            {label === 'Pintura' && (
              <HomeTrendUpSvg fill={active === label ? '#FFF' : '#4094e4'} />
            )}
            {label === 'Jardinagem' && (
              <BrushSvg fill={active === label ? '#FFF' : '#4094e4'} />
            )}
            {label === 'Elétrica' && (
              <BuildingSvg fill={active === label ? '#FFF' : '#4094e4'} />
            )}
            {label}
          </Button>
        ))}
      </div>
      <div
        className="md:hidden flex md:justify-center justify-start items-center gap-[7px] md:gap-4 mt-[17px] md:mt-[30px] overflow-x-scroll pl-[8px] md:pl-8 whitespace-nowrap"
        style={{ scrollbarWidth: 'none' }}
      >
        <Swiper
          spaceBetween={7}
          slidesPerView={2.5}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full flex items-center gap-[0px]"
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
                {label}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
