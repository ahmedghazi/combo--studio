import React from "react";
import { Studio } from "../types/schema";
import AOS from "./ui/AOS";
import Image from "next/image";
import { urlFor } from "../utils/sanity-utils";
import { _localizeField } from "../utils/utils";
import { PortableText } from "next-sanity";
import portableTextComponents from "../utils/portableTextComponents";

type Props = {
  input: Studio;
};

const ContentStudio = ({ input }: Props) => {
  const { imageHero, title, text } = input;
  return (
    <article>
      {imageHero && imageHero?.image && (
        <AOS>
          <Image
            src={urlFor(imageHero?.image?.asset, 2000)}
            width={imageHero?.image.asset?.metadata?.dimensions.width || 2000}
            height={imageHero?.image.asset?.metadata?.dimensions.height || 2000}
            alt={imageHero.caption || ""}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100vh",
              aspectRatio: `${imageHero?.image.asset?.metadata?.dimensions.width} / ${imageHero?.image.asset?.metadata?.dimensions.height}`,
              objectFit: "cover",
            }}
            blurDataURL={imageHero?.image.asset?.metadata?.lqip}
            // placeholder='blur'
            // placeholder={logo.asset?.metadata?.lqip}
          />
        </AOS>
      )}
      <AOS>
        <div className="header">
          <h4>{_localizeField(title)}</h4>
        </div>
      </AOS>

      <div className="grid md:grid-cols-2 ">
        <AOS>
          <PortableText
            value={_localizeField(text)}
            components={portableTextComponents}
          />
        </AOS>
      </div>
    </article>
  );
};

export default ContentStudio;
