import {defineField} from 'sanity'
import {baseLanguage} from '../../locale/supportedLanguages'
import {IoCallOutline} from 'react-icons/io5'

export default defineField({
  name: 'callOutUI',
  title: 'Call Out UI',
  type: 'object',
  icon: IoCallOutline,
  fields: [
    defineField({
      name: 'title',
      type: 'localeText',
      description: 'Module title',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      description: 'Image de fond',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'linkExternal',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Call Out UI',
      }
    },
  },
})
