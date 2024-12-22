'use client'

import { ReactNode, useEffect } from 'react'
import cn from 'clsx'

type DefaultLayoutProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  useEffect(() => {
    const element = document.querySelector("link[rel='icon']")
    if (element) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event: MediaQueryListEvent) => {
          if (event.matches) {
            element.setAttribute('href', '/favicon-dark.svg')
          } else {
            element.setAttribute('href', '/favicon.svg')
          }
        })
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        element.setAttribute('href', '/favicon-dark.svg')
      } else {
        element.setAttribute('href', '/favicon.svg')
      }
    }
  }, [])

  return (
    <div className={cn('flex', 'justify-center', 'px-4', 'py-20', 'z-1')}>
      {children}
    </div>
  )
}
