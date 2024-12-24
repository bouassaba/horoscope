import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { ZodiacSign, ZodiacSignDTO } from '@/types'
import { map as mapSlug } from './slug'

export type GetAllOptions = {
  locale?: string
}

export async function getAll({ locale }: GetAllOptions) {
  const { allZodiacSign } = await request<{ allZodiacSign: ZodiacSign[] }>(
    GRAPHQL_URL,
    gql`
      {
        allZodiacSign {
          name
          ${locale && locale !== 'en' ? `localeName { ${locale} }` : ''}
          slug {
            current
          }
        }
      }
    `,
  )
  return mapMany(allZodiacSign, locale)
}

export function mapMany(
  zodiacSigns: ZodiacSign[],
  locale?: string,
): ZodiacSignDTO[] {
  return zodiacSigns.map((zodiacSign) => mapOne(zodiacSign, locale))
}

export function mapOne(zodiacSign: ZodiacSign, locale?: string): ZodiacSignDTO {
  return {
    name:
      locale && zodiacSign.localeName?.[locale]
        ? zodiacSign.localeName[locale]
        : zodiacSign.name,
    slug: mapSlug(zodiacSign.slug),
  }
}
