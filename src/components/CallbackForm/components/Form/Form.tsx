import Button from "@/components/Button/Button";
import css from "./Form.module.css";

export default function Form() {
  return (
    <form className={css.form}>
      <div
        className={css.formGroup}
        role="group"
        aria-labelledby="callback-form"
      >
        <h3 className={css.formTitle} id="callback-form">
          ЗВОРОТНИЙ ЗВ’ЯЗОК
        </h3>
        <p className={css.formDesc}>
          Залишились питання чи хочете замовити послугу? Введіть ваші контактні
          дані та ми вам зателефонуємо
        </p>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          required
        />
        <input
          className={css.input}
          type="tel"
          name="phone"
          placeholder="Телефон"
          required
        />
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <Button type="submit">Відправити</Button>
    </form>
  );
}
