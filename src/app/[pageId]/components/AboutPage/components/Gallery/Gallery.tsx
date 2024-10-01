"use client";

import { useResize } from "@/hooks/useResize";
import css from "./Gallery.module.css";
import Container from "@/components/Container/Container";

export default function Gallery() {
  const { isScreenMobile } = useResize();

  const iterable = isScreenMobile ? Array(1).fill(0) : Array(9).fill(0);

  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>ГАЛЕРЕЯ</h2>
        <ul>
          {iterable.map((item, idx) => (
            <li key={idx} className={css.card}>
              <div></div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
