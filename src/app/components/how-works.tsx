import { Button } from '@/components/ui/button'

export default function HowWorks() {
  return (
    <div className="w-full flex items-center flex-col pt-8 xl:flex-row px-8 mt-[180px] gap-[94px] md:px-[112px] mx-auto justify-between">
      <div className="max-w-[644px] flex flex-col gap-4 justify-center lg:justify-start">
        <h1 className="text-2xl font-medium lg:text-5xl lg:font-bold text-center lg:text-left leading-relaxed tracking-wide text-[#3D3D3D]">
          Veja como é <span className="text-primaryColor">simples cuidar</span>{' '}
          da sua casa com a Flix Home:
        </h1>
        <p className="text-base lg:text-[28px] font-yrsa text-center lg:text-left mt-4 leading-normal tracking-wide text-[#3D3D3D]">
          Agende agora e experimente a facilidade da Flix Home!
        </p>
        <div className="mt-8 mx-auto xl:ml-0">
          <Button>Agendar Serviço</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-1 p-[30px] bg-primaryColor/10 border-b border-r border-[#A7E8BD]">
          <div className="w-[60px] xl:w-[85px] h-[60px] xl:h-[85px] rounded-full bg-primaryColor justify-center items-center flex">
            <span className="text-white text-3xl xl:text-[60px] font-fredoka">
              1
            </span>
          </div>
          <span className="text-2xl xl:text-[30px] font-yrsa text-center">
            Escolha o Serviço:
          </span>
          <span className="text-lg xl:text-[30px] font-yrsa text-center text-[#3D3D3D]">
            Selecione entre limpeza, reparos, lavanderia ou organização
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 p-[30px] bg-primaryColor/10 border-b border-l border-[#A7E8BD]">
          <div className="w-[60px] xl:w-[85px] h-[60px] xl:h-[85px] rounded-full bg-primaryColor justify-center items-center flex">
            <span className="text-white text-3xl xl:text-[60px] font-fredoka">
              2
            </span>
          </div>
          <span className="text-2xl xl:text-[30px] font-yrsa text-center">
            Agende Pelo WhatsApp:
          </span>
          <span className="text-lg xl:text-[30px] font-yrsa text-center text-[#3D3D3D]">
            Informe o serviço desejado, local, data e horário (App em breve).
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 p-[30px] bg-primaryColor/10 border-t border-r border-[#A7E8BD]">
          <div className="w-[60px] xl:w-[85px] h-[60px] xl:h-[85px] rounded-full bg-primaryColor justify-center items-center flex">
            <span className="text-white text-3xl xl:text-[60px] font-fredoka">
              3
            </span>
          </div>
          <span className="text-2xl xl:text-[30px] font-yrsa text-center">
            Receba o Serviço:
          </span>
          <span className="text-lg xl:text-[30px] font-yrsa text-center text-[#3D3D3D]">
            Um profissional qualificado realizará o trabalho.
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 p-[30px] bg-primaryColor/10 border-t border-l border-[#A7E8BD]">
          <div className="w-[60px] xl:w-[85px] h-[60px] xl:h-[85px] rounded-full bg-primaryColor justify-center items-center flex">
            <span className="text-white text-3xl xl:text-[60px] font-fredoka">
              4
            </span>
          </div>
          <span className="text-2xl xl:text-[30px] font-yrsa text-center">
            Confirmar Pedido:{' '}
          </span>
          <span className="text-lg xl:text-[30px] font-yrsa text-center text-[#3D3D3D]">
            Aguardar a confirmação do pedido
          </span>
        </div>
      </div>
    </div>
  )
}
