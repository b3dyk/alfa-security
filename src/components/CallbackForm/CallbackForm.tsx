"use client";

import Container from "@/components/Container/Container";
import { Icon } from "@/components/Icon/Icon";
import { useResize } from "@/hooks/useResize";
import css from "./CallbackForm.module.css";
import FormWindow from "./components/FormWindow/FormWindow";

export default function CallbackForm() {
  const { isScreenMobile } = useResize();

  return (
    <section className={css.section}>
      {!isScreenMobile && (
        <Icon glyph="callbackPolygon" className={css.polygon} />
      )}
      <Container>
        <FormWindow />
      </Container>
    </section>
  );
}
