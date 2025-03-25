import { useState, useEffect, useCallback } from "react";
import useThrottle from "./useThrottle";

const SCREEN = {
  TABLET: 764,
  DESKTOP: 1260,
};

export const useResize = () => {
  const isClient = typeof window !== "undefined";

  const getWindowSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : SCREEN.DESKTOP,
      height: isClient ? window.innerHeight : 0,
    }),
    [isClient]
  );

  const [windowSize, setWindowSize] = useState(getWindowSize);
  const throttledHandleWindowResize = useThrottle(
    () => setWindowSize(getWindowSize()),
    1000
  );

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => throttledHandleWindowResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [throttledHandleWindowResize]);

  return {
    windowSize,
    isScreenMobile: windowSize.width < SCREEN.TABLET,
    isScreenTablet:
      windowSize.width >= SCREEN.TABLET && windowSize.width < SCREEN.DESKTOP,
    isScreenDesktop: windowSize.width >= SCREEN.DESKTOP,
  };
};
