import { BadgeInfoIcon, CheckCircle2, CircleXIcon } from 'lucide-react'
import React from 'react'

interface ListItemsProps {
    title: string
    subtitle?: string,
    subtitlenotinclud?: string,
    items: { title: string, subtitle?: string }[]
    itemsnotinclud: { title: string, subtitle?: string }[]
}

export default function ListItems(item: ListItemsProps) {
    return (
        <div className='w-[340px] md:w-auto'>
            <h1 className="text-xl md:text-[32px] text-[#000000] font-medium md:font-bold font-inter">{item.title}</h1>
            <div className="mt-5 md:mt-[52px]">
                <div className="flex items-center gap-[5px]">
                    <BadgeInfoIcon color="#3C91E6" size={18} />
                    <h3 className="text-[15px] text-[#000000] font-medium font-inter">{item.subtitle}</h3>
                </div>
                <ul className="mt-[15px] px-5 flex flex-col gap-[13px]">
                    {
                        item.items.map((i, key) => (
                            <li key={key} className="flex items-start gap-[10px]">
                                <CheckCircle2 color="#6F6F6F" size={18} />
                                <div className="flex flex-col">
                                    <span className="text-[13px] text-[#484848] font-semibold font-inter">{i.title}</span>
                                    <span className="text-xs text-[#6F6F6F] font-normal font-inter mt-[5px]">{i.subtitle}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="w-[340px] md:w-[395px] h-[1px] border border-[#DEE2E7] my-5"></div>
            </div>
            <div className="mt-[0px]">
                <div className="flex items-center gap-[5px]">
                    <BadgeInfoIcon color="#3C91E6" size={18} />
                    <h3 className="text-[15px] text-[#000000] font-medium font-inter">{item.subtitlenotinclud}</h3>
                </div>
                <ul className="mt-[15px] px-5 flex flex-col gap-[13px]">
                    {
                        item.itemsnotinclud.map((i, key) => (
                            <li key={key} className="flex items-start gap-[10px]">
                                <CircleXIcon color="#6F6F6F" size={18} />
                                <div className="flex flex-col">
                                    <span className="text-[13px] text-[#484848] font-semibold font-inter">{i.title}</span>
                                    <span className="text-xs text-[#6F6F6F] font-normal font-inter mt-[5px]">{i.subtitle}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
