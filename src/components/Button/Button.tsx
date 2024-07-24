import { ButtonHTMLAttributes } from "react";
import css from "./Button.module.css";

export default function Button({
  type,
  children,
  ...restBtnProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={css.button} type={type} {...restBtnProps}>
      {children}
    </button>
  );
}
