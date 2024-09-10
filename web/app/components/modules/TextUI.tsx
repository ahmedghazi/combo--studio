import React from "react";
import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/app/utils/portableTextComponents";
import clsx from "clsx";
import { SanityReference, TextUI } from "@/app/types/schema";
import { _localizeField } from "@/app/utils/utils";
import { SanityImageAsset } from "sanity-codegen";
import AOS from "../ui/AOS";

type Props = {
  input: TextUI;
};

const ModuleTextUI = ({ input }: Props) => {
  const {
    look,
    title,
    text,
    backgroundColor,
    backgroundImage,
    foregroundColor,
  } = input;
  // console.log(title);

  const style = {
    "--backgroundColor": backgroundColor,
    "--color": foregroundColor,
    "--backgroundImage": backgroundImage?.asset.url,
    backgroundImage: `url(${backgroundImage?.asset.url})`,
  } as React.CSSProperties;

  return (
    <section className="module module--text-ui">
      <div className={clsx("inner", `is-${look}`)} style={style}>
        {look === "default" && (
          <div className="text mx-auto">
            {text && (
              <AOS>
                <PortableText
                  value={_localizeField(text)}
                  components={portableTextComponents}
                />
              </AOS>
            )}
          </div>
        )}
        {look === "offset" && (
          <div className="mx-auto">
            <h2 className="title">
              {_localizeField(title) || "localized title"}
            </h2>
            <div className="text ">
              {text && (
                <AOS>
                  <PortableText
                    value={_localizeField(text)}
                    components={portableTextComponents}
                  />
                </AOS>
              )}
            </div>
          </div>
        )}
        {look === "columns" && (
          <div className="md:flex justify-center">
            <div className="w-10/12">
              <h2 className="title text-md md:text-xl font-secondary text-center">
                {_localizeField(title) || "localized title"}
              </h2>
              <div className="text">
                {text && (
                  <AOS>
                    <PortableText
                      value={_localizeField(text)}
                      components={portableTextComponents}
                    />
                  </AOS>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModuleTextUI;
