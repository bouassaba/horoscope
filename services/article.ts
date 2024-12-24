import { Article } from '@/types'
import { map as mapSlug } from './slug'
import { mapOne as mapZodiacSign } from './zodiac-sign'

export function mapOne(article: Article) {
  return {
    ...article,
    slug: mapSlug(article.slug),
    zodiacSign: mapZodiacSign(article.zodiacSign),
  }
}
