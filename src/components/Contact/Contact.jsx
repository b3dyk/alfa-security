"use client";

import { useState } from "react";
import clsx from "clsx";
import css from "./Contact.module.css";
import { Icon } from "../Icon/Icon";
import { PHONES } from "@/helpers/phones";

export default function Contact() {
  const [hidden, setHidden] = useState(true);

  const listClasses = clsx(css.list, hidden && css.hidden);

  const handleClick = () => {
    setHidden((p) => !p);
  };

  return (
    <div className={css.contactWrapper}>
      <Icon glyph="call" />
      <div className={css.numberWrapper}>
        <a className={css.number} href="tel:+380500777843">
          +38 (050) 077 78 43
        </a>
        <ul className={listClasses}>
          {PHONES.slice(1, PHONES.length).map(({ id, phone, href }) => (
            <li key={id} className={css.item}>
              <a className={css.number} href={href}>
                {phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className={css.button} onClick={handleClick}>
        <Icon glyph="arrow" />
      </button>
    </div>
  );
}
