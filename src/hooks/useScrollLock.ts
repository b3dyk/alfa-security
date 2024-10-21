import { useCallback, useEffect } from "react";

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.paddingRight = "var(--scrollbar-compensation)";
    document.body.dataset.scrollLock = "true";

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.paddingRight = `0px`;
    delete document.body.dataset.scrollLock;

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, []);

  useEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    document.documentElement.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );
  }, []);

  //   useEffect(() => {
  //     if (isActive) {
  //       lockScroll(window.scrollY);
  //     }
  //     return () => {
  //       const getBodyTop: string = getComputedStyle(document.body).top;
  //       const getScrollY: number =
  //         parseInt(getBodyTop.replace(/\D/g, ""), 10) || 0;
  //       unlockScroll(getScrollY);
  //     };
  //   }, [isActive, lockScroll, unlockScroll]);

  return { lockScroll, unlockScroll };
};
