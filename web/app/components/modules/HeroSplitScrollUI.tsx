import React, { useEffect, useRef, useState } from "react";
import {
  HeroSplitScrollUI,
  HeroUI,
  SanityImageAsset,
  SanityReference,
} from "@/app/types/schema";
import { urlFor } from "@/app/utils/sanity-utils";
import Image from "next/image";
import { infinitScroll } from "@/app/utils/ds-plugin";
import { _localizeField } from "@/app/utils/utils";
import { useScroll } from "@/app/hooks/useScroll";

type Props = {
  input: HeroSplitScrollUI;
};

const ModuleHeroSplitScrollUI = ({ input }: Props) => {
  const { titleLeft, itemsLeft, titleRight, itemsRight } = input;
  const ref = useRef<HTMLDivElement>(null);
  // const refSvg = useRef<SVGSVGElement>(null);
  const [rotate, setRotate] = useState<number>(0);
  useEffect(() => {
    // return;
    if (ref && ref.current) {
      const itemsLeft = Array.from(
        ref.current.querySelectorAll(
          ".column--left article"
        ) as NodeListOf<HTMLElement>
      );
      infinitScroll(ref.current, itemsLeft, "down", onScroll);

      const itemsRight = Array.from(
        ref.current.querySelectorAll(
          ".column--right article"
        ) as NodeListOf<HTMLElement>
      );
      infinitScroll(ref.current, itemsRight, "up", onScroll);
    }
  }, []);

  const onScroll = (val: number) => {
    setRotate(val);
  };

  // const { scrollY } = useScroll();
  // useEffect(() => {
  //   // refSvg.current?.style
  //   setRotate((prev) => scrollY / 5);
  // }, [scrollY]);

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
          <div className="title headline">{_localizeField(titleLeft)}</div>
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
          <div className="title headline">{_localizeField(titleRight)}</div>
        </div>

        <svg
          id="3a4b646a-49cf-4dc7-8559-08d33fc0e5ea"
          data-name="Calque 1"
          xmlns="http://www.w3.org/2000/svg"
          width="230.09"
          height="206.01"
          viewBox="0 0 230.09 206.01"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
        >
          <path
            d="M130.31,88h24.56c0,23.16-13.76,37.67-38.92,37.67-27.65,0-40.78-21.92-40.78-56.82S88.3,12,116.42,12C142.05,12,154,26.66,154,51.52H129.39c0-11.27-2.78-20.69-13.29-20.69-13.6,0-16.83,13.44-16.83,38s4.48,38,17.61,38c9.88,0,13.44-7.1,13.44-18.83Z"
            transform="translate(0 -11.99)"
            fill="white"
          />
          <path
            d="M65.36,148.62,53.07,127.36c20.08-11.58,39.51-6.94,52.11,14.86,13.84,23.94,1.39,46.25-28.85,63.7-29.84,17.21-55.79,17-69.86-7.29C-6.34,176.43.41,158.81,22,146.37l12.29,21.26c-9.77,5.63-16.54,12.75-11.29,21.85,6.79,11.77,20.06,7.86,41.33-4.42s30.67-22.86,24.11-34.23C83.44,142.27,75.52,142.76,65.36,148.62Z"
            transform="translate(0 -11.99)"
            fill="white"
          />
          <path
            d="M151.54,172l-12.29,21.26c-20.08-11.58-25.77-30.74-13.17-52.53,13.83-23.94,39.39-24.33,69.63-6.88s42.66,39.78,28.61,64.11c-12.82,22.2-31.49,25.15-53,12.73l12.29-21.26c9.76,5.63,19.32,7.94,24.58-1.15,6.79-11.77-3.23-21.3-24.5-33.56S148.53,139.63,142,151c-5,8.57-.57,15.18,9.61,21Z"
            transform="translate(0 -11.99)"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default ModuleHeroSplitScrollUI;
