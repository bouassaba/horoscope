import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { Article, ArticleDTO } from '@/types'
import { mapOne as mapZodiacSign } from './zodiac-sign'

export type GetBySlugAndDateOptions = {
  slug: string
  date: string
  language?: string
}

export async function getBySlugAndDate({
  slug,
  date,
  language,
}: GetBySlugAndDateOptions): Promise<ArticleDTO | undefined> {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
      {
        allArticle(
          where: {
            zodiacSign: { slug: { current: { eq: "${slug}" } } }
            date: { eq: "${date}" }
            ${language ? `language: { eq: "${language}" }` : ''}
          }
        ) {
          date
          zodiacSign {
            name
            ${language && language !== 'en' ? `localeName { ${language} }` : ''}
            slug {
              current
            }
          }
          bodyRaw
        }
      }
    `,
  )
  if (allArticle.length > 0) {
    return mapOne(allArticle[0], language)
  }
}

export type GetBySlugOptions = {
  slug: string
  language?: string
}

export async function getBySlug({
  slug,
  language,
}: GetBySlugOptions): Promise<ArticleDTO | undefined> {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
        {
          allArticle(
            where: {
              zodiacSign: { slug: { current: { eq: "${slug}" } } }
              ${language ? `language: { eq: "${language}" }` : ''}
            }
            sort: { date: DESC }
            limit: 1
          ) {
            date
            zodiacSign {
              name
              ${language && language !== 'en' ? `localeName { ${language} }` : ''}
              slug {
                current
              }
            }
            bodyRaw
          }
        }
      `,
  )
  if (allArticle.length > 0) {
    return mapOne(allArticle[0], language)
  }
}

export function mapOne(article: Article, language?: string): ArticleDTO {
  return {
    date: article.date,
    bodyRaw: article.bodyRaw,
    zodiacSign: mapZodiacSign(article.zodiacSign, language),
  }
}
