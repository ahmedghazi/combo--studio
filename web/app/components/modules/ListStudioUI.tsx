import { ListStudioUI, Studio } from "@/app/types/schema";
import { _localizeField } from "@/app/utils/utils";
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import CardStudio from "../ui/CardStudio";
import ContentStudio from "../ContentStudio";
import clsx from "clsx";
import AOS from "../ui/AOS";
import { publish, subscribe, unsubscribe } from "pubsub-js";

type Props = {
  input: ListStudioUI;
};

const ModuleListStudioUI = ({ input }: Props) => {
  const detailRef = useRef<HTMLDivElement | any>(null);
  const [detail, setDetail] = useState<Studio | null>(null);

  //use callback
  const _onResize = useCallback(() => {
    if (detail) {
      const activeItem = document.querySelector<HTMLElement>(
        ".grid article.is-active",
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
          // console.log(detailBounding);
          // console.log(detailBounding?.height);
          activeItem.style.paddingBottom = `${detailBounding?.height}px`;
        }

        // console.log(activeItem.offsetTop, activeItemBounding.height);
      }
    }
  }, [detail]);

  useEffect(() => {
    _onResize();
    window.addEventListener("resize", _onResize);
    const token = subscribe("SUMMARY_DETAIL_CHANGE", _onResize);

    return () => {
      window.removeEventListener("resize", _onResize);
      unsubscribe(token);
    };
  }, [detail, _onResize]);

  const _handleDetail = (event: MouseEvent, itemData: Studio) => {
    console.log("_handleDetail", event.type);
    const target = event.target as Element;
    target.classList.toggle("is-active");
    // console.log("_handleDetail");
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
    console.log("_handleClose");
    // setDetail(null);
    // if (detailRef.current) detailRef.current.style.display = "none";

    // if (detailRef.current) {
    //   const detailBounding = detailRef.current?.getBoundingClientRect();
    //   console.log(detailBounding);
    //   detailRef.current.style.height = `${detailBounding?.height}px`;
    //   detailRef.current.classList.add("is-closing");

    //   setTimeout(() => {
    //     detailRef.current.classList.remove("is-closing");
    //     setDetail(null);
    //     detailRef.current.style.height = `0px`;
    //   }, 1000);
    // }

    const articles: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".grid article.is-active",
    );
    let currentActive: HTMLElement | null = null;
    articles.forEach((el) => {
      if (el.classList.contains("is-active")) {
        currentActive = el;
      }
      el.classList.remove("is-active");
      el.style.paddingBottom = "0";
    });
    // return;
    setTimeout(() => {
      console.log(currentActive);
      if (currentActive) {
        currentActive?.scrollIntoView({
          behavior: "smooth",
          // block: "end",
          // inline: "nearest",
        });
      }
      setDetail(null);
      if (detailRef.current) detailRef.current.style.display = "none";
    }, 300);

    // publish("LIST_STUDIO_DETAIL_CHANGE");
  };

  return (
    <section className="module module--list-studio-ui ">
      <div
        className={clsx(
          "grid gap-gutter grid-card",
          `md:grid-cols-${input.gridSize || 3}`,
        )}
      >
        {input.items?.map((item, i) => (
          <CardStudio
            key={i}
            input={item}
            _onClick={(event: MouseEvent) => {
              // console.log(event);
              _handleDetail(event, item);
            }}
          />
        ))}
      </div>
      <div className="detail detail--studio" ref={detailRef}>
        {detail && (
          <div className="inner">
            <button className="btn--close" onClick={_handleClose}>
              fermer
            </button>
            <ContentStudio input={detail} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ModuleListStudioUI;
