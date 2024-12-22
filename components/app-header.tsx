'use client'

import cn from 'clsx'
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
import ModeToggle from './mode-toggle'

export default function AppHeader() {
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
              <BreadcrumbLink href="#">Zodiac Sign</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className={cn('hidden', 'md:block')} />
            <BreadcrumbItem>
              <BreadcrumbPage>Scorpio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className={cn('grow', 'h-10')} />
        <ModeToggle />
      </div>
    </header>
  )
}
