import { Post } from '@/types'
import { map as mapSlug } from './slug'
import { mapOne as mapZodiacSign } from './zodiac-sign'

export function mapOne(post: Post) {
  return {
    ...post,
    slug: mapSlug(post.slug),
    zodiacSign: mapZodiacSign(post.zodiacSign),
  }
}
