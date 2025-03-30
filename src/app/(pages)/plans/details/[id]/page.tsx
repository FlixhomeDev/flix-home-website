'use client'
import React from 'react'
import {
  BadgeInfoIcon,
  CheckCircle2,
  ArrowRightIcon,
  CircleXIcon,
} from 'lucide-react'
import Image from 'next/image'
import { ImagePlans } from '@/app/assets/images'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'
import FaqsPlans from '@/app/components/plans/Faqs'
import { useParams } from 'next/navigation'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import ContactUsDialog from '@/app/components/plans/contactus-dialog'
import { dataPlans } from './data'

export default function Details() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="flex flex-col mt-28">
      <div className="hidden md:block bg-[#3C91E6] w-full h-[10px]" />
      {dataPlans
        .filter(i => i.id === id)
        .map(item => (
          <section
            key={item.id}
            className="ml-0 w-full px-[15px] md:max-w-full self-center md:self-start md:px-[50px] mt-10 md:mt-[51px]"
          >
            <div className="hidden w-[126px] h-[36px] py-[9px] px-[13px] rounded-[8px] bg-[#3C91E6] md:flex items-center justify-center">
              <span className="text-xs text-[#FFFFFF] font-medium font-inter line-clamp-1">
                {item.plan}
              </span>
            </div>
            <div className="mt-0 md:mt-[10px] flex flex-col">
              <h1 className="text-base md:text-[32px] text-[#000000] font-bold font-inter mt-0 md:mt-[10px]">
                {item.title}
              </h1>
              <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full" id="resumo">
                  <div className="mt-10 md:mt-[52px]">
                    <div className="flex items-center gap-[5px]">
                      <BadgeInfoIcon color="#3C91E6" size={18} />
                      <h3 className="text-[15px] text-[#000000] font-medium font-inter">
                        O que está Incluído
                      </h3>
                    </div>
                    <ul className="mt-[15px] px-5 flex flex-col gap-[13px]">
                      {item.items.map(item => (
                        <li
                          key={item.subtitle}
                          className="flex items-start gap-[10px]"
                        >
                          <CheckCircle2 color="#6F6F6F" size={18} />
                          <div className="flex flex-col">
                            <span className="text-[13px] text-[#484848] font-semibold font-inter">
                              {item.title}
                            </span>
                            <span className="text-xs text-[#6F6F6F] font-normal font-inter mt-[5px]">
                              {/* {item.subtitle} */}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="w-full md:w-[395px] h-[1px] border border-[#DEE2E7] my-5" />
                    <div className="flex items-center gap-[5px]">
                      <BadgeInfoIcon color="#3C91E6" size={18} />
                      <h3 className="text-[15px] text-[#000000] font-medium font-inter">
                        O que não está Incluído
                      </h3>
                    </div>
                    <ul className="mt-[15px] px-5 flex flex-col gap-[13px]">
                      {item.itemsnotinclud.map(item => (
                        <li
                          key={item.subtitle}
                          className="flex items-start gap-[10px]"
                        >
                          <CircleXIcon color="#6F6F6F" size={18} />
                          <div className="flex flex-col">
                            <span className="text-[13px] text-[#484848] font-semibold font-inter">
                              {item.title}
                            </span>
                            <span className="text-xs text-[#6F6F6F] font-normal font-inter mt-[5px]">
                              {/* {item.subtitle} */}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="w-full md:w-[670px] h-[1px] border border-[#E5E7EB] my-5" />
                    <p className="text-[13px] md:text-base text-[#6F6F6F] font-normal font-inter mt-[32px]">
                      Nota: São utilizadas técnicas de limpeza profunda com
                      recurso a equipamentos de injecção e extracção de água.
                      Tempo de secagem de 3 a 8 horas, dependendo das condições
                      climatéricas. A chaise longue equivale a um lugar extra.
                    </p>
                    <div className="hidden md:block w-full md:w-[670px] h-[1px] border border-[#E5E7EB] my-[32px]" />
                    <div className="hidden md:block w-full md:w-[670px] h-[1px] border border-[#E5E7EB] mb-[32px]" />
                  </div>
                </div>
                <div className="shadow h-auto md:w-[440px] mt-10 rounded-lg flex flex-col justify-center items-start md:h-[480px] p-4">
                  <div className="w-full md:w-[400px] h-[152px] bg-[#000000] bg-opacity-45 rounded-t-[10px]">
                    <Image
                      src={ImagePlans}
                      alt="Casal relaxando no sofá"
                      className="w-full h-full object-cover rounded-t-[10px]"
                    />
                  </div>
                  <div className="flex items-center gap-[10px] mt-5 mx-5">
                    <div className="px-4 h-[36px] bg-primaryColor py-[9px] flex items-center justify-center rounded-[8px] text-xs text-[#FFFFFF] font-medium font-inter">
                      {item.plan}
                    </div>
                    <h3 className="text-base md:text-2xl ml-4 text-[#3C91E6] font-bold font-inter">
                      {item.plan === 'Freemium' ? '' : `€${item.priceByMonth}`}
                    </h3>
                    <span className="text-xs md:text-base text-[#3C91E6] font-medium font-inter">
                      {item.plan === 'Freemium' ? 'Gratuito' : 'por / mês'}
                    </span>
                  </div>
                  <div className="mt-[10px] mx-5 flex items-center gap-[3px]">
                    <h2 className="text-xs md:text-base text-[#6F6F6F] font-bold font-inter">
                      {item.plan !== 'Freemium' && `€ ${item.priceByYear}`}
                    </h2>
                    <span className="text-xs md:text-base text-[#6F6F6F] font-medium font-inter">
                      {item.plan === 'Freemium' ? '' : '/Ano'}
                    </span>
                  </div>
                  <p className="mx-5 mt-[10px] text-[#6F6F6F] text-sm md:text-lg font-normal font-inter">
                    Sempre enviaremos um lembrete antes da data de renovação,
                    que incluirá quaisquer alterações no seu preço.
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="mt-4 w-full bg-primaryColor h-[40px] rounded flex justify-center items-center text-white"
                  >
                    Aderir plano
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[32px] flex flex-col">
              <h3 className="text-lg md:text-2xl text-[#292D33] font-bold font-inter text-center">
                Legibilidade
              </h3>
              <p className="self-center text-sm md:text-lg text-[#6F6F6F] leading-[21px] tracking-[-1.5%] font-normal font-inter mt-[5px] w-full md:w-[450px] text-center">
                Tudo o que você precisa para manter sua casa em ordem. Somos seu
                parceiro confiável para facilitar o dia a dia.
              </p>
            </div>
          </section>
        ))}

      <div className="mt-[40px] w-full px-[15px] md:w-[620px] xl:w-[1920px] md:max-w-full md:px-10 flex flex-col md:flex-row items-center xl:justify-between self-center md:self-start gap-[40px] md:gap-2">
        <div className="flex items-center w-full h-[136px] md:w-[620px] md:h-auto gap-2">
          <div className="h-[92px] w-[74px]">
            <InfoIcon color="#3C91E6" className="w-full h-full" />
          </div>
          <div className="text-[#6F6F6F] font-inter flex flex-col h-full w-full md:w-[540px] space-y-1 pr-5">
            <span className="font-bold text-sm md:text-xl leading-6 tracking-[-1.5%]">
              Primeiro, verifique se você é elegível - este plano é apenas para
              proprietários de imóveis
            </span>
            <span className="font-normal text-sm md:text-lg leading-[21px] tracking-[-1.5%]">
              Casas móveis, casas de parque, instalações comerciais,
              propriedades de conselhos e associações habitacionais não são
              elegíveis para este plano.
            </span>
          </div>
        </div>
        <div className="flex items-center w-full md:w-[530px] h-[136px] md:h-[143px] gap-2">
          <div className="h-[92px] w-[74px]">
            <InfoIcon color="#3C91E6" className="w-full h-full" />
          </div>
          <div className="text-[#6F6F6F] font-inter flex flex-col h-full w-full md:w-[450px] xl:w-[470px] space-y-4 pr-5">
            <span className="font-bold text-sm md:text-xl leading-6 tracking-[-1.5%]">
              Não se esqueça de ler os documentos do plano
            </span>
            <span className="font-normal text-sm md:text-lg leading-[21px] tracking-[-1.5%]">
              É importante que você leia o{' '}
              <Link
                href={'#resumo'}
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('resumo')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-[#3C91E6]"
              >
                Resumo do Plano
              </Link>{' '}
              e os{' '}
              <Link href={'#'} className="text-[#3C91E6]">
                Termos e Condições
              </Link>{' '}
              antes de contratar o plano.
            </span>
          </div>
        </div>
      </div>
      <div className="w-[150px] h-[41px] mt-10 bg-[#3C91E6] self-center flex items-center gap-[10px] py-[12px] px-[10px] rounded-[5px]">
        <Link
          href={'https://wa.me/message/PHDJAIL6RKWZC1'}
          target="_blank"
          className="text-sm text-[#FFFFFF] font-medium font-inter"
        >
          Aderir o plano
        </Link>
        <ArrowRightIcon color="#FFFFFF" size={12} />
      </div>
      <div className="mt-[70px] md:px-10 w-full px-[15px] md:w-full self-center md:max-w-full">
        <FaqsPlans />
      </div>
      <div className="hidden w-[712px] h-[69px] mt-[29px] self-center border border-[#DEE2E7] rounded-[12px] py-[14px] px-[16px] md:flex items-center gap-[16px]">
        <span className="w-[502px] text-base text-[#000000] font-medium font-inter">
          Não encontrou o que procura?{' '}
        </span>
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="w-[170px] h-[41px] border border-[#3C91E6] rounded-[5px] py-3 px-[10px] flex items-center gap-[10px] text-sm text-[#3C91E6] font-medium font-inter"
            >
              Entre em contacto
              <ArrowRightIcon color="#3C91E6" size={9} />
            </button>
          </DialogTrigger>
          <ContactUsDialog />
        </Dialog>
      </div>
    </div>
  )
}
