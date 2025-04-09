"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Cookie from "js-cookie";
import { setUserLocale } from "@/services/locale";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";

export default function SelectLang() {
  const locale = useLocale();

  function onChange(value: string) {
    const locale = value as Locale;
    Cookie.set("lang", locale, { expires: 365 });
    setUserLocale(locale);
  }

  return (
    <Select onValueChange={onChange} defaultValue={locale}>
      <SelectTrigger className="bg-transparent !h-auto w-auto ring-0 text-white flex justify-center items-center gap-x-2 p-0 !outline-none border-0">
        <SelectValue
          placeholder="PT"
          className="text-xs text-white font-inter font-normal"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">PT</SelectItem>
        <SelectItem value="en">ENG</SelectItem>
        <SelectItem value="es">ES</SelectItem>
        <SelectItem value="fr">FR</SelectItem>
      </SelectContent>
    </Select>
  );
}
