import { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types'

export type ZodiacSign = {
  name: string
  localeName: LocaleString
  slug: Slug
}

export type ZodiacSignDTO = {
  name: string
  slug: string
}

export type Article = {
  date: string
  zodiacSign: ZodiacSign
  bodyRaw: Body | Body[]
}

export type ArticleDTO = {
  date: string
  zodiacSign: ZodiacSignDTO
  bodyRaw: Body | Body[]
}

export type Slug = {
  current: string
}

export type LocaleString = { [key: string]: string }

type Body = PortableTextBlock | ArbitraryTypedObject
