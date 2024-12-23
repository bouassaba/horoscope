'use client'

import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export default function DateToggle() {
  return (
    <Popover>
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
          <span className={cn('sr-only')}>Toggle Language</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-auto', 'p-0')} align="start">
        <Calendar
          mode="single"
          disabled={(date) =>
            date > new Date() || date < new Date('1900-01-01')
          }
        />
      </PopoverContent>
    </Popover>
  )
}
