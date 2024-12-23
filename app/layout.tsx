import type { Metadata } from 'next'
import AppThemeProvider from '@/components/app-theme-provider'
import './globals.css'

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
