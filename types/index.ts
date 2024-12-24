import { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types'

export type ZodiacSign = {
  name: string
  slug: Slug
}

export type ZodiacSignDTO = {
  name: string
  slug: string
}

export type Article = {
  date: string
  slug: Slug
  zodiacSign: {
    slug: Slug
    name: string
  }
  bodyRaw: Body | Body[]
}

export type ArticleDTO = {
  date: string
  slug: string
  zodiacSign: ZodiacSignDTO
  bodyRaw: Body | Body[]
}

export type Slug = {
  current: string
}

type Body = PortableTextBlock | ArbitraryTypedObject
