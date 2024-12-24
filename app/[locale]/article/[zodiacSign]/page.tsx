import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import { capitalCase } from 'change-case'
import { fetchByZodiacSign, FetchByZodiacSignOptions } from '@/client/article'
import { cn } from '@/lib/utils'
import { getCurrentLocale } from '@/locales/server'

type Props = {
  params: FetchByZodiacSignOptions
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zodiacSign } = params
  return {
    title: capitalCase(zodiacSign),
  }
}

export default async function ArticleByZodiacSignPage({ params }: Props) {
  const locale = await getCurrentLocale()
  const article = await fetchByZodiacSign({
    zodiacSign: params.zodiacSign,
    language: locale,
  })

  return (
    <article className={cn('prose', 'dark:prose-invert')}>
      {article ? (
        <>
          <h1>{article.zodiacSign.name}</h1>
          <PortableText value={article.bodyRaw} />
        </>
      ) : null}
    </article>
  )
}
