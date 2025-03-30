import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import FormService from "../services/form";
import Image from "next/image";
import { Call, Whatsapp } from "@/app/assets/svgs";


export default function ContactUsDialog() {
    return (
        <DialogContent className="w-[340px] md:w-[653px] h-auto py-5 px-10 rounded-[10px] bg-white flex flex-col items-start justify-start">
            <DialogHeader>
                <DialogTitle className="text-[#000000] text-[15px] font-semibold font-Inter">
                    Fale Connosco
                </DialogTitle>
                <DialogDescription className="mt-[5px] text-[10px] font-normal font-Inter text-[#6F6F6F]">
                    To validate your appointment, we ask that you fill in the requested information below
                </DialogDescription>
            </DialogHeader>
            <FormService />
            <DialogFooter>
                <div className="flex flex-col gap-[10px]">
                    <strong className="font-bold font-inter text-[8px] text-[#000000] md:text-sm">Informações de Contacto:</strong>
                    <div className="flex items-center gap-[6px]">
                        <div className="flex items-center gap-[3px]">
                            <div className="h-[13px] w-[13px]">
                                <Image src={Whatsapp} alt="Play Store" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium font-inter text-xs text-[#6F6F6F]">+244 952574322</span>
                        </div>
                        <div className="flex items-center gap-[3px]">
                            <div className="h-[13px] w-[13px]">
                                <Image src={Call} alt="Play Store" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium font-inter text-xs text-[#6F6F6F]">+244 952574322</span>
                        </div>
                    </div>
                </div>
            </DialogFooter>
        </DialogContent>
    );
}
