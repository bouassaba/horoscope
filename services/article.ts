import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { Article } from '@/types'
import { map as mapSlug } from './slug'
import { mapOne as mapZodiacSign } from './zodiac-sign'

export type GetByZodiacSignAndDateOptions = {
  zodiacSign: string
  date: string
}

export async function getByZodiacSignAndDate({
  zodiacSign,
  date,
}: GetByZodiacSignAndDateOptions) {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
      {
        allArticle(
          where: {
            zodiacSign: { slug: { current: { eq: "${zodiacSign}" } } }
            date: { eq: "${date}" }
          }
        ) {
          date
          slug {
            current
          }
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

export type GetByZodiacSignOptions = {
  zodiacSign: string
}

export async function getByZodiacSign({ zodiacSign }: GetByZodiacSignOptions) {
  const { allArticle } = await request<{ allArticle: Article[] }>(
    GRAPHQL_URL,
    gql`
        {
          allArticle(
            where: { zodiacSign: { slug: { current: { eq: "${zodiacSign}" } } } }
            sort: { date: DESC }
            limit: 1
          ) {
            date
            slug {
              current
            }
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

export function mapOne(article: Article) {
  return {
    ...article,
    slug: mapSlug(article.slug),
    zodiacSign: mapZodiacSign(article.zodiacSign),
  }
}
