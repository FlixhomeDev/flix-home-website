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
        <h1 className="font-medium font-fredoka text-xl self-center w-full lg:w-[1000px] lg:text-5xl text-primaryColor">
          Termos e Condições
        </h1>
        <h1 className="font-medium font-fredoka text-xl w-full lg:w-[1000px] lg:text-5xl text-primaryColor">
          para Profissionais da flixhome
        </h1>
        <Section title="1. Introdução">
          <p>
            Estes Termos e Condições regulam a parceria entre a flix home e os
            profissionais que prestam serviços aos clientes finais da empresa.
            Ao aderir como prestador de serviços, você concorda com os termos
            descritos abaixo.
          </p>
        </Section>

        <Section title="2. Obrigações do Profissional">
          <ul className="list-inside">
            <li>
              2.1 Qualidade do Serviço: Os profissionais devem garantir a
              prestação de serviços com excelência, assegurando que o trabalho
              seja realizado de acordo com os padrões e expectativas dos
              clientes e da flix home.
            </li>
            <li>
              2.2 Pontualidade e Compromisso: É obrigatório cumprir
              rigorosamente os horários e prazos estabelecidos para os serviços.
              Caso haja um imprevisto, o profissional deve informar a flix home
              com antecedência.
            </li>
            <li>
              2.3 Ética e Comportamento: Espera-se que os profissionais
              demonstrem comportamento ético, respeito e profissionalismo ao
              interagir com os clientes e demais parceiros da flix home.
            </li>
          </ul>
        </Section>

        <Section title="3. Política de Pagamento">
          <ul className="list-inside">
            <li>
              3.1 Comissão: A flix home retém uma comissão de [30%] sobre o
              valor de cada serviço prestado, com o restante sendo repassado ao
              profissional.
            </li>
            <li>
              3.2 Pagamento: Os pagamentos são processados
              [semanalmente/mensalmente] através da conta bancária informada
              pelo profissional no cadastro.
            </li>
            <li>
              3.3 Taxas e Despesas: Qualquer taxa bancária ou despesa
              relacionada ao processamento do pagamento será deduzida do valor
              repassado ao profissional.
            </li>
          </ul>
        </Section>
        <Section title="4. Direitos e Responsabilidades">
          <ul className="list-inside">
            <li>
              4.1 Responsabilidade por Danos: Em caso de reclamação ou danos
              causados durante a prestação de serviços, a flix home investigará
              a situação e poderá acionar o profissional para reparo,
              substituição, ou, se necessário, pagamento de uma indenização.
            </li>
            <li>
              4.2 Conformidade com Leis e Regulamentos: O profissional
              compromete-se a atuar em conformidade com todas as leis,
              regulamentos e diretrizes locais que possam se aplicar ao tipo de
              serviço que realiza.
            </li>
            <li>
              4.3 Materiais e Ferramentas: O profissional é responsável por
              providenciar as ferramentas e materiais necessários para a
              execução dos serviços.
            </li>
          </ul>
        </Section>
        <Section title="5. Confidencialidade e Proteção de Dados">
          <ul className="list-inside">
            <li>
              5.1 Privacidade do Cliente: O profissional deve garantir a
              confidencialidade das informações pessoais e dados dos clientes,
              utilizando essas informações exclusivamente para a realização do
              serviço.
            </li>
            <li>
              5.2 Proteção de Dados: Os profissionais concordam em aderir à
              política de privacidade da flix home e a cumprir com o RGPD no
              tratamento de dados pessoais.
            </li>
          </ul>
        </Section>
        <Section title="6. Avaliação e Feedback">
          <ul className="list-inside">
            <li>
              6.1 Avaliações dos Clientes: A flix home valoriza a transparência
              e, por isso, oferece aos clientes a possibilidade de avaliar o
              serviço prestado. Os profissionais podem visualizar as avaliações
              e comentários dos clientes, que serão usados para monitorar e
              melhorar a qualidade do serviço.
            </li>
            <li>
              6.2 Acompanhamento e Feedback: A flix home reserva-se o direito de
              fornecer feedback regular aos profissionais e aplicar medidas
              corretivas, se necessário, para garantir a qualidade dos serviços.
            </li>
          </ul>
        </Section>
        <Section title="7. Rescisão de Contrato">
          <ul className="list-inside">
            <li>
              7.1 Rescisão por Inadimplência: A flix home poderá rescindir a
              parceria com qualquer profissional que viole estes termos, não
              cumpra com os padrões de qualidade, ou que cause problemas
              recorrentes com clientes.
            </li>
            <li>
              7.2 Rescisão Voluntária: O profissional poderá interromper a
              parceria a qualquer momento, mediante aviso prévio de [X dias] à
              flix home.
            </li>
          </ul>
        </Section>

        <Section title="8. Atualizações nos Termos e Condições">
          <p>
            A flix home reserva-se o direito de atualizar estes Termos e
            Condições periodicamente para refletir alterações nos serviços ou
            nas regulamentações aplicáveis. Notificações serão enviadas aos
            profissionais em caso de modificações significativas.
          </p>
        </Section>
        <Section title="9. Contato e Suporte">
          <p>
            Para dúvidas ou questões sobre estes Termos e Condições, entre em
            contato com o suporte da flix home através do
          </p>
          <p>
            {" "}
            e-mail:
            <a
              href="mailto:suporte@flixhome.app"
              className="italic text-blue-500 underline ml-1"
            >
              suporte@flixhome.app
            </a>
          </p>
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
