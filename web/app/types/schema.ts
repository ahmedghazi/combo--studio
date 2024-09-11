export declare type SanityReference<T> = T & {
  _ref: string;
};

export declare type SanityKeyedReference<T> = T & {
  _key: string;
  _ref: string;
};

import type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<SliderUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
  >;
}

/**
 * Landing
 *
 *
 */
export interface Landing extends SanityDocument {
  _type: "landing";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<SliderUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
  >;
}

/**
 * Infos
 *
 *
 */
export interface Infos extends SanityDocument {
  _type: "infos";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Chapo — `localeBlockContent`
   *
   *
   */
  chapo?: LocaleBlockContent;

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;
}

/**
 * Réglages (header, footer, ...)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Nom du site — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Combo Studio Logo — `image`
   *
   *
   */
  comboStudioLogo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Naviguation Primary — `array`
   *
   *
   */
  navPrimary?: Array<SanityKeyed<MenuItem>>;

  /**
   * Naviguation Secondary — `array`
   *
   *
   */
  navSecondary?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;

  /**
   * Combo world Logo — `image`
   *
   *
   */
  comboLogo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Infos — `localeBlockContent`
   *
   *
   */
  footerInfos?: LocaleBlockContent;

  /**
   * Message 404 — `localeBlockContent`
   *
   *
   */
  message404?: LocaleBlockContent;

  /**
   * Message Cookie — `localeBlockContent`
   *
   *
   */
  messageCookie?: LocaleBlockContent;

  /**
   * customCss — `text`
   *
   *
   */
  customCss?: string;
}

/**
 * Page Modulaire
 *
 *
 */
export interface PageModulaire extends SanityDocument {
  _type: "pageModulaire";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   * Le nom de la page
   */
  title?: LocaleString;

  /**
   * Soustitre — `localeString`
   *
   *
   */
  subTitle?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<SliderUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
  >;
}

/**
 * Lieu
 *
 *
 */
export interface Lieu extends SanityDocument {
  _type: "lieu";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Soustitre — `string`
   *
   *
   */
  subTitle?: string;

  /**
   * Image clef — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<SliderUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
  >;
}

/**
 * Studio
 *
 *
 */
export interface Studio extends SanityDocument {
  _type: "studio";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Soustitre — `string`
   *
   *
   */
  subTitle?: string;

  /**
   * Lieu — `string`
   *
   * Aubervilliers, Colombes, ...
   */
  location?: string;

  /**
   * Image clef — `figure`
   *
   * Visible on liste pages, project cards (1400px)
   */
  imageCover?: Figure;

  /**
   * Image Hero — `figure`
   *
   * Visible on detail page (2000px)
   */
  imageHero?: Figure;

  /**
   * Extrait — `localeString`
   *
   *
   */
  excerpt?: LocaleString;

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * infos — `array`
   *
   *
   */
  infos?: Array<SanityKeyed<SummaryDetail>>;
}

export type LocaleString = {
  _type: "localeString";
  /**
   * Français — `string`
   *
   *
   */
  fr?: string;

  /**
   * English — `string`
   *
   *
   */
  en?: string;
};

export type LocaleText = {
  _type: "localeText";
  /**
   * Français — `text`
   *
   *
   */
  fr?: string;

  /**
   * English — `text`
   *
   *
   */
  en?: string;
};

export type LocaleBlockContent = {
  _type: "localeBlockContent";
  /**
   * Français — `blockContent`
   *
   *
   */
  fr?: BlockContent;

  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<KeyValGroup>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  | SanityKeyed<Embed>
>;

export type LinkExternal = {
  _type: "linkExternal";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
};

export type LinkInternal = {
  _type: "linkInternal";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<PageModulaire | Home | Studio>;
};

export type LinkModal = {
  _type: "linkModal";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * target — `string`
   *
   *
   */
  target?: "modal-works";
};

export type LinkAnchor = {
  _type: "linkAnchor";
  /**
   * label — `string`
   *
   *
   */
  label?: string;

  /**
   * target — `string`
   *
   * html anchor id
   */
  target?: string;
};

export type MenuItem = {
  _type: "menuItem";
  /**
   * link — `linkInternal`
   *
   *
   */
  link?: LinkInternal;

  /**
   * Sub menu — `array`
   *
   *
   */
  subMenu?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta description — `string`
   *
   *
   */
  metaDescription?: string;

  /**
   * Meta image — `image`
   *
   *
   */
  metaImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Embed = {
  _type: "embed";
  /**
   * url — `url`
   *
   * url publique du media ex: https://www.youtube.com/watch?v=exTZ9vB6ZeE
   */
  url?: string;
};

export type KeyValText = {
  _type: "keyValText";
  /**
   * Clef — `localeString`
   *
   *
   */
  key?: LocaleString;

  /**
   * Valeur — `localeBlockContent`
   *
   *
   */
  val?: LocaleBlockContent;
};

export type KeyValSimple = {
  _type: "keyValSimple";
  /**
   * Clef — `localeString`
   *
   *
   */
  key?: LocaleString;

  /**
   * Valeur — `localeString`
   *
   *
   */
  val?: LocaleString;
};

export type KeyValGroup = {
  _type: "keyValGroup";
  /**
   * title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<KeyValSimple> | SanityKeyed<KeyValText>>;
};

export type Video = {
  _type: "video";
  /**
   * url — `url`
   *
   *
   */
  url?: string;

  /**
   * placeholder — `image`
   *
   *
   */
  placeholder?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Figure = {
  _type: "figure";
  /**
   * Image — `image`
   *
   * jpg, 1400px de large, 72dpi
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;
};

export type CardImageText = {
  _type: "cardImageText";
  /**
   * title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type SummaryDetail = {
  _type: "summaryDetail";
  /**
   * Libellé — `localeString`
   *
   *
   */
  summary?: LocaleString;

  /**
   * detail — `localeBlockContent`
   *
   *
   */
  detail?: LocaleBlockContent;
};

export type TextUI = {
  _type: "textUI";
  /**
   * look — `string`
   *
   *
   */
  look?: "default" | "columns" | "offset";

  /**
   * title — `localeString`
   *
   * Module title (displayed only in the admin)
   */
  title?: LocaleString;

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * backgroundImage — `image`
   *
   * Image de fond
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * backgroundColor — `string`
   *
   * Couleur de fond
   */
  backgroundColor?: string;

  /**
   * foregroundColor — `string`
   *
   * Couleur de texte
   */
  foregroundColor?: string;
};

export type ImageUI = {
  _type: "imageUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type HeroUI = {
  _type: "heroUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type ContactsUI = {
  _type: "contactsUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<LocaleBlockContent>>;
};

export type ListCardImageTextUI = {
  _type: "listCardImageTextUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<CardImageText>>;
};

export type ListLieuUI = {
  _type: "listLieuUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Lieu>>;
};

export type ListStudioUI = {
  _type: "listStudioUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Studio>>;
};

export type ListLModulaireUI = {
  _type: "listLModulaireUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<SliderUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
  >;
};

export type MarqueeUI = {
  _type: "marqueeUI";
  /**
   * text — `string`
   *
   *
   */
  text?: string;

  /**
   * foregroundColor — `string`
   *
   * format hex : #123321
   */
  foregroundColor?: string;

  /**
   * backgroundColor — `string`
   *
   * format hex : #123321
   */
  backgroundColor?: string;
};

export type SplitImageTextUI = {
  _type: "splitImageTextUI";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * title — `localeString`
   *
   * Module title
   */
  title?: LocaleString;

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;
};

export type SliderUI = {
  _type: "sliderUI";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * images — `array`
   *
   *
   */
  images?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
};

export type CallOutUI = {
  _type: "callOutUI";
  /**
   * title — `localeText`
   *
   * Module title
   */
  title?: LocaleText;

  /**
   * backgroundImage — `image`
   *
   * Image de fond
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<LinkExternal>>;
};

export type HeroSplitScrollUI = {
  _type: "heroSplitScrollUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * titleLeft — `localeString`
   *
   *
   */
  titleLeft?: LocaleString;

  /**
   * itemsLeft — `array`
   *
   *
   */
  itemsLeft?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * titleRight — `localeString`
   *
   *
   */
  titleRight?: LocaleString;

  /**
   * itemsRight — `array`
   *
   *
   */
  itemsRight?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
};

export type Documents =
  | Home
  | Landing
  | Infos
  | Settings
  | PageModulaire
  | Lieu
  | Studio;
