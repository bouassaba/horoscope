import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import { capitalCase } from 'change-case'
import {
  fetchByZodiacSignAndDate,
  FetchByZodiacSignAndDateOptions,
} from '@/client/article'
import { cn } from '@/lib/utils'
import { getCurrentLocale } from '@/locales/server'

type Props = {
  params: FetchByZodiacSignAndDateOptions
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zodiacSign } = params
  return {
    title: capitalCase(zodiacSign),
  }
}

export default async function SlugPage({ params }: Props) {
  const locale = getCurrentLocale()
  const { zodiacSign, date } = params
  const article = await fetchByZodiacSignAndDate({ zodiacSign, date })

  return (
    <article className={cn('prose', 'dark:prose-invert')}>
      <h1>
        {article.zodiacSign.name} ({locale})
      </h1>
      <PortableText value={article.bodyRaw} />
    </article>
  )
}
