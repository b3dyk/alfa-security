import { useEffect, useState } from "react";

export const useMobMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((p) => !p);
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => e.preventDefault();
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    } else {
      document.body.style.overflowY = "visible";
      document.removeEventListener("touchmove", handleTouchMove);
    }

    return () => document.removeEventListener("touchmove", handleTouchMove);
  }, [isMenuOpen]);

  return { isMenuOpen, handleMenu };
};
