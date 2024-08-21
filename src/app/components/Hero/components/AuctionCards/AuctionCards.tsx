"use client";

import Image from "next/image";
import css from "./AuctionCards.module.css";
import { AUCTION_CARDS } from "@/helpers/auctionCards";
import { Icon } from "@/components/Icon/Icon";
import { useCarousel } from "./hooks/useCarousel";

export default function AuctionCards() {
  const { next, prev, isDisabled, carouselStyles } = useCarousel();
  return (
    <div className={css.auctionSlider}>
      <button
        type="button"
        className={css.buttonLeft}
        disabled={isDisabled}
        onClick={prev}
      >
        <Icon glyph="arrow" />
      </button>
      <div className={css.carouselWrapper}>
        <ul className={css.cardList} style={carouselStyles}>
          {AUCTION_CARDS.map(({ id, src, title, description }) => (
            <li key={id} className={css.cardItem}>
              <Image
                src={src}
                alt="auction"
                width={150}
                height={195}
                className={css.cardImage}
              />
              <div className={css.textWrapper}>
                <h3 className={css.cardTitle}>{title}</h3>
                <p className={css.cardDescription}>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={css.buttonRight}
        disabled={isDisabled}
        onClick={next}
      >
        <Icon glyph="arrow" />
      </button>
    </div>
  );
}
