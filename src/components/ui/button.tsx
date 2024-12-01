import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primaryColor text-white rounded-[14px] mx-auto xl:ml-0 hover:bg-blue-400 transition-all active:scale-95',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[14px]',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-[14px]',
        secondary:
          'bg-secondaryColor text-white rounded-[14px] w-[200px] mx-auto lg:w-[235px] h-[46px] hover:bg-green-400 transition-all active:scale-95 lg:h-[61px] xl:ml-0',
        ghost: 'hover:bg-accent hover:text-accent-foreground rounded-[14px]',
        link: 'text-primary underline-offset-4 hover:underline rounded-[14px]',
      },
      size: {
        default: 'h-[46px]  lg:h-[61px] px-6',
        sm: 'h-[46px]  lg:h-[61px]',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
