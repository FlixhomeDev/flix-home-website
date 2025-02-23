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
      className="flex md:justify-center justify-start items-center gap-4 mt-10 overflow-x-scroll md:pl-8 whitespace-nowrap"
      style={{ scrollbarWidth: 'none' }}
    >
      {buttonOptions.map(({ id, label, color }) => (
        <Button
          key={id}
          variant={active === id ? 'default' : 'outline'}
          className={`mx-0 text-[13px] font-normal font-inter ${active === id ? 'text-white' : 'text-primaryColor'}`}
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
