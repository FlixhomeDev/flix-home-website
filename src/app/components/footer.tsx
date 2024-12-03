import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'
import { logo } from '../assets/images'

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-[180px] pt-16 border-t border-secondaryColor">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  href={'#'}
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={'#'}
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
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/flixhomeapp"
                target="_blank"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              >
                <FaFacebookF size={20} />
              </Link>
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
                href="/"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              >
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-200 mt-12 pt-8 text-center pb-8 bg-secondaryColor/20 flex justify-center items-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} FlixHome. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
