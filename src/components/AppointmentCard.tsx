import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { StarSvg } from '@/app/assets/svgs/star'

type Props = {
  user?: {
    name?: string
    location?: string
    avatar?: string
  }
  createdAt?: string
  appointment?: string
  rating?: number
}

export function AppointmentCard({ appointment, createdAt, user }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[428px] justify-center items-center py-3 px-3 rounded-md border">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="-mb-2 text-sm">{user?.name}</h4>
            <span className="text-xs text-gray-400">{user?.location}</span>
          </div>
        </div>
        <span className="text-xs text-gray-400">{createdAt}</span>
        <div className="flex gap-x-1 items-center">
          <StarSvg />
          <StarSvg />
          <StarSvg />
          <StarSvg fill="#B6B4B0" />
          <StarSvg fill="#B6B4B0" />
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-3">{appointment}</p>
    </div>
  )
}
