'use client'

import { Button } from '@/components/ui/button'
import { BroomSvg } from '@/app/assets/svgs/broom'
import { HomeTrendUpSvg } from '@/app/assets/svgs/home-trend-up'
import { BrushSvg } from '@/app/assets/svgs/brush'
import { BuildingSvg } from '@/app/assets/svgs/building'

const buttonOptions = [
  { id: 'cleaning', label: 'Cleaning', color: '#4094e4' },
  { id: 'repairs', label: 'Repairs', color: '#4094e4' },
  { id: 'gardening', label: 'Gardening', color: '#4094e4' },
  { id: 'flights', label: 'Flights', color: '#4094e4' },
]

type Props = {
  active: string
  setActive: React.Dispatch<
    React.SetStateAction<
      'cleaning' | 'repairs' | 'gardening' | 'flights' | string
    >
  >
}

export default function ToggleButtons({ active, setActive }: Props) {
  return (
    <div
      className="flex md:justify-center justify-start items-center gap-[7px] md:gap-4 mt-[17px] md:mt-[30px] overflow-x-scroll pl-[10px] bg-red-400 md:pl-8 whitespace-nowrap"
      style={{ scrollbarWidth: 'none' }}
    >
      {buttonOptions.map(({ id, label, color }) => (
        <Button
          key={id}
          variant={active === id ? 'default' : 'outline'}
          className={`mx-0 h-[30px] md:h-[41px] text-[9.75px] leading-[16.58px] md:text-[13px] md:leading-[21.1px] tracking-[0.5px] font-normal font-inter rounded-[7px] md:rounded-[10px] border-2 border-[#3C91E614] ${active === id ? 'text-white' : 'text-[#3C91E6]'}`}
          onClick={() => setActive(id)}
        >
          {label === 'Cleaning' && (
            <BroomSvg fill={active === id ? '#FFF' : color} />
          )}
          {label === 'Repairs' && (
            <HomeTrendUpSvg fill={active === id ? '#FFF' : color} />
          )}
          {label === 'Gardening' && (
            <BrushSvg fill={active === id ? '#FFF' : color} />
          )}
          {label === 'Flights' && (
            <BuildingSvg fill={active === id ? '#FFF' : color} />
          )}
          {label}
        </Button>
      ))}
    </div>
  )
}
