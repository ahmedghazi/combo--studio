import React from "react";
import { Home, Infos } from "../types/schema";
import useLocale from "../context/LocaleContext";
import locales from "../config/i18n";

export const _linkResolver = (node: Home | Infos | any) => {
  // console.log(node);
  // console.log(node._type);
  if (!node || !node._type) return "/";
  switch (node._type) {
    // case "product":
    //   return `/product/${node.slug?.current}`;
    // case "publisher":
    //   return `/publisher/${node.slug?.current}`;
    // case "tag":
    //   return `/tag/${node.slug?.current}`;

    default:
      return `/${node.slug?.current}`;
  }
};

export const _localizeText = (text: string) => {
  // const locale = "fr"
  const { locale } = useLocale();
  const currentI18N = (locales as any)[`${locale}`];
  return currentI18N[text] ? currentI18N[text] : text;
};

export const _localizeField = (field: any) => {
  const { locale } = useLocale();
  // console.log(locale, field);
  if (!field) return "";
  return field && field[locale] ? field[locale] : field["fr"];
};

export const _preloadImages = (urls: Array<string | any>) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

export const _revealEmail = (input: string) => {
  return input.replace("(at)", "@");
};

export const _slugify = (str: string) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};

export const _date = (d: string) => {
  const date: Date = new Date(d);

  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
  });
};

// export const _throttle = (func, wait) => {
//   let waiting = false;
//   return function () {
//     if (waiting) {
//       return;
//     }

//     waiting = true;
//     setTimeout(() => {
//       func.apply(this, arguments);
//       waiting = false;
//     }, wait);
//   };
// };

export function getScrollingElement() {
  var d = document;
  return d.documentElement.scrollHeight > d.body.scrollHeight &&
    d.compatMode.indexOf("CSS1") == 0
    ? d.documentElement
    : d.body;
}
