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
  const hasImage = backgroundImage && backgroundImage?.asset.url !== "";

  return (
    <section className="module module--text-ui">
      <div className={clsx("inner", `is-${look}`)} style={style}>
        {hasImage && <div className="bg-blend"></div>}
        <div className="row center-xs">
          <div className="col-md-10">
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
                <AOS>
                  <h2 className="headline">
                    {_localizeField(title) || "localized title"}
                  </h2>
                </AOS>

                <div className="row">
                  <div className="col-md-7 col-md-offset-3 ">
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
                </div>
              </div>
            )}
            {look === "columns" && (
              <>
                <AOS>
                  <h2 className="headline">
                    {_localizeField(title) || "localized title"}
                  </h2>
                </AOS>
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleTextUI;
