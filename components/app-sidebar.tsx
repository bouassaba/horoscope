'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkle } from 'lucide-react'
import Navigation from '@/components/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { useScopedI18n } from '@/locales/client'
import { ZodiacSignDTO } from '@/types'

export type AppSidebarProps = {
  zodiacSigns: ZodiacSignDTO[]
}

export default function AppSidebar({ zodiacSigns }: AppSidebarProps) {
  const router = useRouter()
  const t = useScopedI18n('sidebar')
  const { setOpenMobile, isMobile } = useSidebar()

  const handleMenuButtonClick = useCallback(() => {
    if (isMobile) {
      setOpenMobile(false)
    }
    router.push('/article')
  }, [router, isMobile, setOpenMobile])

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className={cn(
            'data-[state=open]:bg-sidebar-accent',
            'data-[state=open]:text-sidebar-accent-foreground',
          )}
          onClick={handleMenuButtonClick}
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
        <Navigation zodiacSigns={zodiacSigns} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
