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

export function AppointmentCard({ appointment, user }: Props) {
  return (
    <div className="flex flex-col bg-[#FFFFFF] w-full lg:max-w-[293px] h-[106px] justify-center items-center gap-[10px] py-[13px] px-[19px] rounded-[8px] border border-[#DEE2E7]">
      <div className="w-full flex items-center justify-between gap-[6px]">
        <div className="flex items-center gap-[7px]">
          <Avatar className="w-[35px] h-[35px]">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="-mb-2 text-xs text-[#000000] font-medium font-inter leading-[14.52px] tracking-[2%]">{user?.name}</h4>
            <span className="text-[7px] text-[#6F6F6F] font-medium font-inter leading-[8.47px] tracking-[2%]">{user?.location}</span>
          </div>
        </div>
        <span className="text-[8px] text-[#6F6F6F] font-normal font-inter leading-[9.68px] tracking-[2%]">1 day ago</span>
        <div className="flex gap-x-1 items-center">
          <StarSvg />
          <StarSvg />
          <StarSvg />
          <StarSvg fill="#B6B4B0" />
          <StarSvg fill="#B6B4B0" />
        </div>
      </div>
      <p className="text-xs text-[#4E4E4E] font-normal font-inter leading-[19.2px] mt-[10px]">{` “ ${appointment} ”`}</p>
    </div>
  )
}
