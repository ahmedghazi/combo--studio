import {defineField} from 'sanity'
import {baseLanguage} from '../../locale/supportedLanguages'
import {TfiLayoutMediaRight} from 'react-icons/tfi'

export default defineField({
  name: 'splitImageTextUI',
  title: 'Split Image Text UI',
  type: 'object',
  icon: TfiLayoutMediaRight,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'title',
      type: 'localeString',
      description: 'Module title',
    }),
    defineField({
      name: 'text',
      type: 'localeBlockContent',
      title: 'Text',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'Split Image Text UI',
      }
    },
  },
})
