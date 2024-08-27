import { groq } from "next-sanity";
import { cachedClient, client } from "./sanity-client";
import { Home, Infos, Landing, Settings, Tag } from "../types/schema";
import {
  contactsUI,
  heroUI,
  // moduleImage,
  // moduleText,
  // moduleTextImage,
  // productCard,
  seo,
  textUI,
} from "./fragments";
// import { PublisherExtend, TagExtend } from "../types/extend";
import { cache } from "react";

// const clientFetch = cache(client.fetch.bind(client));
// export const cachedClient = cache(client.fetch.bind(client));

/**
 * SETTINGS
 */
export async function getSettings(): Promise<Settings> {
  return client.fetch(
    groq`*[_type == "settings"][0]{
      ...,
      comboStudioLogo{
        ...,
			  asset->
      },
      navPrimary[]{
        ...,
        _type == 'linkInternal' => {
          ...,
          link->{
            _type,
            slug
          }
        }
      },
      comboLogo{
        ...,
			  asset->
      },
    }`
  );
}

/**
 * Landing
 */

export const landingQ = groq`*[_type == "landing"][0]{
  ...,
  seo{
    ${seo}
  },

  modules[]{
    ...,
    ${heroUI},
    ${textUI},
    ${contactsUI}
  }
}`;
export async function getLanding(): Promise<Landing> {
  // return client.fetch(landingQ, {});
  return cachedClient(landingQ, {});
}
