'use client'
import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ArrowRightIcon } from 'lucide-react'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/Input'

const formSchema = z.object({
    name: z.string().min(4, {
        message: 'Nome de servico deve ter no minimo 4 caracteres',
    }),
    email: z.string(),
    phone: z.string(),
    message: z.string(),
})
type FormSchema = z.infer<typeof formSchema>

export default function FormService() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    })

    const onSubmit = (data: FormSchema) => {
        console.log({ data })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-5">
                <div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#000000] text-[13px] font-medium font-Inter">
                                    Nome
                                </FormLabel>
                                <FormControl className="w-full h-[40px] border border-[#DADADA] px-4 rounded-[8px] mt-2">
                                    <Input
                                        type="text"
                                        placeholder="ex: miguel"
                                        className="placeholder:text-[#6F6F6F] placeholder:text-xs placeholder:font-normal placeholder:font-Inter placeholder:leading-[14px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-[10px] w-full">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#000000] text-[13px] font-medium font-Inter">
                                    E-mail
                                </FormLabel>
                                <FormControl className="w-full h-[40px] border border-[#DADADA] px-4 rounded-[8px] mt-2">
                                    <Input
                                        type="text"
                                        placeholder="flixhome@example.com"
                                        className="placeholder:text-[#6F6F6F] placeholder:text-xs placeholder:font-normal placeholder:font-Inter placeholder:leading-[14px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-[10px] w-full">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#000000] text-[13px] font-medium font-Inter">
                                    Telefone
                                </FormLabel>
                                <FormControl className="w-full h-[40px] border border-[#DADADA] px-4 rounded-[8px] mt-2">
                                    <Input
                                        type="text"
                                        placeholder="ex: 1200-456"
                                        className="placeholder:text-[#6F6F6F] placeholder:text-xs placeholder:font-normal placeholder:font-Inter placeholder:leading-[14px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-[10px] w-full">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#000000] text-[13px] font-medium font-Inter">
                                    Mensagem
                                </FormLabel>
                                <FormControl className="w-full h-[74px] border border-[#DADADA] px-4 rounded-[8px] mt-2">
                                    <Input
                                        type="text"
                                        placeholder="Describe your experiance"
                                        className="placeholder:text-[#6F6F6F] placeholder:text-xs placeholder:font-normal placeholder:font-Inter placeholder:leading-[14px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-[95%] flex items-center justify-end gap-[16px] mt-5">
                    <button
                        type="button"
                        className="bg-[#ffffff] text-[10px] text-[#3C91E6] border border-[#3C91E6] rounded-[5px] font-Inter font-normal w-[70px] h-[25px] mt-0"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="bg-[#4784FE] text-[10px] text-white font-Inter font-normal rounded-[5px] w-[70px] h-[25px] mt-0 flex items-center justify-center gap-2"
                    >
                        Enviar
                        <ArrowRightIcon color="#ffffff" size={5} />
                    </button>
                </div>
            </form>
        </Form>
    )
}
