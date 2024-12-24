import { request } from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { mapMany as mapZodiacSigns } from '@/services/zodiac-sign'
import { ZodiacSign } from '@/types'

export async function GET() {
  const { allZodiacSign } = await request<{ allZodiacSign: ZodiacSign[] }>(
    GRAPHQL_URL,
    gql`
      {
        allZodiacSign {
          name
          slug {
            current
          }
        }
      }
    `,
  )
  return Response.json(mapZodiacSigns(allZodiacSign), { status: 200 })
}
