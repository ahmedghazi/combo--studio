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
      infinitScroll(ref.current, itemsLeft, "down", onScroll, true);

      const itemsRight = Array.from(
        ref.current.querySelectorAll(
          ".column--right article"
        ) as NodeListOf<HTMLElement>
      );
      infinitScroll(ref.current, itemsRight, "up", onScroll, true);
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

        {/* <svg
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
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="117.94"
          height="105.8"
          viewBox="0 0 117.94 105.8"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
        >
          <path
            d="M66.86,39h12.6c0,11.9-7.1,19.3-20,19.3-14.2,0-20.9-11.3-20.9-29.2S45.36,0,59.76,0C73,0,79.06,7.5,79.06,20.3H66.46c0-5.8-1.4-10.6-6.8-10.6-7,0-8.6,6.9-8.6,19.5s2.3,19.5,9,19.5c5,0,6.8-3.7,6.8-9.7Z"
            transform="translate(-0.03)"
            fill="white"
          />
          <path
            d="M33.56,70.2l-6.3-10.9c10.3-5.9,20.3-3.6,26.7,7.6,7.1,12.3.7,23.8-14.8,32.7-15.3,8.8-28.6,8.8-35.8-3.7-6.6-11.4-3.1-20.5,8-26.9l6.3,10.9c-5,2.9-8.5,6.6-5.8,11.2,3.5,6,10.3,4,21.2-2.3s15.7-11.7,12.4-17.6c-2.6-4.3-6.7-4-11.9-1Z"
            transform="translate(-0.03)"
            fill="white"
          />
          <path
            d="M77.76,82.2l-6.3,10.9c-10.3-5.9-13.2-15.8-6.8-27,7.1-12.3,20.2-12.5,35.7-3.5,15.3,8.8,21.9,20.4,14.7,32.9-6.6,11.4-16.1,12.9-27.2,6.5l6.3-10.9c5,2.9,9.9,4.1,12.6-.6,3.5-6-1.7-10.9-12.6-17.2s-18-7.8-21.4-1.9c-2.4,4.4-.2,7.8,5,10.8Z"
            transform="translate(-0.03)"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default ModuleHeroSplitScrollUI;
