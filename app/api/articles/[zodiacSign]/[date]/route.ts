import { type NextRequest } from 'next/server'
import { request } from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { mapOne as mapPost } from '@/services/post'
import { Post } from '@/types'

type Params = {
  zodiacSign: string
  date: string
}

export async function GET(_: NextRequest, { params }: { params: Params }) {
  const { zodiacSign, date } = params
  const { allPost } = await request<{ allPost: Post[] }>(
    GRAPHQL_URL,
    gql`
      {
        allPost(
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
  return Response.json(mapPost(allPost[0]), { status: 200 })
}
