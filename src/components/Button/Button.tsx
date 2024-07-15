import { ButtonHTMLAttributes } from "react";
import css from "./Button.module.css";

export default function Button({
  type,
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={css.button} type={type}>
      {children}
    </button>
  );
}
