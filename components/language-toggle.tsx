'use client'

import * as React from 'react'
import cn from 'clsx'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

export default function LanguageToggle() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

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
          <span className={cn('sr-only')}>Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem
          checked={locale === 'en'}
          onClick={() => changeLocale('en')}
        >
          English
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === 'de'}
          onClick={() => changeLocale('de')}
        >
          Deutsch
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
