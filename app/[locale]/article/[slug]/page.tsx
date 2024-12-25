import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import { capitalCase } from 'change-case'
import { fetchByZodiacSign, FetchByZodiacSignOptions } from '@/client/article'
import { cn } from '@/lib/utils'
import { getCurrentLocale } from '@/locales/server'

type Props = {
  params: Params
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

type Params = FetchByZodiacSignOptions & {
  locale: string
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: capitalCase(params.slug),
  }
}

export default async function ArticleByZodiacSignPage({ params }: Props) {
  const locale = await getCurrentLocale()
  const article = await fetchByZodiacSign({
    slug: params.slug,
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
