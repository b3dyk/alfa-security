import { AUCTION_CARDS } from "@/helpers/auctionCards";
import { useResize } from "@/hooks/useResize";
import { useState } from "react";

export const useCarousel = () => {
  const { isScreenDesktop } = useResize();
  const [current, setCurrent] = useState(0);
  const cardsShown = isScreenDesktop ? 2 : 1;

  const carouselStyles = {
    translate: `calc(${current} * (var(--width) + var(--gap)) * -1) 0 0`,
  };

  const next = () => {
    setCurrent((p) => {
      if (p === AUCTION_CARDS.length - cardsShown) return 0;
      return p + 1;
    });
  };

  const prev = () => {
    setCurrent((p) => {
      if (p === 0) return AUCTION_CARDS.length - cardsShown;
      return p - 1;
    });
  };

  return {
    current,
    next,
    prev,
    isDisabled: AUCTION_CARDS.length <= cardsShown,
    carouselStyles,
  };
};
