import React, { useEffect, useRef, useState } from "react";
import { Figure, HeroSplitScrollUI } from "@/app/types/schema";
import { urlFor } from "@/app/utils/sanity-utils";
import Image from "next/image";
import { infinitScroll } from "@/app/utils/infinite-scroll-plugin";
import { _localizeField } from "@/app/utils/utils";

type Props = {
  input: HeroSplitScrollUI;
};

const ModuleHeroSplitScrollUI = ({ input }: Props) => {
  const { itemsLeft, itemsRight } = input;
  const totalImages: number =
    (itemsLeft?.length || 0) + (itemsRight?.length || 0);

  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState<number>(0);
  const [loadCount, setLoadCount] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (!ready) return;
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
  }, [ready]);

  const onScroll = (val: number) => {
    setRotate(val);
  };

  const _handleImagesLoaded = () => {
    setLoadCount((prev) => prev + 1);
  };

  useEffect(() => {
    // console.log(loadCount);
    setReady(loadCount === totalImages);
  }, [loadCount]);

  // const _titleLeftLocalized = _localizeField(titleLeft);
  // const _titleRightLocalized = _localizeField(titleRight);

  return (
    <section className="module module--hero-split-scroll-ui">
      <div className="scroller grid grid-rows-2 md:grid-cols-2" ref={ref}>
        <div className="column column--left">
          {itemsLeft &&
            itemsLeft.map((item: Figure | any, i: number) => (
              <article className="item" key={i}>
                <Image
                  src={urlFor(item?.image.asset, 1500)}
                  alt={item.caption || ""}
                  priority={true}
                  width={item?.image.asset.metadata.dimensions.width}
                  height={item?.image.asset.metadata.dimensions.height}
                  blurDataURL={item?.image.asset?.metadata?.lqip}
                  placeholder="blur"
                  onLoad={_handleImagesLoaded}
                />
                <div className="title headline">
                  {ready ? (
                    <span>{item.caption} </span>
                  ) : (
                    <span>{loadCount}</span>
                  )}
                </div>
              </article>
            ))}
        </div>
        <div className="column column--right">
          {itemsRight &&
            itemsRight.map((item: Figure | any, i: number) => (
              <article className="item" key={i}>
                <Image
                  src={urlFor(item?.image.asset, 1500)}
                  alt={item.caption || ""}
                  priority={true}
                  width={item?.image.asset.metadata.dimensions.width}
                  height={item?.image.asset.metadata.dimensions.height}
                  blurDataURL={item?.image.asset?.metadata?.lqip}
                  placeholder="blur"
                  onLoad={_handleImagesLoaded}
                />
                <div className="title headline">
                  {ready ? (
                    <span>{item.caption} </span>
                  ) : (
                    <span>{totalImages}</span>
                  )}
                </div>
              </article>
            ))}
        </div>

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
