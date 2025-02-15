'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BroomSvg } from '@/app/assets/svgs/broom'

const buttonOptions = [
  { id: 'cleaning', label: 'Cleaning', color: '#4094e4' },
  { id: 'repairs', label: 'Repairs', color: '#4094e4' },
  { id: 'gardening', label: 'Gardening', color: '#4094e4' },
  { id: 'flights', label: 'Flights', color: '#4094e4' },
]

export default function ToggleButtons() {
  const [active, setActive] = useState('cleaning')

  return (
    <div className="flex justify-center items-center gap-4">
      {buttonOptions.map(({ id, label, color }) => (
        <Button
          key={id}
          variant={active === id ? 'default' : 'outline'}
          className={`mx-0 ${active === id ? 'text-white' : 'text-primaryColor'}`}
          onClick={() => setActive(id)}
        >
          {label === 'Cleaning' && (
            <BroomSvg fill={active === id ? '#FFF' : color} />
          )}
          {label === 'Repairs' && (
            <BroomSvg fill={active === id ? '#FFF' : color} />
          )}
          {label === 'Gardening' && (
            <BroomSvg fill={active === id ? '#FFF' : color} />
          )}
          {label === 'Flights' && (
            <BroomSvg fill={active === id ? '#FFF' : color} />
          )}
          {label}
        </Button>
      ))}
    </div>
  )
}
