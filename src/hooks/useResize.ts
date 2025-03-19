import { useState, useEffect } from "react";
import useThrottle from "./useThrottle";

const SCREEN = {
  TABLET: 764,
  DESKTOP: 1260,
};

export const useResize = () => {
  const isClient = typeof window !== "undefined";

  const getWindowSize = () => ({
    width: isClient ? window.innerWidth : SCREEN.DESKTOP,
    height: isClient ? window.innerHeight : 0,
  });

  const [windowSize, setWindowSize] = useState(getWindowSize);
  const throttledHandleWindowResize = useThrottle(
    () => setWindowSize(getWindowSize()),
    1000
  );

  useEffect(() => {
    if (!isClient) return;

    window.addEventListener("resize", throttledHandleWindowResize);
    return () =>
      window.removeEventListener("resize", throttledHandleWindowResize);
  }, [throttledHandleWindowResize]);

  return {
    windowSize,
    isScreenMobile: windowSize.width < SCREEN.TABLET,
    isScreenTablet:
      windowSize.width >= SCREEN.TABLET && windowSize.width < SCREEN.DESKTOP,
    isScreenDesktop: windowSize.width >= SCREEN.DESKTOP,
  };
};
