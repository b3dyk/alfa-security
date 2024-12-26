"use client";

import Image from "next/image";
import css from "./AuctionCards.module.css";
import { Icon } from "@/components/Icon/Icon";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useResize } from "@/hooks/useResize";
import ROUTES from "@/helpers/routes";

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

  const auctionCards = ROUTES.find((item) => item.name === "Акції")?.scalable;

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
          {auctionCards?.map(({ id, src }) => (
            <li key={id} className={`keen-slider__slide ${css.cardItem}`}>
              <Image
                src={src!}
                alt="auction"
                width={150}
                height={195}
                className={css.cardImage}
              />
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
