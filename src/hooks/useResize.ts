import { useState, useEffect } from "react";

const SCREEN = {
  TABLET: 764,
  DESKTOP: 1260,
};

export const useResize = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = (event: UIEvent) => {
        if (event.target instanceof Window) {
          setWidth(event.target.innerWidth);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return {
    width,
    isScreenMobile: width && width < SCREEN.TABLET,
    isScreenTablet: width && width >= SCREEN.TABLET,
    isScreenDesktop: width && width >= SCREEN.DESKTOP,
  };
};
