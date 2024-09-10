import {defineField} from 'sanity'
import {FiImage} from 'react-icons/fi'

export default defineField({
  name: 'heroSplitScrollUI',
  title: 'Hero Split Scroll UI',
  type: 'object',
  icon: FiImage,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'figure'}],
    }),
  ],

  preview: {
    select: {
      image: 'items.0.image.image',
      title: 'title',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        subtitle: 'Hero Split Scroll UI',
        media: image,
      }
    },
  },
})
