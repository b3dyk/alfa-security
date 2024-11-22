"use client";

import { useState } from "react";
import css from "./Contact.module.css";
import { Icon } from "../Icon/Icon";
import PhonesList from "../PhonesList/PhonesList";
import { useResize } from "@/hooks/useResize";

export default function Contact() {
  const [hidden, setHidden] = useState(true);
  const { isScreenMobile } = useResize();

  return (
    <div className={css.contactWrapper}>
      {!isScreenMobile && <Icon glyph="call" className={css.icon} />}
      <div className={css.numberWrapper}>
        <a className={css.number} href="tel:+380500777843">
          +38 (050) 077 78 43
        </a>
        <PhonesList type="header" hidden={hidden} />
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => setHidden((p) => !p)}
      >
        <Icon
          glyph="arrow"
          className={`${css.arrow} ${!hidden ? css.rotated : ""}`}
        />
      </button>
    </div>
  );
}
