import { MapPinned } from '@/app/assets/images'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import color from 'tailwindcss/colors'

type Props = {
  children?: React.ReactNode
}

const LOCATION = ['Porto', 'Aveiro']

export function WhereWeAre({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[400px] w-full">
        <DialogHeader>
          <DialogTitle className="hidden">
            Estamos localizados em varias zonas de Portugal
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-y-2 mx-auto pb-4" />
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Image src={MapPinned} alt="MapPinned" width={150} />
          <h4 className="text-center font-bold">
            Estamos localizados em varias zonas de Portugal
          </h4>
          <div className="flex flex-col gap-y-2 mx-auto pb-4">
            {LOCATION.map(location => (
              <span key={location} className="flex items-center gap-x-2">
                <CheckIcon color={color.blue[400]} />
                {location}
              </span>
            ))}
          </div>
          <Link
            href={'https://wa.me/message/PHDJAIL6RKWZC1'}
            target="_blank"
            className="bg-[#3C91E6] hidden xl:flex gap-x-1 rounded-[5px] w-full mt-4 h-[40px] px-[10px] py-3 items-center justify-center hover:bg-blue-400  text-sm text-[#FFFFFF] font-medium font-inter transition-all active:scale-95"
          >
            Agendar Serviço
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
