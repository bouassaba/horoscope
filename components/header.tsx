'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { fetchBySlug } from '@/client/zodiac-sign'
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
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { useScopedI18n } from '@/locales/client'
import DateSelector from './date-selector'
import LanguageSelector from './language-selector'
import ThemeToggle from './theme-toggle'

export default function Header() {
  const t = useScopedI18n('header')
  const { slug, locale } = useParams<{ slug?: string; locale: string }>()
  const { data: zodiacSign, isLoading } = useSWR(
    slug ? `/zodiac-signs/${slug}?language=${locale}` : null,
    () => fetchBySlug({ slug: slug!, language: locale }),
  )

  return (
    <header
      className={cn(
        'absolute',
        'top-0',
        'left-0',
        'right-0',
        'backdrop-blur',
        'bg-background/50',
        'z-2',
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
        {isLoading ? (
          <>
            <Separator className={cn('mr-2', 'h-4')} orientation="vertical" />
            <Skeleton className="h-[20px] w-[160px]" />
          </>
        ) : null}
        {zodiacSign ? (
          <>
            <Separator className={cn('mr-2', 'h-4')} orientation="vertical" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className={cn('hidden', 'md:block')}>
                  <BreadcrumbLink asChild>
                    <Link href="/">{t('breadcrumbRoot')}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className={cn('hidden', 'md:block')} />
                <BreadcrumbItem>
                  <BreadcrumbPage>{zodiacSign.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </>
        ) : null}
        <div className={cn('grow', 'h-10')} />
        {zodiacSign ? <DateSelector /> : null}
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </header>
  )
}
