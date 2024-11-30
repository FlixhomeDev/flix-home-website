import { ArrowLeft } from "lucide-react";
import Section from "@/app/components/Section";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <header className="">
        <div className="lg:container lg:mx-auto w-full lg:w-[1000px] py-3 flex justify-start items-center">
          <a
            className="text-xl p-4 lg:mx-0 lg:p-0 lg:py-4 font-medium font-yrsa flex items-center justify-start text-gray-800"
            href="/"
          >
            {" "}
            <ArrowLeft /> Voltar
          </a>
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
        <h1 className="font-medium font-fredoka text-2xl lg:text-4xl text-primaryColor">
          Política de Privacidade da Flix Home
        </h1>
        <Section title="1. Introdução">
          <p>
            A Flix Home se compromete a proteger sua privacidade. Esta política
            explica como coletamos, usamos e protegemos suas informações
            pessoais.
          </p>
        </Section>
        <Section title="2. Informações Coletadas">
          <ul className="list-disc list-inside ml-4">
            <li>
              Informações fornecidas pelo usuário: Nome, endereço, telefone,
              e-mail, entre outros.
            </li>
            <li>
              Informações coletadas automaticamente: Dados de uso, endereço IP e
              cookies.
            </li>
          </ul>
        </Section>
        <Section title="3. Como Usamos Suas Informações">
          <ul className="list-disc list-inside ml-4">
            <li>Para realizar o agendamento e execução dos serviços.</li>
            <li>Para melhorar e personalizar sua experiência.</li>
            <li>
              Para fins de suporte ao cliente e marketing, caso autorizado.
            </li>
          </ul>
        </Section>
        <Section title="4. Compartilhamento de Informações">
          <ul className="list-disc list-inside ml-4">
            <li>
              Com parceiros prestadores de serviços, apenas quando necessário
              para a realização do serviço.
            </li>
            <li>Com autoridades legais, em conformidade com a lei.</li>
          </ul>
        </Section>
        <Section title="5. Segurança">
          <p>
            Implementamos medidas de segurança para proteger suas informações
            contra acesso não autorizado, perda ou roubo.
          </p>
        </Section>

        <Section title="6. Retenção de Dados">
          <p>
            As informações pessoais serão armazenadas apenas pelo tempo
            necessário para cumprir as finalidades descritas nesta política.
          </p>
        </Section>

        <Section title="7. Direitos do Usuário">
          <ul className="list-disc list-inside ml-4">
            <li>Acessar, corrigir ou excluir suas informações pessoais.</li>
            <li>
              Retirar o consentimento para uso de informações a qualquer
              momento.
            </li>
          </ul>
        </Section>
        <Section title="8. Alterações na Política de Privacidade">
          <p>
            Podemos atualizar esta política periodicamente. Notificaremos os
            usuários sobre alterações significativas.
          </p>
        </Section>

        <Section title="9. Contato">
          <p>
            Para dúvidas ou solicitações relacionadas à privacidade, entre em
            contato pelo e-mail oficial
          </p>
          <a
            href="mailto:privacidade@flixhome.app"
            className="italic text-blue-500 underline"
          >
            privacidade@flixhome.app
          </a>
        </Section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Flix Home. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              Sobre
            </a>
            <a href="#" className="hover:text-gray-400">
              Contato
            </a>
            <a href="#" className="hover:text-gray-400">
              Termos de Serviço
            </a>
          </div>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="ml-4 text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="ml-4 text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
