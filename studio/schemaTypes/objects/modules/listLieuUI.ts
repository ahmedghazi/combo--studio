import {RxViewGrid} from 'react-icons/rx'
import {baseLanguage} from '../../locale/supportedLanguages'

export default {
  name: 'listLieuUI',
  title: 'List Lieu UI',
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
      of: [{type: 'reference', to: [{type: 'lieu'}]}],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'items.0.imageCover',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'List Lieu UI',
      }
    },
  },
}
