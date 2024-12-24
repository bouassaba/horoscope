import { NextRequest } from 'next/server'
import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { mapOne as mapArticle } from '@/services/article'
import { Article } from '@/types'

type Params = {
  zodiacSign: string
}

export async function GET(_: NextRequest, { params }: { params: Params }) {
  const { zodiacSign } = params
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
  return Response.json(mapArticle(allArticle[0]), { status: 200 })
}
