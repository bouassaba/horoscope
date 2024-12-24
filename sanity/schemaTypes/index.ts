import { type SchemaTypeDefinition } from 'sanity'
import { articleType } from './articleType'
import { blockContentType } from './blockContentType'
import { localeString } from './localeStringType'
import { zodiacSignType } from './zodiacSignType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, articleType, zodiacSignType, localeString],
}
