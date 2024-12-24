import { type SchemaTypeDefinition } from 'sanity'
import { articleType } from './articleType'
import { blockContentType } from './blockContentType'
import { zodiacSignType } from './zodiacSignType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, articleType, zodiacSignType],
}
