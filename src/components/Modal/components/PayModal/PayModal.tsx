import { Icon } from "@/components/Icon/Icon";
import css from "./PayModal.module.css";
import { usePay } from "./hooks/usePay";
import { ModalProps } from "../../Modal";

export default function PayModal({ openModal }: ModalProps) {
  const { selectedValue, href, handleChange, handleClick } = usePay(openModal);

  return (
    <div className={css.modal}>
      <div className={css.wrapper}>
        <h2 className={css.title}>ОПЛАТА ПОСЛУГИ</h2>
        <p className={css.text}>
          Для здійснення оплати будь ласка оберіть договір та натисність
          “сплатити”. Вас буде перенаправлено на сторінку оплати.
        </p>
        <div className={css.inputWrapper}>
          <div className={css.select}>
            <select value={selectedValue} onChange={handleChange}>
              <option value="" disabled>
                ОБЕРІТЬ ДОГОВІР
              </option>
              <option value="АБ">АБ</option>
              <option value="АС">АС</option>
              <option value="АСПС">АСПС</option>
            </select>
          </div>

          <a
            href={href}
            target="_blank"
            referrerPolicy="no-referrer"
            className={`${css.btn} ${!selectedValue ? css.disabled : ""}`}
            onClick={handleClick}
            tabIndex={selectedValue ? 0 : -1}
            aria-disabled={!selectedValue}
          >
            Сплатити
          </a>
        </div>
      </div>
      <Icon glyph="heroNewPolygon" className={css.icon} />
    </div>
  );
}
