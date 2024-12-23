import { cookies } from 'next/headers'
import AppSidebar from '@/components/app-sidebar'
import AppThemeProvider from '@/components/app-theme-provider'
import Header from '@/components/header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { I18nProviderClient } from '@/locales/client'

export default function DefaultLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  const { locale } = params
  const cookieStore = cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

  return (
    <I18nProviderClient locale={locale}>
      <AppThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={defaultOpen}>
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
