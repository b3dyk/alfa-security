import Button from "@/components/Button/Button";
import css from "./Form.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Ім'я закоротке")
    .max(50, "Ім'я задовге")
    .required("Введіть ім'я"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Невірний формат (+380XXXXXXX)")
    .required("Номер обов'язковий"),
  email: Yup.string()
    .email("Некоректний email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Невірний формат"),
});

export default function FormForm({ toggleModal }: { toggleModal: () => void }) {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values) => {
        console.log(values);
        toggleModal();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div
            className={css.formGroup}
            role="group"
            aria-labelledby="callback-form"
          >
            <h3 className={css.formTitle} id="callback-form">
              ЗВОРОТНИЙ ЗВ’ЯЗОК
            </h3>
            <p className={css.formDesc}>
              Залишились питання чи хочете замовити послугу? Введіть ваші
              контактні дані та ми вам зателефонуємо
            </p>
            <div className={css.fieldWrapper}>
              <label className={css.label}>
                {/* <span>Ім'я</span> */}
                <Field
                  name="name"
                  placeholder="Ім'я"
                  className={`${css.input} ${
                    errors.name ? css.errorInput : ""
                  }`}
                />
                {errors.name && touched.name ? (
                  <div className={css.error}>{errors.name}</div>
                ) : null}
              </label>

              <label className={css.label}>
                {/* <span>Телефон</span> */}
                <Field
                  name="phone"
                  placeholder="Телефон"
                  className={`${css.input} ${
                    errors.phone ? css.errorInput : ""
                  }`}
                />
                {errors.phone && touched.phone ? (
                  <div className={css.error}>{errors.phone}</div>
                ) : null}
              </label>

              <label className={css.label}>
                {/* <span>Email</span> */}
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`${css.input} ${
                    errors.email ? css.errorInput : ""
                  }`}
                />
                {errors.email && touched.email ? (
                  <div className={css.error}>{errors.email}</div>
                ) : null}
              </label>
            </div>
          </div>
          <Button type="submit">Відправити</Button>
        </Form>
      )}
      {/* <form className={css.form}>
        <div
          className={css.formGroup}
          role="group"
          aria-labelledby="callback-form"
        >
          <h3 className={css.formTitle} id="callback-form">
            ЗВОРОТНИЙ ЗВ’ЯЗОК
          </h3>
          <p className={css.formDesc}>
            Залишились питання чи хочете замовити послугу? Введіть ваші
            контактні дані та ми вам зателефонуємо
          </p>
          <input
            className={css.input}
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Ваше ім'я"
            required
          />
          <input
            className={css.input}
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Телефон"
            required
          />
          <input
            className={css.input}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            required
          />
        </div>
        <Button type="submit">Відправити</Button>
      </form> */}
    </Formik>
  );
}
