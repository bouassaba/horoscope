import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { Article, ArticleDTO } from '@/types'
import { mapOne as mapZodiacSign } from './zodiac-sign'

export type GetByZodiacSignAndDateOptions = {
  zodiacSign: string
  date: string
  language?: string
}

export async function getByZodiacSignAndDate({
  zodiacSign,
  date,
  language,
}: GetByZodiacSignAndDateOptions) {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
      {
        allArticle(
          where: {
            zodiacSign: { slug: { current: { eq: "${zodiacSign}" } } }
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
  return mapOne(allArticle[0], language)
}

export type GetByZodiacSignOptions = {
  zodiacSign: string
  language?: string
}

export async function getByZodiacSign({
  zodiacSign,
  language,
}: GetByZodiacSignOptions) {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
        {
          allArticle(
            where: {
              zodiacSign: { slug: { current: { eq: "${zodiacSign}" } } }
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
  return mapOne(allArticle[0], language)
}

export function mapOne(article: Article, language?: string): ArticleDTO {
  return {
    date: article.date,
    bodyRaw: article.bodyRaw,
    zodiacSign: mapZodiacSign(article.zodiacSign, language),
  }
}
