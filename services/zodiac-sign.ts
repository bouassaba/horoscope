import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { ZodiacSign } from '@/types'
import { map as mapSlug } from './slug'

export async function getAll() {
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
  return mapMany(allZodiacSign)
}

export function mapMany(zodiacSigns: ZodiacSign[]) {
  return zodiacSigns.map(mapOne)
}

export function mapOne(zodiacSign: ZodiacSign) {
  return {
    ...zodiacSign,
    slug: mapSlug(zodiacSign.slug),
  }
}
