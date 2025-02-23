import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import FormService from "./form";


export default function ReportDialog() {
    return (
        <DialogContent className="w-[340px] md:w-[653px] h-auto py-5 px-10 rounded-[10px] bg-white flex flex-col items-start justify-start">
            <DialogHeader>
                <DialogTitle className="text-[#000000] text-[15px] font-semibold font-Inter">
                    Denunciar Serviço
                </DialogTitle>
                <DialogDescription className="mt-[5px] text-[10px] font-normal font-Inter text-[#6F6F6F]">
                    Denuncie irregularidades
                </DialogDescription>
            </DialogHeader>
            <FormService />
        </DialogContent>
    );
}
