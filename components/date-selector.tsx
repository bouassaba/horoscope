'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { formatISO } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ZodiacSignDTO } from '@/types'

export type DateSelectorProps = {
  zodiacSign: ZodiacSignDTO
  date?: string
}

export default function DateSelector({ zodiacSign, date }: DateSelectorProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleDateSelect = useCallback(
    (date?: Date) => {
      if (date) {
        const isoDate = formatISO(date, { representation: 'date' })
        router.push(`/article/${zodiacSign.slug}/${isoDate}`)
        setIsOpen(false)
      }
    },
    [zodiacSign, router],
  )

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <CalendarIcon
            className={cn(
              'h-[1.2rem]',
              'w-[1.2rem]',
              'rotate-0',
              'scale-100',
              'transition-all',
            )}
          />
          <span className={cn('sr-only')}>Select Date</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-auto', 'p-0')}>
        <Calendar
          mode="single"
          selected={date ? new Date(date) : undefined}
          onSelect={handleDateSelect}
          disabled={(date) =>
            date > new Date() || date < new Date('1900-01-01')
          }
        />
      </PopoverContent>
    </Popover>
  )
}
