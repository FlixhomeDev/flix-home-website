import Footer from '@/app/components/footer'
import Section from '@/app/components/Section'
import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen w-full mt-20">
      <div className="mx-4 flex flex-col items-center justify-center">
        <div>
          <h1 className="font-medium font-fredoka text-2xl lg:text-4xl text-primaryColor">
            Política de Privacidade da Flix Home
          </h1>
          <Section title="1. Introdução">
            <p>
              A Flix Home se compromete a proteger sua privacidade. Esta
              política explica como coletamos, usamos e protegemos suas
              informações pessoais.
            </p>
          </Section>
          <Section title="2. Informações Coletadas">
            <ul className="list-disc list-inside ml-4">
              <li>
                Informações fornecidas pelo usuário: Nome, endereço, telefone,
                e-mail, entre outros.
              </li>
              <li>
                Informações coletadas automaticamente: Dados de uso, endereço IP
                e cookies.
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
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  )
}
