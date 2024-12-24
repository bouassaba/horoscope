import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { Article, ArticleDTO } from '@/types'
import { mapOne as mapZodiacSign } from './zodiac-sign'

export type GetByZodiacSignAndDateOptions = {
  zodiacSign: string
  date: string
  locale?: string
}

export async function getByZodiacSignAndDate({
  zodiacSign,
  date,
  locale,
}: GetByZodiacSignAndDateOptions) {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
      {
        allArticle(
          where: {
            zodiacSign: { slug: { current: { eq: "${zodiacSign}" } } }
            date: { eq: "${date}" }
            ${locale ? `language: { eq: "${locale}" }` : ''}
          }
        ) {
          date
          zodiacSign {
            name
            ${locale && locale !== 'en' ? `localeName { ${locale} }` : ''}
            slug {
              current
            }
          }
          bodyRaw
        }
      }
    `,
  )
  return mapOne(allArticle[0], locale)
}

export type GetByZodiacSignOptions = {
  zodiacSign: string
  locale?: string
}

export async function getByZodiacSign({
  zodiacSign,
  locale,
}: GetByZodiacSignOptions) {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
        {
          allArticle(
            where: {
              zodiacSign: { slug: { current: { eq: "${zodiacSign}" } } }
              ${locale ? `language: { eq: "${locale}" }` : ''}
            }
            sort: { date: DESC }
            limit: 1
          ) {
            date
            zodiacSign {
              slug {
                current
              }
              name
            }
            bodyRaw
          }
        }
      `,
  )
  return mapOne(allArticle[0])
}

export function mapOne(article: Article, locale?: string): ArticleDTO {
  return {
    date: article.date,
    bodyRaw: article.bodyRaw,
    zodiacSign: mapZodiacSign(article.zodiacSign, locale),
  }
}
