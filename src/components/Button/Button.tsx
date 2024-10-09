import { ButtonHTMLAttributes } from "react";
import css from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  main?: boolean;
}

export default function Button({
  type,
  children,
  main = true,
  ...restBtnProps
}: IButtonProps) {
  return (
    <button
      className={main ? css.button : css.buttonSecondary}
      type={type}
      {...restBtnProps}
    >
      {children}
    </button>
  );
}
