"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import css from "./Gallery.module.css";
import { useResize } from "@/hooks/useResize";
import Container from "@/components/Container/Container";
import {
  ABOUT_GALLERY,
  ABOUT_GALLERY_MOB,
} from "../../../../../../../public/images/gallery";
import { Icon } from "@/components/Icon/Icon";
import "keen-slider/keen-slider.min.css";

export default function Gallery() {
  const { isScreenMobile, isScreenDesktop } = useResize();

  const [sliderRef, slider] = useKeenSlider<HTMLUListElement>({
    mode: "free-snap",
    loop: true,
    slides: {
      perView: 1,
      // perView: isScreenDesktop ? 3 : 1,
      spacing: 20,
      origin: "center",
    },
  });

  const slidesToRender = isScreenMobile ? ABOUT_GALLERY_MOB : ABOUT_GALLERY;

  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>ГАЛЕРЕЯ</h2>
        <button
          type="button"
          className={css.buttonLeft}
          onClick={() => slider.current?.prev()}
        >
          <Icon glyph="arrow" />
        </button>
        <ul ref={sliderRef} className={`keen-slider ${css.cardList}`}>
          {slidesToRender.map(({ src, width, height }) => (
            <li key={src} className={`keen-slider__slide ${css.cardItem}`}>
              <Image src={src} alt="card item" width={width} height={height} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={css.buttonRight}
          onClick={() => slider.current?.next()}
        >
          <Icon glyph="arrow" />
        </button>
      </Container>
    </section>
  );
}
