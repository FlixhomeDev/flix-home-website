'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { BookSvg } from '@/app/assets/svgs'
import { GitAmination } from '@/app/assets/icon'
import useWindowSize from '@/app/hooks/useWindowSize'

export default function HowWork() {
  const { width } = useWindowSize()

  const getAmount = () => {
    if (width < 560) return 1 // Mobile
    if (width < 768) return 2 // Mobile
    if (width < 640) return 2 // Tablet
    return 3 // Desktop
  }
  return (
    <div
      id="howWork"
      className="max-w-[1256px] :w-full mx-auto flex items-center lg:flex-row px-4 overflow-hidden justify-center gap-[82px] mt-14"
    >
      <div className="bg-primaryColor/5 justify-center items-center rounded-lg hidden lg:flex w-full h-[440px] lg:w-[339px] lg:h-[420px]">
        <Image
          src={GitAmination}
          alt="Payment"
          width={339}
          height={430}
          className="hover:scale-110 hover:rounded-lg transition-all hidden lg:flex max-h-[430px] object-contain w-full"
        />
      </div>

      <div className="flex flex-col gap-y-6 max-w-[634px] w-full">
        <div className="mx-auto lg:ml-0">
          <h2 className="text-lg lg:text-2xl font-bold text-center lg:text-left">
            Como funciona
          </h2>
          <p className="max-w-[634px] w-full text-gray-500 text-center lg:text-left text-sm lg:text-base">
            A Flix Home é uma plataforma que facilita o cuidado com a casa,
            oferecendo serviços como manutenção preventiva, reparos e limpeza
            com profissionais confiáveis e preços fixos.
          </p>
        </div>

        {/* MOBILE */}
        <Swiper
          spaceBetween={12}
          slidesPerView={getAmount()}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full flex lg:!hidden items-center gap-20"
        >
          <SwiperSlide>
            <div className="h-[137px] w-full lg:w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
              <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
              <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                Escolha o Serviço
              </h3>
              <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                De reparos a manutenções preventivas, encontre a solução ideal
                para sua casa.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[137px] w-full lg:w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
              <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
              <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                Agende Fácil
              </h3>
              <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                Marque seu atendimento rapidamente pelo WhatsApp ou app.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[137px] w-full lg:w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
              <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
              <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                Receba o Atendimento
              </h3>
              <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                Profissionais qualificados realizam o serviço com segurança e
                eficiência.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[137px] w-full lg:w-[251px] p-[15px] flex flex-col items-start gap-[7px] rounded-[5px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
              <Image src={BookSvg} alt="Book Svg" width={33} height={33} />
              <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                Evite Problemas Futuramente
              </h3>
              <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                Nossos planos preventivos ajudam a evitar gastos inesperados e
                economizar seu tempo.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* DESKTOP */}
        <div
          className="w-full hidden lg:grid grid-cols-2 gap-3 lg:overflow-hidden whitespace-nowrap overflow-x-auto lg:whitespace-normal px-4 lg:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Escolha o Serviço</h3>
            <p className="text-gray-500">
              De reparos a manutenções preventivas, encontre a solução ideal
              para sua casa.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Agende Fácil</h3>
            <p className="text-gray-500">
              Marque seu atendimento rapidamente pelo WhatsApp ou app.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Receba o Atendimento</h3>
            <p className="text-gray-500">
              Profissionais qualificados realizam o serviço com segurança e
              eficiência.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded border hover:border-primaryColor transition-all">
            <Image src={BookSvg} alt="Book Svg" width={40} height={40} />
            <h3 className="mt-3 font-bold">Evite Problemas Futuramente</h3>
            <p className="text-gray-500">
              Nossos planos preventivos ajudam a evitar gastos inesperados e
              economizar seu tempo.
            </p>
          </div>
        </div>

        <div className="md:hidden mt-[21px] flex gap-[7px] w-full h-[170px]">
          <Swiper
            spaceBetween={12}
            slidesPerView={1.3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full flex items-center gap-20"
          >
            <SwiperSlide>
              <div className="h-[137px] w-[251px] p-[15px] flex flex-col items-start gap-[7.5px] rounded-[3.75px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={30} height={30} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                  Escolha o Serviço
                </h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  De reparos a manutenções preventivas, encontre a solução ideal
                  para sua casa.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[137px] w-[251px] p-[15px] flex flex-col items-start gap-[7.5px] rounded-[3.75px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={30} height={30} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                  Agende Fácil
                </h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  Marque seu atendimento rapidamente pelo WhatsApp ou app.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[137px] w-[251px] p-[15px] flex flex-col items-start gap-[7.5px] rounded-[3.75px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={30} height={30} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                  Receba o Atendimento
                </h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  Profissionais qualificados realizam o serviço com segurança e
                  eficiência.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[137px] w-[260px] p-[15px] flex flex-col items-start gap-[7.5px] rounded-[3.75px] border border-[#DEE2E7] hover:border-[#3C91E6] transition-all">
                <Image src={BookSvg} alt="Book Svg" width={30} height={30} />
                <h3 className="text-[#000000] text-sm font-semibold font-inter leading-[16.94px]">
                  Evite Problemas Futuramente
                </h3>
                <p className="text-[#6F6F6F] text-xs font-normal font-inter leading-[14.52px]">
                  Nossos planos preventivos ajudam a evitar gastos inesperados e
                  economizar seu tempo.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
