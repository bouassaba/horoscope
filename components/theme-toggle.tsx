'use client'

import * as React from 'react'
import { capitalCase } from 'change-case'
import cn from 'clsx'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function ThemeToggle() {
  const { setTheme, themes, theme: currentTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className={cn(
              'h-[1.2rem]',
              'w-[1.2rem]',
              'rotate-0',
              'scale-100',
              'transition-all',
              'dark:-rotate-90',
              'dark:scale-0',
            )}
          />
          <Moon
            className={cn(
              'absolute',
              'h-[1.2rem]',
              'w-[1.2rem]',
              'rotate-90',
              'scale-0',
              'transition-all',
              'dark:rotate-0',
              'dark:scale-100',
            )}
          />
          <span className={cn('sr-only')}>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuCheckboxItem
            key={theme}
            checked={currentTheme === theme}
            onClick={() => setTheme(theme)}
          >
            {capitalCase(theme)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
