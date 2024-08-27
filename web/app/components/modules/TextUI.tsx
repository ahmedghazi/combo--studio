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
  const { text, backgroundColor, backgroundImage, foregroundColor } = input;

  const style = {
    "--backgroundColor": backgroundColor,
    "--color": foregroundColor,
    "--backgroundImage": backgroundImage?.asset.url,
    backgroundImage: `url(${backgroundImage?.asset.url})`,
  } as React.CSSProperties;

  return (
    <section className='module module--text-ui'>
      <div className='inner' style={style}>
        {text && (
          <div className='text mx-auto'>
            <AOS>
              <PortableText
                value={_localizeField(text)}
                components={portableTextComponents}
              />
            </AOS>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModuleTextUI;
