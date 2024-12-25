import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { capitalCase } from 'change-case'
import { fetchByZodiacSignAndDate } from '@/client/article'
import { cn } from '@/lib/utils'

type Props = {
  params: Params
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

type Params = {
  locale: string
  slug: string
  date: string
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

  if (!article) {
    redirect('/article/not-found')
  }

  return (
    <article className={cn('prose', 'dark:prose-invert')}>
      <h1>{article.zodiacSign.name}</h1>
      <h2>{new Date(article.date).toLocaleDateString(params.locale)}</h2>
      <PortableText value={article.bodyRaw} />
    </article>
  )
}
