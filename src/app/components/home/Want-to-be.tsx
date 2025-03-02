import { WeTake02, WantBeImage } from "@/app/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export function WantToBe() {
  return (
    <div className="mt-10 lg:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 md:h-[257px]">
      <div className="relative">
        <div className="absolute h-[257px] top-0 left-0 right-0 bottom-0 bg-primaryColor/90" />
        <Image
          src={WeTake02}
          alt="We Take your home"
          className="h-[257px] absolute -z-10"
        />
        <div className="relative flex flex-col justify-center items-center lg:items-start px-[147px] z-50 md:h-[257px]">
          <h2 className="text-center lg:text-left text-white text-2xl font-bold">
            Queres ser um Flix?
          </h2>
          <p className="mt-2 max-w-[508px] w-full text-white text-sm md:text-base text-center lg:text-left">
            És um profissional experiente e gostavas de pertencer à equipa de
            técnicos da FlixHome? Regista-te agora!
          </p>
          <Button
            variant={"ghost"}
            className="bg-white text-primaryColor mt-5 !h-8 !text-sm !rounded active:scale-95 transition-all mx-auto lg:ml-0"
          >
            Torna-te um Flix
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <Image
        src={WantBeImage}
        alt="We Take your home"
        className="h-[257px] hidden lg:flex"
      />
    </div>
  );
}
