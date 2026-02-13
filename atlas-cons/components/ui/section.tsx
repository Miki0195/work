import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn('py-20 md:py-32 px-4 md:px-8', className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}
