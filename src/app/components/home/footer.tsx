import Image from "next/image";
import Link from "next/link";
import { AppleStoreSvg, Insta, Linkdin, Logo, PlayStoreSvg, WhatsappSvg } from "../../assets/svgs";

export function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkdin,
      url: "https://www.linkedin.com/company/flixhome-app/",
    },
    {
      name: "Instagram",
      icon: Insta,
      url: "https://instagram.com/flixhome.app",
    },
    {
      name: "Facebook",
      icon: Insta,
      url: "https://www.facebook.com/flixhomeapp",
    },
    {
      name: "⁠Whatsapp",
      icon: WhatsappSvg,
      url: "https://whatsapp.com/channel/0029VaryGtBHgZWXvSafix3I",
    }
    // {
    //   name: "Youtube",
    //   icon: YoutubeSvg,
    //   url: "https://www.youtube.com/@flixhomeapp",
    // },
    // {
    //   name: "X",
    //   icon: XSvg,
    //   url: "https://x.com/flixhomeapp",
    // },
    // {
    //   name: "Threads",
    //   icon: ThreadsSvg,
    //   url: "https://www.threads.net/@flixhome.app",
    // },
    // {
    //   name: "Pinterest",
    //   icon: PinterestSvg,
    //   url: "https://pinterest.com/flixhomeapp/",
    // },
  ];

  return (
    <footer className="w-full h-[155px] bg-[#FFFFFF] mt-[30px] mx-auto">
      <div className="container mx-auto px-[15px] md:px-[150px] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[50px]">
          {/* Seção 1 - Logo e Descrição */}
          <div className="flex flex-col gap-4 mt-[27px]">
            <div className="w-[154px] h-[32px] self-center md:self-auto">
              <Image src={Logo} alt="FlixHome logo" className="w-full h-full" />
            </div>
            <p className="text-[#3D3D3D] text-[9.75px] w-full md:text-[13px] text-center md:text-start font-normal font-inter leading-[11.8px] md:leading-[15.73px] mt-[14px]">
              Simplificamos a vida das pessoas oferecendo serviços domésticos de
              qualidade com transparência e confiança.
            </p>
          </div>

          <div className="md:hidden flex items-center gap-5 mt-0">
            <h3 className="font-semibold text-base text-[#3D3D3D] font-inter leading-[24px]">Disponível</h3>
            <div className="flex lg:flex-col gap-4">
              <Link href="/" target="_blank">
                <Image src={AppleStoreSvg} alt="Apple Store" />
              </Link>

              <Link href="/" target="_blank">
                <Image src={PlayStoreSvg} alt="Play Store" />
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-7">
            <div className="">
              <h3 className="font-semibold text-xs text-[#3D3D3D] font-inter leading-[18px] mb-4">Navegação</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/" className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900">
                    Quem somos
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900">
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção 3 - Links Úteis */}
            <div className="">
              <h3 className="font-semibold text-xs text-[#3D3D3D] font-inter leading-[18px] mb-4">Links Úteis</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/" className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900">
                    Fale conosco
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeTY-18Zi3QxhUQv7vWsIBlIh_IsdFWgge2rusq22paNvfKbQ/viewform"
                    className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900"
                  >
                    Trabalhe conosco
                  </Link>
                </li>
                <li>
                  <Link
                    // href="/terms"
                    href={"#"}
                    target="_blank"
                    className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"#"}
                    // href="/politics-and-privacy"
                    className="text-[#3D3D3D] text-[9.75px] font-medium font-inter leading-[21.45px] hover:text-gray-900"
                  >
                    Políticas de privacidade
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção 4 - Redes Sociais */}
            <div>
              <h3 className="font-semibold text-xs text-[#3D3D3D] font-inter leading-[18px] mb-4">Redes Sociais</h3>
              <div className="flex flex-col gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="flex items-center gap-x-2"
                  >
                    <div className="w-[15px] h-[14px]">
                      <Image
                        src={social.icon}
                        alt="We Take your home"
                        className="h-full w-full"
                      />
                    </div>
                    <span className="text-[#000000] text-xs font-medium font-inter leading-[21.45px]">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Seção 2 - Navegação */}
          <div className="hidden md:block mt-[20px]">
            <h3 className="font-semibold text-base text-[#3D3D3D] font-inter leading-[24px] mb-4">Navegação</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Seção 3 - Links Úteis */}
          <div className="hidden md:block mt-[20px]">
            <h3 className="font-semibold text-base text-[#3D3D3D] font-inter leading-[24px] mb-4">Links Úteis</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900">
                  Fale conosco
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeTY-18Zi3QxhUQv7vWsIBlIh_IsdFWgge2rusq22paNvfKbQ/viewform"
                  className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900"
                >
                  Trabalhe conosco
                </Link>
              </li>
              <li>
                <Link
                  // href="/terms"
                  href={"#"}
                  target="_blank"
                  className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"#"}
                  // href="/politics-and-privacy"
                  className="text-[#3D3D3D] text-[13px] font-medium font-inter leading-[28.6px] hover:text-gray-900"
                >
                  Políticas de privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Seção 4 - Redes Sociais */}
          <div className="hidden md:block mt-[20px]">
            <h3 className="font-semibold text-base text-[#3D3D3D] font-inter leading-[24px] mb-4">Redes Sociais</h3>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <div className="w-[15px] h-[14px]">
                    <Image
                      src={social.icon}
                      alt="We Take your home"
                      className="h-full w-full"
                    />
                  </div>
                  <span className="text-[#000000] text-sm font-medium font-inter leading-[16.8px]">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Seção 5 - App Platform */}
          <div className="hidden md:flex flex-col items-center mt-[27px]">
            <h3 className="font-semibold text-base text-[#3D3D3D] font-inter leading-[24px] mb-4">Disponível</h3>
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
