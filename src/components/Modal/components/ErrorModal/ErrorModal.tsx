import { Icon } from "@/components/Icon/Icon";
import css from "./ErrorModal.module.css";

export default function ErrorModal({
  toggleModal,
}: {
  toggleModal?: () => void;
}) {
  return (
    <div className={css.modal}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Йооой! Щось пішло не так</h2>
        <p className={css.text}>Спробуйте ще раз пізніше</p>
        <button type="button" className={css.btn} onClick={toggleModal}>
          Закрити
        </button>
      </div>
      <Icon glyph="heroNewPolygon" className={css.icon} />
    </div>
  );
}
