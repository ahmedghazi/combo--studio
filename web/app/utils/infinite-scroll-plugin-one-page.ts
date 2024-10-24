import { gsap, Power4 } from "gsap";
import _ from "lodash";

export function infinitScrollOnePage(
  wrapper: HTMLDivElement,
  items: HTMLElement[],
  direction: string,
  onScroll: Function,
  rootMargin: boolean
) {
  var imagesBoundingRect: any = null,
    // deltaTotal: number = 0,
    wrapY: any,
    lerpCache: number = 0,
    rootMarginSize: number = 0,
    // isScrolling: boolean = false,
    // isNotScrolling: boolean = true,
    // prevDeltaY: number = 0,
    step = 0;

  if (!wrapper) return;

  window.addEventListener("resize", _onResize);

  wrapper.addEventListener(
    "wheel",
    _.throttle(_onWheel, 2000, { leading: true, trailing: false })
  );
  _onResize();
  _animeIntro();

  function _animeIntro() {
    const nextVal = (window.innerHeight - rootMarginSize) * 1;
    _transition(nextVal);

    // var obj = { lerpCache: 0 };
    // const nextVal = (window.innerHeight - rootMarginSize) * 1;
    // gsap.to(obj, 1, {
    //   lerpCache: nextVal,
    //   duration: 4,
    //   delay: 1,
    //   ease: Power4.easeInOut,
    //   onUpdate: (o) => {
    //     lerpCache = obj.lerpCache;
    //     _update();
    //   },
    // });
  }
  function _onResize() {
    imagesBoundingRect = items.map(function (article) {
      return article.getBoundingClientRect();
    });

    //set range
    //start pos => minus first height
    if (window.innerWidth < 1080) {
      var first = -imagesBoundingRect[0].width;
      //end pos => total width
      var last =
        imagesBoundingRect.reduce(function (
          accumulateur: number,
          current: any
        ) {
          return accumulateur + current.width;
        },
        0) - imagesBoundingRect[0].width;
    } else {
      var first = -imagesBoundingRect[0].height;
      //end pos => total height
      var last =
        imagesBoundingRect.reduce(function (
          accumulateur: number,
          current: any
        ) {
          return accumulateur + current.height;
        },
        0) - imagesBoundingRect[0].height;
    }

    wrapY = gsap.utils.wrap(first, last);

    if (rootMargin) {
      const header = document.querySelector("header");
      if (header) {
        const bounding = header.getBoundingClientRect();
        rootMarginSize = bounding.height;
      }
    }
    step = window.innerHeight - rootMarginSize;
  }
  // console.log(wrapY);

  function _onWheel(e: WheelEvent | any) {
    // console.log({ lerpCache });
    const direction = e.deltaY > 0 ? 1 : -1;
    // const step = window.innerHeight - rootMarginSize;
    const gap = step * direction;
    const nextVal = lerpCache + gap;
    _transition(nextVal);
    // const direction = e.deltaY > 0 ? 1 : -1;
    // const step = window.innerHeight - rootMarginSize;
    // const gap = step * direction;
    // const nextVal = lerpCache + gap;
    // const rotation = (nextVal * 180) / step;
    // var obj = { lerpCache: lerpCache };
    // // const nextVal = window.innerHeight * 1 - rootMarginSize;
    // gsap.to(obj, 1, {
    //   lerpCache: nextVal,
    //   duration: 4,
    //   delay: 0,
    //   ease: Power4.easeInOut,
    //   onUpdate: (o) => {
    //     lerpCache = obj.lerpCache;
    //     _update();
    //     if (typeof onScroll === "function") onScroll(rotation);
    //   },
    // });
  }

  function _transition(nextVal: number) {
    const step = window.innerHeight - rootMarginSize;
    const rotation = (nextVal * 180) / step;
    var obj = { lerpCache: lerpCache };
    gsap.to(obj, 1, {
      lerpCache: nextVal,
      duration: 4,
      delay: 0,
      ease: Power4.easeInOut,
      onUpdate: (o) => {
        lerpCache = obj.lerpCache;
        _update();
        if (typeof onScroll === "function") onScroll(rotation);
      },
    });
  }

  function _update() {
    items.forEach(function (el, index) {
      const lerpCacheByDirection =
        direction === "up" ? lerpCache * -1 : lerpCache;
      // console.log(lerpCache);
      if (window.innerWidth < 1080) {
        // MOBILE
        const nextY: number = wrapY(
          lerpCacheByDirection + index * imagesBoundingRect[index].width
        );
        el.style.transform = "translate3d(" + nextY + "px,0, 0)";
        // if (typeof onScroll === "function") onScroll(nextY);
      } else {
        // DESKTOP
        let nextY: number = wrapY(
          lerpCacheByDirection + index * imagesBoundingRect[index].height
        );
        if (rootMargin) nextY += rootMarginSize;
        el.style.transform = "translate3d(0," + nextY + "px, 0)";
        // if (typeof onScroll === "function") onScroll(nextY);
      }
      el.style.opacity = "1";
    });
  }

  /*
    for easing scroll
    */
  function lerp(start: number, end: number, amt: number) {
    return (1 - amt) * start + amt * end;
  }
}

// const throttle = (callback: Function, delay: number) => {
//   var wait = false;
//   return function () {
//     if (!wait) {
//       callback();
//       wait = true;
//       setTimeout(function () {
//         wait = false;
//       }, delay);
//     }
//   };
// };

// const debounce = (callback: Function, delay: number) => {
//   let timeout: NodeJS.Timeout | undefined;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       callback();
//     }, delay);
//   };
// };
