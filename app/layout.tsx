import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import cn from 'clsx'
import AppSidebar from '@/components/app-sidebar'
import AppThemeProvider from '@/components/app-theme-provider'
import Header from '@/components/header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Horoscope',
    template: 'Horoscope | %s',
  },
  description: 'A look into the future.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
      >
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
              <div className={cn('overflow-auto')}>{children}</div>
            </SidebarInset>
          </SidebarProvider>
        </AppThemeProvider>
      </body>
    </html>
  )
}
