'use client'

import { ComponentProps } from 'react'
import { useRouter } from 'next/navigation'
import cn from 'clsx'
import { Sparkle } from 'lucide-react'
import Navigation from '@/components/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from '@/components/ui/sidebar'
import { useScopedI18n } from '@/locales/client'

export default function AppSidebar({
  ...props
}: ComponentProps<typeof Sidebar>) {
  const router = useRouter()
  const t = useScopedI18n('sidebar')

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className={cn(
            'data-[state=open]:bg-sidebar-accent',
            'data-[state=open]:text-sidebar-accent-foreground',
          )}
          onClick={() => router.push('/')}
        >
          <div
            className={cn(
              'flex',
              'aspect-square',
              'size-8',
              'items-center',
              'justify-center',
              'rounded-lg',
              'bg-sidebar-primary',
              'text-sidebar-primary-foreground',
            )}
          >
            <Sparkle className={cn('size-4')} />
          </div>
          <div
            className={cn(
              'grid',
              'flex-1',
              'text-left',
              'text-sm',
              'leading-tight',
            )}
          >
            <span className={cn('truncate', 'font-semibold')}>
              {t('appName')}
            </span>
            <span className={cn('truncate', 'text-xs')}>{t('tagline')}</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <Navigation />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
