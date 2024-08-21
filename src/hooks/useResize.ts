"use client";

import { useState, useEffect } from "react";

const SCREEN = {
  TABLET: 764,
  DESKTOP: 1260,
};

export const useResize = () => {
  const initSize = window.innerWidth;
  const [width, setWidth] = useState(initSize);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      if (event.target instanceof Window) {
        setWidth(event.target.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width < SCREEN.TABLET,
    isScreenTablet: width >= SCREEN.TABLET,
    isScreenDesktop: width >= SCREEN.DESKTOP,
  };
};
