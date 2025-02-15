import { Button } from '@/components/ui/button'
import React from 'react'

export default function StartNow() {
  return (
    <div className="w-full mt-12 flex items-center justify-center flex-col gap-y-4 px-4 md:px-8">
      <h2 className="textlg md:text-2xl font-bold">Comece agora mesmo!</h2>
      <p className="text-gray-500 text-center max-w-[700px] w-full">
        A Flix Home é mais do que uma plataforma de serviços domésticos – somos
        seu parceiro confiável para facilitar o dia a dia.
      </p>
      <Button variant={'ghost'} className="bg-primaryColor text-white">
        Experimente agora
      </Button>
    </div>
  )
}
