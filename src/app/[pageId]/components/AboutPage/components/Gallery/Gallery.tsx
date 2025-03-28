"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import css from "./Gallery.module.css";
import { useResize } from "@/hooks/useResize";
import Container from "@/components/Container/Container";
import { ABOUT_GALLERY } from "../../../../../../../public/images/gallery";
import { Icon } from "@/components/Icon/Icon";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

export default function Gallery() {
  const { isScreenMobile } = useResize();
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
          {ABOUT_GALLERY.map(({ src }) => (
            <li key={src} className={`keen-slider__slide ${css.cardItem}`}>
              <Image
                src={src}
                alt="card item"
                width={isScreenMobile ? 340 : 800}
                height={isScreenMobile ? 255 : 600}
              />
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
