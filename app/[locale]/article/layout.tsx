import { cookies } from 'next/headers'
import { fetchAll } from '@/client/zodiac-sign'
import AppSidebar from '@/components/app-sidebar'
import AppThemeProvider from '@/components/app-theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { I18nProviderClient } from '@/locales/client'

type Props = Readonly<{
  params: Params
  children: React.ReactNode
}>

type Params = {
  locale: string
}

export default async function ArticleLayout({ params, children }: Props) {
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
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </AppThemeProvider>
    </I18nProviderClient>
  )
}
