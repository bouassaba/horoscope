'use client'

import { ReactElement } from 'react'
import Link from 'next/link'
import cn from 'clsx'
import { ChevronRight } from 'lucide-react'
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

export type NavigationItem = {
  title: string
  icon: ReactElement
  isActive?: boolean
  items: NavigationSubItem[]
}

export type NavigationSubItem = {
  title: string
  url: string
}

export default function Navigation() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Zodiac Sign</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className={cn('group/collapsible')}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon}
                  <span>{item.title}</span>
                  <ChevronRight
                    className={cn(
                      'ml-auto',
                      'transition-transform',
                      'duration-200',
                      'group-data-[state=open]/collapsible:rotate-90',
                    )}
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

const items: NavigationItem[] = [
  {
    title: 'Scorpio',
    icon: <TbZodiacScorpio />,
    isActive: true,
    items: [
      {
        title: 'Today',
        url: '/scorpio',
      },
    ],
  },
  {
    title: 'Aries',
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
    icon: <TbZodiacPisces />,
    items: [
      {
        title: 'Today',
        url: '#',
      },
    ],
  },
]
