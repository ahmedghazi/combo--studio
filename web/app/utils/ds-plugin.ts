import gsap from "gsap";

export function infinitScroll(
  wrapper: HTMLDivElement,
  items: HTMLElement[],
  direction: string
) {
  // console.log({ direction });
  // wrapper = document.querySelector(".scroller");
  // console.log(wrapper);
  // console.log(items);
  var imagesBoundingRect: any = null,
    deltaTotal = 0,
    wrapY: any,
    lerpCache = 0;

  if (!wrapper) return;
  // articlesElement = Array.from(wrapper.querySelectorAll("article"));
  // articlesElement = wrapper.querySelectorAll("article");

  window.addEventListener("resize", _onResize);
  wrapper.addEventListener("wheel", _onWheel);
  _onResize();

  requestAnimationFrame(_update);

  function _onResize() {
    imagesBoundingRect = items.map(function (article) {
      return article.getBoundingClientRect();
    });
    // console.log(imagesBoundingRect);
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
    // console.log(wrapY);
  }

  function _onWheel(e: WheelEvent | any) {
    deltaTotal = deltaTotal - e.deltaY;
    lerpCache = lerp(lerpCache, deltaTotal, 0.1);
  }

  function _update() {
    items.forEach(function (el, index) {
      const lerpCacheByDirection =
        direction === "up" ? lerpCache * -1 : lerpCache;

      if (window.innerWidth < 1080) {
        const nextY = wrapY(
          lerpCacheByDirection + index * imagesBoundingRect[index].width
        );
        el.style.transform = "translate3d(" + nextY + "px,0, 0)";
      } else {
        const nextY = wrapY(
          lerpCacheByDirection + index * imagesBoundingRect[index].height
        );
        el.style.transform = "translate3d(0," + nextY + "px, 0)";
      }
      el.style.opacity = "1";
    });

    requestAnimationFrame(_update);
  }

  /*
    for easing scroll
    */
  function lerp(start: number, end: number, amt: number) {
    return (1 - amt) * start + amt * end;
  }
}
