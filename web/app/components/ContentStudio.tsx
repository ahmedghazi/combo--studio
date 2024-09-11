import React from "react";
import { Studio } from "../types/schema";
import AOS from "./ui/AOS";
import Image from "next/image";
import { urlFor } from "../utils/sanity-utils";
import { _localizeField } from "../utils/utils";
import { PortableText } from "next-sanity";
import portableTextComponents from "../utils/portableTextComponents";
import SummaryDetailFramer from "./ui/SummaryDetailFramer";

type Props = {
  input: Studio;
};

const ContentStudio = ({ input }: Props) => {
  const { imageHero, title, location, text, infos } = input;
  // console.log(input);
  return (
    <article className="content--studio">
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
      <div className="py-xl">
        <div className="row center-xs">
          <div className="col-md-10 col-xs-12">
            <AOS>
              <div className="header mb-xl">
                <div className="location">{location}</div>
                <h4 className="headline text-center">
                  {_localizeField(title)}
                </h4>
              </div>
            </AOS>

            <div className="flex flex-wrap items-end gap-y-xl ">
              <div className="md:w-1/2 pr-lg">
                <AOS>
                  <div className="text">
                    <PortableText
                      value={_localizeField(text)}
                      components={portableTextComponents}
                    />
                  </div>
                </AOS>
              </div>
              {infos?.map((item, i) => (
                <div key={i} className="md:w-1/2">
                  <AOS>
                    <SummaryDetailFramer
                      summary={
                        <button className="btn--pill">
                          {_localizeField(item.summary)}
                        </button>
                      }
                      detail={
                        <div className="text">
                          <PortableText
                            value={_localizeField(item.detail)}
                            components={portableTextComponents}
                          />
                        </div>
                      }
                    />
                  </AOS>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContentStudio;
