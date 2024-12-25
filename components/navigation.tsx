'use client'

import { ReactElement, useCallback } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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
  TbStar,
} from 'react-icons/tb'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ZodiacSignDTO } from '@/types'

export type NavigationItem = {
  title: string
  url: string
  icon: ReactElement
  isActive?: boolean
}

export type NavigationProps = {
  zodiacSigns: ZodiacSignDTO[]
}

export default function Navigation({ zodiacSigns }: NavigationProps) {
  const { slug } = useParams<{ slug?: string }>()
  const { state, setOpenMobile, isMobile } = useSidebar()

  const handleButtonClick = useCallback(() => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }, [isMobile, setOpenMobile])

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Zodiac Sign</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {zodiacSigns.map((zodiacSign, index) => (
            <SidebarMenuItem key={index}>
              {state == 'collapsed' ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton
                        asChild
                        isActive={zodiacSign.slug === slug}
                        onClick={handleButtonClick}
                      >
                        <Link href={`/article/${zodiacSign.slug}`}>
                          {getZodiacSignIcon(zodiacSign.slug)}
                          <span>{zodiacSign.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{zodiacSign.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <SidebarMenuButton
                  asChild
                  isActive={zodiacSign.slug === slug}
                  onClick={handleButtonClick}
                >
                  <Link href={`/article/${zodiacSign.slug}`}>
                    {getZodiacSignIcon(zodiacSign.slug)}
                    <span>{zodiacSign.name}</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function getZodiacSignIcon(slug: string): ReactElement {
  switch (slug) {
    case 'scorpio':
      return <TbZodiacScorpio />
    case 'aries':
      return <TbZodiacAries />
    case 'taurus':
      return <TbZodiacTaurus />
    case 'gemini':
      return <TbZodiacGemini />
    case 'cancer':
      return <TbZodiacCancer />
    case 'leo':
      return <TbZodiacLeo />
    case 'virgo':
      return <TbZodiacVirgo />
    case 'libra':
      return <TbZodiacLibra />
    case 'sagittarius':
      return <TbZodiacSagittarius />
    case 'capricorn':
      return <TbZodiacCapricorn />
    case 'aquarius':
      return <TbZodiacAquarius />
    case 'pisces':
      return <TbZodiacPisces />
    default:
      return <TbStar />
  }
}
