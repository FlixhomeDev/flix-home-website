import Image from "next/image";
import Link from "next/link";
import {
  AppleStoreSvg,
  Insta,
  Linkdin,
  PlayStoreSvg,
  WhatsappSvg,
} from "../../assets/svgs";
import { logo } from "@/app/assets/images";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();
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
    },
  ];

  return (
    <footer className="w-full bg-white mt-[20px] pt-16 pb-10 px-4 md:px-8 mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-[50px]">
          {/* Seção 1 - Logo e Descrição */}
          <div className="flex flex-col gap-4 lg:max-w-[270px] w-full mb-8 lg:mb-0">
            <Image src={logo} alt="FlixHome logo" width={140} height={41} />
            <p className="text-gray-600 text-[13px]">
              {t("Footer.description")}
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8">
            {/* Seção 2 - Navegação */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {t("Footer.second_section.title")}
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {t("Footer.second_section.first")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#howWork"
                    className="text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap"
                  >
                    {t("Footer.second_section.second")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.flixhome.app/"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {t("Footer.second_section.three")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://help.flixhome.app/"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {t("Footer.second_section.four")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {t("Footer.second_section.five")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção 3 - Links Úteis */}
            <div className="">
              <h3 className="font-semibold text-lg mb-4 whitespace-nowrap">
                {t("Footer.three_section.first")}
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href={`https://wa.me/351939936372?text=Olá+gostaria+de+falar+com+a+Flix+Home+sobre+os+serviços+para+minha+casa.`}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {t("Footer.three_section.second")}
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeTY-18Zi3QxhUQv7vWsIBlIh_IsdFWgge2rusq22paNvfKbQ/viewform"
                    className="text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap"
                  >
                    {t("Footer.three_section.three")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies-policy"
                    className="text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap"
                  >
                    {t("Footer.three_section.four")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm"
                  >
                    {t("Footer.three_section.five")}
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.livroreclamacoes.pt/Inicio/"}
                    className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm"
                  >
                    {t("Footer.three_section.six")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção 4 - Redes Sociais */}
            <div className="lg:ml-4">
              <h3 className="font-semibold text-lg mb-4 whitespace-nowrap">
                {t("Footer.social_media")}
              </h3>
              <div className="flex flex-col gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="flex items-center gap-x-2"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-600 text-sm">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Seção 5 - App Platform */}
          <div className="hidden md:flex flex-col items-center mt-[0px]">
            <h3 className="font-semibold text-lg text-[#3D3D3D] font-inter leading-[24px] mb-4">
              {t("Footer.soon")}
            </h3>
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
