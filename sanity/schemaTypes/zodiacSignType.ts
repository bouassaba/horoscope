import { SparkleIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const zodiacSignType = defineType({
  name: 'zodiacSign',
  title: 'Zodiac Sign',
  type: 'document',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'localeName',
      type: 'localeString',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
