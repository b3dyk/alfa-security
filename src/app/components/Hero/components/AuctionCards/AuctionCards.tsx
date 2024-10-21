"use client";

import Image from "next/image";
import css from "./AuctionCards.module.css";
import { AUCTION_CARDS } from "@/helpers/auctionCards";
import { Icon } from "@/components/Icon/Icon";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useResize } from "@/hooks/useResize";

export default function AuctionCards() {
  const { isScreenDesktop } = useResize();

  const [sliderRef, slider] = useKeenSlider<HTMLUListElement>({
    loop: true,
    slides: {
      perView: isScreenDesktop ? 2 : 1,
      spacing: 20,
      origin: isScreenDesktop ? "auto" : "center",
    },
  });

  return (
    <div className={css.auctionSlider}>
      <button
        type="button"
        className={css.buttonLeft}
        onClick={() => slider.current?.prev()}
      >
        <Icon glyph="arrow" />
      </button>
      <div className={css.carouselWrapper}>
        <ul ref={sliderRef} className={`keen-slider ${css.cardList}`}>
          {AUCTION_CARDS.map(({ id, src, title, description }) => (
            <li key={id} className={`keen-slider__slide ${css.cardItem}`}>
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
        onClick={() => slider.current?.next()}
      >
        <Icon glyph="arrow" />
      </button>
    </div>
  );
}
