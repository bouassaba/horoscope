'use client'

import { useCallback } from 'react'
import { useEffect } from 'react'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

type Locale = 'en' | 'de'

export default function LanguageSelector() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  useEffect(() => {
    const userDefinedLocale = localStorage.getItem('locale')
    // If no user defined locale, use browser language
    if (!userDefinedLocale) {
      changeLocale(new Intl.Locale(navigator.language).language as Locale)
    }
  }, [locale, changeLocale])

  const handleChangeLocale = useCallback(
    (locale: Locale) => {
      changeLocale(locale)
      // Persist as a user defined locale
      localStorage.setItem('locale', locale)
    },
    [changeLocale],
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages
            className={cn(
              'h-[1.2rem]',
              'w-[1.2rem]',
              'rotate-0',
              'scale-100',
              'transition-all',
            )}
          />
          <span className={cn('sr-only')}>Select Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem
          checked={locale === 'en'}
          onClick={() => handleChangeLocale('en')}
        >
          English
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === 'de'}
          onClick={() => handleChangeLocale('de')}
        >
          Deutsch
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
