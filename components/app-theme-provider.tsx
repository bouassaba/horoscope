'use client'

import dynamic from 'next/dynamic'
import { ThemeProviderProps } from 'next-themes'

const ThemeProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  { ssr: false },
)

export default function AppThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}
