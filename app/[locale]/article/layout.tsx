'use client'

import { useEffect } from 'react'
import cn from 'clsx'
import AppSidebar from '@/components/app-sidebar'
import AppThemeProvider from '@/components/app-theme-provider'
import Header from '@/components/header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { I18nProviderClient } from '@/locales/client'

export default function DefaultLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  const { locale } = params

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
    <I18nProviderClient locale={locale}>
      <AppThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <div className={cn('overflow-auto')}>
              <div
                className={cn('flex', 'justify-center', 'px-4', 'py-20', 'z-1')}
              >
                {children}
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </AppThemeProvider>
    </I18nProviderClient>
  )
}
