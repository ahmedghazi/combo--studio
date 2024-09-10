import {RxViewGrid} from 'react-icons/rx'
import {baseLanguage} from '../../locale/supportedLanguages'

export default {
  name: 'listStudioUI',
  title: 'list Studio UI',
  type: 'object',
  icon: RxViewGrid,
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Titre',
    },
    {
      name: 'items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'studio'}]}],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'items.0.imageCover.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'List Studio UI',
      }
    },
  },
}
