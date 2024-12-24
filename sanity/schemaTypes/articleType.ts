import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import languages from '../lib/languages'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      options: {
        list: languages.map((language) => ({
          value: language.id,
          title: language.name,
        })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'date',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zodiacSign',
      type: 'reference',
      to: { type: 'zodiacSign' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'date',
      zodiacSign: 'zodiacSign.name',
    },
    prepare(selection) {
      const { zodiacSign } = selection
      return {
        ...selection,
        subtitle: zodiacSign,
      }
    },
  },
})
