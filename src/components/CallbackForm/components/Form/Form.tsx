import { Formik, Form, Field } from "formik";
import Button from "@/components/Button/Button";
import css from "./Form.module.css";
import { ModalProps } from "@/components/Modal/Modal";
import { useSendingForm } from "./hooks/useSendingForm";
import Loader from "@/components/Loader/Loader";

export default function FormForm({ openModal }: ModalProps) {
  const {
    initValues,
    form,
    isLoading,
    handleSubmit,
    DisplayingErrorMessagesSchema,
  } = useSendingForm(openModal);

  return (
    <Formik
      initialValues={initValues}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form} ref={form}>
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
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  maxLength="13"
                  className={`${css.input} ${css.phoneInput} ${
                    errors.phone ? css.errorInput : ""
                  }`}
                />
                {errors.phone && touched.phone ? (
                  <div className={css.error}>{errors.phone}</div>
                ) : null}
              </label>

              <label className={css.label}>
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
          <Button type="submit">{isLoading ? <Loader /> : "Відправити"}</Button>
        </Form>
      )}
    </Formik>
  );
}
