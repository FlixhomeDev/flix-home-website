"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const categories: string[] = [
  "Montagem",
  "Assistência técnica Eletrodomésticos",
  "Limpeza Residencial",
  "Mudanças e transporte",
  "Reparação Gerais",
  "Decoração",
  "Instalação",
  "Impermeabilização",
  "Serviço Personalizado",
  "Outros",
];
export default function FormCareers() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_m7vdbcl",
          "template_dxjlhlg",
          form.current,
          "fWoEzDovfuMGK6Mii"
        )
        .then(
          () => {
            setIsLoading(false);
          },
          () => {
            setIsLoading(false);
          }
        );
    }
  };
  return (
    <div className="flex flex-col w-full lg:w-[550px] lg:h-[509px] mt-14 lg:mr-16 items-center justify-center lg:items-start lg:justify-start">
      <div className="w-full h-full flex gap-4 flex-col items-center lg:items-center">
        <h1 className="text-start lg:text-center text-primaryColor text-4xl font-roboto font-black">
          Trabalhe Conosco
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 font-poppins"
        >
          <div className="w-[350px] flex flex-col lg:gap-2">
            <label
              htmlFor="name"
              className="text-[13px] text-labelColor font-semibold"
            >
              Nome Completo
            </label>
            <Input
              type="text"
              placeholder="Insira seu nome"
              id="name"
              name="name"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Input type="text" placeholder="Email" id="email" name="email" />
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row w-full">
            <Input
              type="text"
              placeholder="Telefone"
              id="phone"
              name="phone"
              className="lg:w-[262px]"
            />
            <Input
              type="text"
              placeholder="Telefone Alternativo"
              id="alternativePhone"
              name="alternativePhone"
              className="lg:w-[262px]"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row w-full">
            <Input
              type="text"
              placeholder="NIF"
              id="nif"
              name="nif"
              className="lg:w-[262px]"
            />
            <Select>
              <SelectTrigger className="lg:w-[262px] h-14 ">
                <SelectValue placeholder="Área de atuação" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Input
              type="text"
              placeholder="Localização (endereço)"
              id="address"
              name="address"
            />
          </div>
          <div className="w-full flex justify-center lg:items-start lg:justify-between">
            <button className="hidden lg:flex justify-center items-center bg-white text-base text-primaryColor font-medium w-[264px] h-14 rounded-lg border border-primaryColor">
              Voltar
            </button>
            <button
              disabled={isLoading}
              className="bg-primaryColor text-base text-white font-medium w-[264px] h-14 rounded-lg border border-white"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
