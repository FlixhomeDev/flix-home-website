import Image from "next/image";
import Link from "next/link";
import { logo } from "../../assets/images";
import {
  AppleStoreSvg,
  FacebookSvg,
  InstagramSvg,
  PlayStoreSvg,
} from "../../assets/svgs";

export function Footer() {
  const socials = [
    {
      icon: FacebookSvg,
      name: "facebook",
      url: "https://www.facebook.com/flixhomeapp",
    },
    {
      icon: InstagramSvg,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/flixhome-app/",
    },
  ];

  return (
    <footer className="w-full bg-white mt-[20px] pt-16 pb-6 px-4 md:px-8 mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-[50px]">
          {/* Seção 1 - Logo e Descrição */}
          <div className="flex flex-col gap-4 lg:max-w-[270px] w-full">
            <Image src={logo} alt="FlixHome logo" width={140} height={41} />
            <p className="text-gray-600 text-[13px]">
              Simplificamos a vida das pessoas oferecendo serviços domésticos de
              qualidade com transparência e confiança.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
            {/* Seção 2 - Navegação */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Navegação</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Quem somos
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção 3 - Links Úteis */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Links Úteis</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Fale conosco
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeTY-18Zi3QxhUQv7vWsIBlIh_IsdFWgge2rusq22paNvfKbQ/viewform"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Trabalhe conosco
                  </Link>
                </li>
                <li>
                  <Link
                    // href="/terms"
                    href={"#"}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"#"}
                    // href="/politics-and-privacy"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Políticas de privacidade
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção 4 - Redes Sociais */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
              <div className="flex flex-col gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="flex items-center gap-x-2"
                  >
                    <Image src={social.icon} alt={social.name} />
                    <span className="text-black">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Seção 5 - App Platform */}
          <div className="hidden md:flex flex-col items-center mt-[27px]">
            <h3 className="font-semibold text-base text-[#3D3D3D] font-inter leading-[24px] mb-4">Indisponível</h3>
            <div className="flex lg:flex-col gap-4">
              <Link href="/" target="_blank">
                <Image src={AppleStoreSvg} alt="Apple Store" />
              </Link>

              <Link href="/" target="_blank">
                <Image src={PlayStoreSvg} alt="Play Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
