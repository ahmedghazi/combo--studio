import { SplitImageTextUI } from "@/app/types/schema";
import portableTextComponents from "@/app/utils/portableTextComponents";
import { _localizeField } from "@/app/utils/utils";
import { PortableText } from "next-sanity";
import React from "react";

type Props = {
  input: SplitImageTextUI;
};

const ModuleSplitImageTextUI = ({ input }: Props) => {
  return (
    <section className="module module--split-image-text-ui">
      <div
        className=""
        style={{
          backgroundImage: `url(${input.image?.asset.url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex">
          <div className="w-1/2 ">
            <div className="bg"></div>
            <div className="panel">
              <h2 className="headline">{_localizeField(input.title)}</h2>
              <div className="text">
                <PortableText
                  value={_localizeField(input.text)}
                  components={portableTextComponents}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default ModuleSplitImageTextUI;
