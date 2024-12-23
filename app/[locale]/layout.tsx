import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Horoscope',
    template: 'Horoscope | %s',
  },
  description: 'A look into the future.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.svg',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: '/favicon-dark.svg',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

export default function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const { locale } = params

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
