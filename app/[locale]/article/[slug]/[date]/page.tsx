import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import { capitalCase } from 'change-case'
import {
  fetchByZodiacSignAndDate,
  FetchByZodiacSignAndDateOptions,
} from '@/client/article'
import { cn } from '@/lib/utils'

type Props = {
  params: Params
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

type Params = FetchByZodiacSignAndDateOptions & {
  locale: string
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: capitalCase(params.slug),
  }
}

export default async function ArticleByZodiacSignAndDatePage({
  params,
}: Props) {
  const article = await fetchByZodiacSignAndDate({
    slug: params.slug,
    date: params.date,
    language: params.locale,
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
