'use client'

import { ReactNode, useEffect } from 'react'
import cn from 'clsx'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
    <div
      className={cn(
        'flex',
        'flex-1',
        'flex-col',
        'gap-4',
        'px-4',
        'py-20',
        'mx-auto',
        'z-1',
      )}
    >
      {children}
    </div>
  )
}
