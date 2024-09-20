import React, { useEffect, useRef } from "react";
import {
  HeroSplitScrollUI,
  HeroUI,
  SanityImageAsset,
  SanityReference,
} from "@/app/types/schema";
import { urlFor } from "@/app/utils/sanity-utils";
import Image from "next/image";
import { infinitScroll } from "@/app/utils/ds-plugin";

type Props = {
  input: HeroSplitScrollUI;
};

const ModuleHeroSplitScrollUI = ({ input }: Props) => {
  const { titleLeft, itemsLeft, titleRight, itemsRight } = input;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // return;
    if (ref && ref.current) {
      const itemsLeft = Array.from(
        ref.current.querySelectorAll(
          ".column--left article"
        ) as NodeListOf<HTMLElement>
      );
      infinitScroll(ref.current, itemsLeft, "down");

      const itemsRight = Array.from(
        ref.current.querySelectorAll(
          ".column--right article"
        ) as NodeListOf<HTMLElement>
      );
      infinitScroll(ref.current, itemsRight, "up");
    }
  }, []);

  return (
    <section className="module module--hero-split-scroll-ui">
      <div className="scroller grid grid-rows-2 md:grid-cols-2" ref={ref}>
        <div className="column column--left">
          {itemsLeft &&
            itemsLeft.map((item: SanityImageAsset | any, i: number) => (
              <article className="item" key={i}>
                <Image
                  src={urlFor(item?.asset, 2000)}
                  alt={item.caption || ""}
                  width={item?.asset.metadata.dimensions.width}
                  height={item?.asset.metadata.dimensions.height}
                />
              </article>
            ))}
        </div>
        <div className="column column--right">
          {itemsRight &&
            itemsRight.map((item: SanityImageAsset | any, i: number) => (
              <article className="item" key={i}>
                <Image
                  src={urlFor(item?.asset, 2000)}
                  alt={item.caption || ""}
                  width={item?.asset.metadata.dimensions.width}
                  height={item?.asset.metadata.dimensions.height}
                />
              </article>
            ))}
        </div>
      </div>
      <svg
        width="230"
        height="206"
        viewBox="0 0 230 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_29_246)">
          <path
            d="M130.294 75.9616H154.853C154.853 99.1178 141.096 113.63 115.93 113.63C88.2779 113.63 75.1468 91.7055 75.1468 56.8148C75.1468 21.924 88.2779 0 116.399 0C142.035 0 153.933 14.6682 153.933 39.5259H129.374C129.374 28.2607 126.595 18.834 116.086 18.834C102.485 18.834 99.2564 32.27 99.2564 56.8148C99.2564 81.3595 103.738 94.7956 116.869 94.7956C126.751 94.7956 130.313 87.6962 130.313 75.9616H130.294Z"
            fill="white"
          />
          <path
            d="M65.3425 136.629L53.0528 115.37C73.1311 103.792 92.5636 108.427 105.166 130.234C119.002 154.172 106.556 176.488 76.3209 193.933C46.4775 211.144 20.5284 210.968 6.45793 186.638C-6.36007 164.44 0.391397 146.819 21.9374 134.38L34.227 155.639C24.4618 161.272 17.6908 168.391 22.9354 177.485C29.726 189.259 42.9941 185.347 64.2662 173.065C85.6752 160.705 94.9315 150.202 88.3757 138.839C83.4247 130.273 75.499 130.762 65.3425 136.629Z"
            fill="white"
          />
          <path
            d="M151.526 160.04L139.237 181.299C119.159 169.721 113.464 150.554 126.067 128.767C139.902 104.829 165.46 104.437 195.695 121.883C225.93 139.328 238.356 161.663 224.305 185.993C211.487 208.19 192.818 211.144 171.292 198.725L183.581 177.465C193.346 183.098 202.896 185.406 208.16 176.312C214.951 164.538 204.932 155.013 183.659 142.751C162.25 130.39 148.513 127.633 141.937 138.996C136.986 147.562 141.37 154.172 151.546 160.04H151.526Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_29_246">
            <rect width="230" height="206" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default ModuleHeroSplitScrollUI;
