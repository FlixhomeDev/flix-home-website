'use client'

import Image from 'next/image'
import { useMemo, useState, useEffect } from 'react'

interface AvatarProps {
  src?: string | null
  alt: string
  size?: number
}

function useImageValidation(src?: string | null) {
  const [isValid, setIsValid] = useState<boolean>(false)

  useEffect(() => {
    if (!src) {
      setIsValid(false)
      return
    }

    const img = new window.Image()
    img.src = src

    const handleLoad = () => setIsValid(true)
    const handleError = () => setIsValid(false)

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)

    return () => {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
  }, [src])

  return isValid
}

export default function Avatar({ src, alt, size = 48 }: AvatarProps) {
  const isValidImage = useImageValidation(src)

  const initials = useMemo(() => {
    return alt
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }, [alt])

  if (src && isValidImage) {
    return (
      <div
        className="relative rounded-full overflow-hidden bg-primaryColor/45"
        style={{ width: size, height: size }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div
      className="rounded-full bg-primary flex items-center justify-center text-white font-medium"
      style={{
        width: size,
        height: size,
        fontSize: `${size * 0.4}px`,
      }}
    >
      {initials}
    </div>
  )
}
