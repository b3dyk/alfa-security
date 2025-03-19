import { Icon } from "@/components/Icon/Icon";
import css from "./FinalModal.module.css";

export default function FinalModal({
  toggleModal,
}: {
  toggleModal?: () => void;
}) {
  return (
    <div className={css.modal}>
      <div className={css.wrapper}>
        <h2 className={css.title}>ДЯКУЄМО ЗА ЗВЕРНЕННЯ!</h2>
        <p className={css.text}>Ми скоро з вами зв’яжемось!</p>
        <button type="button" className={css.btn} onClick={toggleModal}>
          Закрити
        </button>
      </div>
      <Icon glyph="heroNewPolygon" className={css.icon} />
    </div>
  );
}
