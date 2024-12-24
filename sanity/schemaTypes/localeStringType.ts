import { defineType } from 'sanity'
import languages from '../lib/languages'

export const localeString = defineType({
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: languages
    .filter((language) => !language.isDefault)
    .map((language) => ({
      title: language.name,
      name: language.id,
      type: 'string',
      fieldset: 'translations',
    })),
})
