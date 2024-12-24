import { type NextRequest } from 'next/server'
import { request } from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { mapOne as mapArticle } from '@/services/article'
import { Article } from '@/types'

type Params = {
  zodiacSign: string
  date: string
}

export async function GET(_: NextRequest, { params }: { params: Params }) {
  const { zodiacSign, date } = params
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
  return Response.json(mapArticle(allArticle[0]), { status: 200 })
}
