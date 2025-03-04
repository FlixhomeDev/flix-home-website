import Image from "next/image";
import Link from "next/link";
import { Logo } from "./assets/svgs";

export default function NotFound() {

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <Link href={"/"} className="w-[154px] h-[32px]">
                <Image src={Logo} alt="FlixHome logo" className="w-full h-full" />
            </Link>
            <h1 className="text-4xl font-bold font-inter text-red-600 mt-5">404 - Página não encontrada</h1>
            <p className="text-gray-600 font-medium font-inter mt-4">A página que você está procurando não existe.</p>
            <Link
                href={"/"}
                className="mt-6 px-4 py-2 bg-[#3C91E6] text-white font-medium font-inter rounded-[8px]"
            >
                Voltar para a Home
            </Link>
        </div>
    );
}
