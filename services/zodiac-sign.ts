import { ZodiacSign } from '@/types'
import { map as mapSlug } from './slug'

export function mapMany(zodiacSigns: ZodiacSign[]) {
  return zodiacSigns.map(mapOne)
}

export function mapOne(zodiacSign: ZodiacSign) {
  return {
    ...zodiacSign,
    slug: mapSlug(zodiacSign.slug),
  }
}
