import home from './singletons/home'
import landing from './singletons/landing'
import pageModulaire from './documents/pageModulaire'
import project from './documents/project'
import tag from './documents/tag'
import infos from './singletons/infos'
import settings from './singletons/settings'

import localeString from './locale/localeString'
import localeBlockContent from './locale/localeBlockContent'

// import moduleImage from './objects/modules/imageUI'
// import moduleImages from './objects/modules/imagesUI'
// import moduleText from './objects/modules/textUI'
// import moduleTexts from './objects/modules/textsUI'
// import moduleEmbed from './objects/modules/embedUI'
// import moduleProjects from './objects/modules/projectsUI'
// import moduleInterTitreUI from './objects/modules/interTitreUI'

import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import linkModal from './objects/linkModal'
import tagGroup from './objects/tagGroup'
import seo from './objects/seo'
import embed from './objects/embed'
import keyVal from './objects/keyVal'
// import keyValGroup from './objects/keyValGroup'
import video from './objects/video'
import interTitre from './objects/interTitre'
import figure from './objects/figure'

import heroUI from './objects/modules/heroUI'
import textUI from './objects/modules/textUI'
import contactsUI from './objects/modules/contactsUI'

export const schemaTypes = [
  home,
  landing,
  infos,
  settings,
  pageModulaire,
  project,
  tag,
  tagGroup,

  localeString,
  localeBlockContent,

  blockContent,
  linkExternal,
  linkInternal,
  linkModal,
  seo,
  embed,
  keyVal,
  // keyValGroup,
  video,
  interTitre,
  figure,

  heroUI,
  textUI,
  contactsUI,
]
export default schemaTypes
