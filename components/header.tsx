'use client'

import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import DateToggle from './date-toggle'
import LanguageToggle from './language-toggle'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header
      className={cn(
        'absolute',
        'top-0',
        'left-0',
        'right-0',
        'backdrop-blur',
        'bg-background/50',
        'z-50',
        'flex',
        'h-16',
        'shrink-0',
        'items-center',
        'gap-2',
        'transition-[width,height]',
        'ease-linear',
        'group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12',
      )}
    >
      <div className={cn('w-full', 'flex', 'items-center', 'gap-2', 'px-4')}>
        <SidebarTrigger className={cn('-ml-1')} />
        <Separator className={cn('mr-2', 'h-4')} orientation="vertical" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className={cn('hidden', 'md:block')}>
              <BreadcrumbLink asChild>
                <Link href="/">Zodiac Sign</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className={cn('hidden', 'md:block')} />
            <BreadcrumbItem>
              <BreadcrumbPage>Scorpio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className={cn('grow', 'h-10')} />
        <DateToggle />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
