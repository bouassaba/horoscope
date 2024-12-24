import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
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
