'use client'

import cn from 'clsx'
import { Sparkle } from 'lucide-react'
import {
  TbZodiacScorpio,
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
  TbZodiacAquarius,
  TbZodiacPisces,
} from 'react-icons/tb'
import { NavItem, NavMain } from '@/components/nav-main'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from '@/components/ui/sidebar'

const items: NavItem[] = [
  {
    title: 'Scorpio',
    url: '#',
    icon: <TbZodiacScorpio />,
    isActive: true,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Aries',
    url: '#',
    icon: <TbZodiacAries />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Taurus',
    url: '#',
    icon: <TbZodiacTaurus />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Gemini',
    url: '#',
    icon: <TbZodiacGemini />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Cancer',
    url: '#',
    icon: <TbZodiacCancer />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Leo',
    url: '#',
    icon: <TbZodiacLeo />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Virgo',
    url: '#',
    icon: <TbZodiacVirgo />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Libra',
    url: '#',
    icon: <TbZodiacLibra />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Sagittarius',
    url: '#',
    icon: <TbZodiacSagittarius />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Capricorn',
    url: '#',
    icon: <TbZodiacCapricorn />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Aquarius',
    url: '#',
    icon: <TbZodiacAquarius />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
  {
    title: 'Pisces',
    url: '#',
    icon: <TbZodiacPisces />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className={cn(
            'data-[state=open]:bg-sidebar-accent',
            'data-[state=open]:text-sidebar-accent-foreground',
          )}
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
            <span className={cn('truncate', 'font-semibold')}>Hososcope</span>
            <span className={cn('truncate', 'text-xs')}>
              A Look Into the Future
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
