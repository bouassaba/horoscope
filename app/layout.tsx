import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import cx from 'clsx'
import { NavigationBar } from '@/components/navigation-bar'
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
  title: 'Horoscope',
  description: 'A look into the future.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          'flex',
          'flex-col',
          geistSans.variable,
          geistMono.variable,
          'antialiased',
        )}
      >
        <div
          className={cx(
            'fixed',
            'top-0',
            'left-0',
            'w-full',
            'flex',
            'items-center',
            'h-16',
            'backdrop-blur-sm',
            'bg-white',
            'bg-opacity-80',
            'border-b',
            'border-gray-200',
            'z-50',
          )}
        >
          <div className={cx('container', 'mx-auto')}>
            <NavigationBar />
          </div>
        </div>
        <main
          className={cx(
            'container',
            'mx-auto',
            'top-0',
            'pt-24',
            'overflow-y-auto',
            'z-1',
          )}
        >
          <article className={cx('w-3/5', 'mx-auto')}>{children}</article>
        </main>
        <footer className={cx('flex', 'items-center', 'justify-center')}>
          <div
            className={cx(
              'container',
              'h-24',
              'shrink-0',
              'py-7',
              'mb-4',
              'rounded-2xl',
              'bg-gray-900',
              'text-white',
              'flex',
              'flex-col',
              'items-center',
              'justify-center',
            )}
          >
            <div className={cx('w-3/5', 'mx-auto')}>
              <p className={cx('text-sm', 'text-gray-400')}>
                Copyright © 2025 Hosorcope.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
