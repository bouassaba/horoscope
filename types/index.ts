import { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types'

export type ZodiacSign = {
  name: string
  slug: Slug
}

export type Post = {
  date: string
  slug: Slug
  zodiacSign: {
    slug: Slug
    name: string
  }
  bodyRaw: Body | Body[]
}

export type Slug = {
  current: string
}

type Body = PortableTextBlock | ArbitraryTypedObject
