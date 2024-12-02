import Link from 'next/link'

export default function StartNow() {
  return (
    <div className="w-full flex items-center justify-center flex-col  pt-8 lg:flex-row px-8 mt-20 lg:mt-[180px] gap-[94px] md:px-[112px] mx-auto">
      <div className="max-w-[644px] flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-medium lg:text-5xl lg:font-bold text-center lg:text-left leading-normal tracking-wide text-[#3D3D3D]">
          Comece <span className="text-secondaryColor">agora mesmo!</span>
        </h1>
        <p className="text-lg lg:text-[28px] font-yrsa text-center mt-4 leading-normal tracking-wide text-[#3D3D3D]">
          A Flix Home é mais do que uma plataforma de serviços domésticos –
          somos seu parceiro confiável para facilitar o dia a dia.
        </p>
        <div className="mt-11">
          <Link
            href={'https://wa.me/message/PHDJAIL6RKWZC1'}
            target="_blank"
            className="bg-primaryColor max-w-full lg:w-auto lg:max-w-[196px] text-white rounded-[14px] mx-auto xl:ml-0 h-[46px]  lg:h-[61px] w-full justify-center px-6 flex items-center hover:bg-blue-400 transition-all active:scale-95"
          >
            Experimente Agora
          </Link>
        </div>
      </div>
    </div>
  )
}
