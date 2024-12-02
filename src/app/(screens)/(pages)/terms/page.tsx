import { ArrowLeft } from 'lucide-react'
import Section from '@/app/components/Section'
import Link from 'next/link'
import Footer from '@/app/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <header className="">
        <div className="lg:container lg:mx-auto w-full lg:w-[1000px] py-3 flex justify-start items-center">
          <Link
            className="text-xl p-4 lg:mx-0 lg:p-0 lg:py-4 font-medium font-yrsa flex items-center justify-start text-gray-800"
            href="/"
          >
            {' '}
            <ArrowLeft /> Voltar
          </Link>
        </div>
      </header>

      <main className="mx-4 flex flex-col items-center justify-center">
        <h1 className="font-medium font-fredoka text-xl lg:text-5xl self-center w-full lg:w-[1000px] text-primaryColor">
          Termos de Uso da Flix Home
        </h1>
        <Section title="1. Introdução">
          <p>
            Bem-vindo à Flix Home! Estes Termos de Uso regulamentam o acesso e
            uso dos serviços oferecidos pela Flix Home, incluindo nosso site,
            aplicativo e quaisquer serviços associados. Ao utilizar nossos
            serviços, você concorda com estes termos.
          </p>
        </Section>

        <Section title="2. Definições">
          <ul className="list-disc list-inside ml-4">
            <li>
              Usuário: Qualquer pessoa que utilize os serviços da Flix Home.
            </li>
            <li>
              Parceiros/Prestadores de Serviços: Profissionais cadastrados na
              plataforma para oferecer serviços aos usuários finais.
            </li>
            <li>
              Serviços: Inclui, mas não se limita a, limpeza, reparos,
              organização e lavanderia.
            </li>
          </ul>
        </Section>

        <Section title="3. Escopo do Serviço">
          <p>
            A Flix Home conecta os usuários aos profissionais qualificados para
            a realização de serviços residenciais. Os serviços são realizados
            diretamente pelos parceiros, que são independentes e não são
            empregados da Flix Home.
          </p>
        </Section>
        <Section title="4. Responsabilidades do Usuário">
          <ul className="list-disc list-inside ml-4">
            <li>
              Garantir que as informações fornecidas no agendamento estejam
              corretas.
            </li>
            <li>
              Disponibilizar acesso ao local onde o serviço será realizado.
            </li>
            <li>Efetuar os pagamentos conforme combinado.</li>
          </ul>
        </Section>
        <Section title="5. Responsabilidades da Flix Home">
          <ul className="list-disc list-inside ml-4">
            <li>
              Garantir que os parceiros sejam qualificados e cadastrados de
              acordo com os padrões da empresa.
            </li>
            <li>
              Oferecer suporte ao cliente em caso de dúvidas ou problemas com o
              serviço.
            </li>
          </ul>
        </Section>
        <Section title="6. Taxas e Pagamentos">
          <ul className="list-disc list-inside ml-4">
            <li>
              Os valores cobrados pelos serviços são fixos e previamente
              informados.
            </li>
            <li>
              A Flix Home retém 25% do valor pago como taxa de serviço pelos
              parceiros.
            </li>
          </ul>
        </Section>
        <Section title="7. Cancelamento e Reembolso">
          <ul className="list-disc list-inside ml-4">
            <li>
              Cancelamentos devem ser feitos com, no mínimo, 24 horas de
              antecedência.
            </li>
            <li>
              Reembolsos podem ser emitidos em caso de cancelamentos ou falhas
              comprovadas no serviço.
            </li>
          </ul>
        </Section>
        <Section title="8. Propriedade Intelectual">
          <p>
            Todos os direitos sobre o site, aplicativo e materiais relacionados
            são de propriedade da Flix Home.
          </p>
        </Section>
        <Section title="9. Alterações nos Termos">
          <p>
            A Flix Home reserva-se o direito de alterar os Termos de Uso a
            qualquer momento. Notificaremos os usuários sobre alterações
            significativas.
          </p>
        </Section>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  )
}
