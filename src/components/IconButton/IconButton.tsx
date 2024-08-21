import { ButtonHTMLAttributes } from "react";
import css from "./IconButton.module.css";
import { Icon } from "../Icon/Icon";
import icons from "../../../public/icons";

interface IconButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  glyph: keyof typeof icons;
  onClick?: () => void;
  open?: boolean;
}

export default function IconButton({
  type = "button",
  glyph,
  onClick,
  open = false,
  children,
  ...restBtnProps
}: IconButtonType) {
  return (
    <button
      className={css.button}
      type={type}
      onClick={onClick}
      {...restBtnProps}
    >
      <Icon glyph={glyph} className={open ? css.iconCross : css.iconBurger} />
    </button>
  );
}