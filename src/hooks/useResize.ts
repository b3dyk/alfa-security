import { useState, useEffect } from "react";
import useThrottle from "./useThrottle";

const SCREEN = {
  TABLET: 764,
  DESKTOP: 1260,
};

export const useResize = () => {
  const getWindowSize = (): { width: number; height: number } => {
    if (typeof window === "undefined") return { width: 0, height: 0 };

    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleWindowResize = () => setWindowSize(getWindowSize());
  const throttledHandleWindowResize = useThrottle(handleWindowResize, 1000);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", throttledHandleWindowResize);

    return () =>
      window.removeEventListener("resize", throttledHandleWindowResize);
  }, [throttledHandleWindowResize]);

  //==============================================================================================
  // const [width, setWidth] = useState<number>(window.innerWidth);

  // useEffect(
  //   () => {
  //     // if (typeof window !== "undefined") {
  //     //   const handleResize = (event: UIEvent) => {
  //     //     if (event.target instanceof Window) {
  //     //       setWidth(event.target.innerWidth);
  //     //     }
  //     //   };

  //     //   window.addEventListener("resize", handleResize);
  //     //   return () => {
  //     //     window.removeEventListener("resize", handleResize);
  //     //   };
  //     // }

  //   },
  //   [
  //     width
  //   ]
  // );
  //=================================================================================================
  return {
    windowSize,
    isScreenMobile: windowSize.width < SCREEN.TABLET,
    isScreenTablet: windowSize.width >= SCREEN.TABLET,
    isScreenDesktop: windowSize.width >= SCREEN.DESKTOP,
  };
};
