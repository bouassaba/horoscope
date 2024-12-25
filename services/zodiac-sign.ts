import request from 'graphql-request'
import gql from 'graphql-tag'
import { GRAPHQL_URL } from '@/config'
import { ZodiacSign, ZodiacSignDTO } from '@/types'
import { map as mapSlug } from './slug'

export type GetAllOptions = {
  language?: string
}

export async function getAll({ language }: GetAllOptions) {
  const { allZodiacSign } = await request<{ allZodiacSign: ZodiacSign[] }>(
    GRAPHQL_URL,
    gql`
      {
        allZodiacSign {
          name
          ${language && language !== 'en' ? `localeName { ${language} }` : ''}
          slug {
            current
          }
        }
      }
    `,
  )
  return mapMany(allZodiacSign, language)
}

export type GetBySlugOptions = {
  slug: string
  language?: string
}

export async function getBySlug({ slug, language }: GetBySlugOptions) {
  const { allZodiacSign } = await request<{ allZodiacSign: ZodiacSign[] }>(
    GRAPHQL_URL,
    gql`
      {
        allZodiacSign(where: { slug: { current: { eq: "${slug}" } } }) {
          name
          ${language && language !== 'en' ? `localeName { ${language} }` : ''}
          slug {
            current
          }
        }
      }
    `,
  )
  if (allZodiacSign.length > 0) {
    return mapOne(allZodiacSign[0], language)
  }
}

export function mapMany(
  zodiacSigns: ZodiacSign[],
  language?: string,
): ZodiacSignDTO[] {
  return zodiacSigns.map((zodiacSign) => mapOne(zodiacSign, language))
}

export function mapOne(
  zodiacSign: ZodiacSign,
  language?: string,
): ZodiacSignDTO {
  return {
    name:
      language && zodiacSign.localeName?.[language]
        ? zodiacSign.localeName[language]
        : zodiacSign.name,
    slug: mapSlug(zodiacSign.slug),
  }
}
