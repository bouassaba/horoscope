'use client'

import { ReactElement } from 'react'
import Link from 'next/link'
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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export type NavigationItem = {
  title: string
  url: string
  icon: ReactElement
  isActive?: boolean
}

export default function Navigation() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Zodiac Sign</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

const items: NavigationItem[] = [
  {
    title: 'Scorpio',
    url: '/article/scorpio',
    icon: <TbZodiacScorpio />,
    isActive: true,
  },
  {
    title: 'Aries',
    url: '#',
    icon: <TbZodiacAries />,
  },
  {
    title: 'Taurus',
    url: '#',
    icon: <TbZodiacTaurus />,
  },
  {
    title: 'Gemini',
    url: '#',
    icon: <TbZodiacGemini />,
  },
  {
    title: 'Cancer',
    url: '#',
    icon: <TbZodiacCancer />,
  },
  {
    title: 'Leo',
    url: '#',
    icon: <TbZodiacLeo />,
  },
  {
    title: 'Virgo',
    url: '#',
    icon: <TbZodiacVirgo />,
  },
  {
    title: 'Libra',
    url: '#',
    icon: <TbZodiacLibra />,
  },
  {
    title: 'Sagittarius',
    url: '#',
    icon: <TbZodiacSagittarius />,
  },
  {
    title: 'Capricorn',
    url: '#',
    icon: <TbZodiacCapricorn />,
  },
  {
    title: 'Aquarius',
    url: '#',
    icon: <TbZodiacAquarius />,
  },
  {
    title: 'Pisces',
    url: '#',
    icon: <TbZodiacPisces />,
  },
]
