import { ListStudioUI, Studio } from "@/app/types/schema";
import { _localizeField } from "@/app/utils/utils";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import CardStudio from "../ui/CardStudio";
import ContentStudio from "../ContentStudio";

type Props = {
  input: ListStudioUI;
};

const ModuleListStudioUI = ({ input }: Props) => {
  const detailRef = useRef<HTMLDivElement | any>(null);
  const [detail, setDetail] = useState<Studio | null>(null);

  useEffect(() => {
    _onResize();
    window.addEventListener("resize", _onResize);

    return () => window.removeEventListener("resize", _onResize);
  }, [detail]);

  const _onResize = () => {
    if (detail) {
      const activeItem = document.querySelector<HTMLElement>(
        ".grid article.is-active"
      );

      // console.log(activeItem);
      if (activeItem) {
        const inner = activeItem.querySelector(".inner");
        if (inner) {
          const activeItemBounding: DOMRect = inner.getBoundingClientRect();

          // console.log(activeItemBounding);
          if (detailRef.current) {
            detailRef.current.style.top = `${
              // activeItem.offsetTop + activeItemBounding.height
              activeItem.offsetTop + activeItemBounding.height
            }px`;
            detailRef.current.style.display = "block";
          }

          const detailBounding = detailRef.current?.getBoundingClientRect();
          activeItem.style.paddingBottom = `${detailBounding?.height}px`;
        }

        // console.log(activeItem.offsetTop, activeItemBounding.height);
      }
    }
  };

  const _handleDetail = (event: MouseEvent, itemData: Studio) => {
    // console.log(itemData);
    const target = event.target as Element;
    target.classList.toggle("is-active");

    if (!target.classList.contains("is-active")) {
      const articles: NodeListOf<HTMLElement> =
        document.querySelectorAll(".grid article");
      articles.forEach((el) => {
        el.style.paddingBottom = "0";
      });

      // target.style.paddingBottom = '0';

      if (detailRef.current) detailRef.current.style.display = "none";

      setDetail(null);
    } else {
      setDetail(itemData);
      console.log(detailRef);
      setTimeout(() => {
        if (detailRef.current) {
          detailRef.current.scrollIntoView({
            behavior: "smooth",
            // block: "end",
            // inline: "nearest",
          });
        }
      }, 150);
    }
  };

  const _handleClose = () => {
    setDetail(null);
    if (detailRef.current) detailRef.current.style.display = "none";

    const activeItem = document.querySelector<HTMLElement>(
      ".grid article.is-active"
    );
    if (activeItem) {
      activeItem.style.paddingBottom = "0";
    }
  };

  return (
    <section className="module module--list-studio-ui ">
      <div className="grid grid-cols-3 gap-gutter grid-card">
        {input.items?.map((item, i) => (
          <CardStudio
            key={i}
            input={item}
            _onClick={(event: MouseEvent) => {
              _handleDetail(event, item);
            }}
          />
        ))}
      </div>
      <div className="detail" ref={detailRef}>
        {detail && (
          <div className="inner">
            <button className="btn--close" onClick={_handleClose}>
              close
            </button>
            <ContentStudio input={detail} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ModuleListStudioUI;
