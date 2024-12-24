import { cookies } from 'next/headers'
import { fetchAll } from '@/client/zodiac-sign'
import AppSidebar from '@/components/app-sidebar'
import AppThemeProvider from '@/components/app-theme-provider'
import Header from '@/components/header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { I18nProviderClient } from '@/locales/client'

export default async function DefaultLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  const sidebarState = cookies().get('sidebar:state')?.value === 'true'
  const zodiacSigns = await fetchAll({ language: params.locale })

  return (
    <I18nProviderClient locale={params.locale}>
      <AppThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={sidebarState}>
          {zodiacSigns ? <AppSidebar zodiacSigns={zodiacSigns} /> : null}
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
