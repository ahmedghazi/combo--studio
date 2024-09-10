import {RxViewGrid} from 'react-icons/rx'
import {baseLanguage} from '../../locale/supportedLanguages'

export default {
  name: 'listCardImageTextUI',
  title: 'list Card Image Text UI',
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
      of: [{type: 'cardImageText'}],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'items.0.image.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'list Card Image Text UI',
      }
    },
  },
}
