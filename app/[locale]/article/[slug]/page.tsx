import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import { capitalCase } from 'change-case'
import { fetchByZodiacSign } from '@/client/article'
import { cn } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: {
    locale: string
    slug: string
  }
}): Promise<Metadata> {
  return {
    title: capitalCase(params.slug),
  }
}

export default async function ArticleByZodiacSignPage({
  params,
}: {
  params: {
    locale: string
    slug: string
  }
}) {
  const article = await fetchByZodiacSign({
    slug: params.slug,
    language: params.locale,
  })

  return (
    <article className={cn('prose', 'dark:prose-invert')}>
      {article ? (
        <>
          <h1>{article.zodiacSign.name}</h1>
          <h2>{new Date(article.date).toLocaleDateString(params.locale)}</h2>
          <PortableText value={article.bodyRaw} />
        </>
      ) : null}
    </article>
  )
}
