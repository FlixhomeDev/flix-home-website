<<<<<<< HEAD:src/app/components/home/footer.tsx
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '../../assets/images'
import { AppleStoreSvg, PlayStoreSvg } from '../../assets/svgs'

export function Footer() {
  const socials = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/flixhomeapp',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/flixhome-app/',
    },
    {
      name: 'Whatsapp',
      url: '/',
    },
  ]
=======
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { logo } from "../assets/images";
>>>>>>> main:src/app/components/footer.tsx

  return (
<<<<<<< HEAD:src/app/components/home/footer.tsx
    <footer className="w-full bg-white mt-[180px] pt-16 border-t border-secondaryColor pb-6 px-4 md:px-8 mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
=======
    <footer className="w-full bg-white mt-[180px] pt-16 border-t border-secondaryColor">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> main:src/app/components/footer.tsx
          {/* Seção 1 - Logo e Descrição */}
          <div className="flex flex-col gap-4">
            <Image src={logo} alt="FlixHome logo" width={140} height={41} />
            <p className="text-gray-600 text-sm">
              Simplificamos a vida das pessoas oferecendo serviços domésticos de
              qualidade com transparência e confiança.
            </p>
          </div>

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
              {socials.map(social => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <span className="w-2 h-2 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors" />
                  <span className="text-black">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Seção 5 - App Platform */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4 text-left">Disponível</h3>
            <div className="flex lg:flex-col gap-4">
              <Link href="/" target="_blank">
                <Image src={AppleStoreSvg} alt="Apple Store" />
              </Link>
<<<<<<< HEAD:src/app/components/home/footer.tsx

              <Link href="/" target="_blank">
                <Image src={PlayStoreSvg} alt="Play Store" />
=======
              <Link
                href="https://www.linkedin.com/company/flixhome-app/"
                target="_blank"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/flixhome.app/"
                target="_blank"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                target="_blank"
                href="https://whatsapp.com/channel/0029VaryGtBHgZWXvSafix3I"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              >
                <FaWhatsapp size={20} />
>>>>>>> main:src/app/components/footer.tsx
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
