import { useRef, useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ModalType } from "@/components/Modal/Modal";
import { FormikHelpers } from "formik";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";

if (!publicKey || !templateId || !serviceId) {
  throw new Error("Missing environment variables for EmailJS");
}

export const useSendingForm = (openModal: (type: ModalType) => void) => {
  const initValues = {
    name: "",
    phone: "+38",
    email: "",
  };

  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (
    values: {
      name: string;
      phone: string;
      email: string;
    },
    actions: FormikHelpers<{
      name: string;
      phone: string;
      email: string;
    }>
  ) => {
    if (!form.current) {
      console.error("Форма ще не ініціалізована");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(() => {
        actions.resetForm();
        openModal("final");
      })
      .catch((error) => {
        console.error(error);
        openModal("error");
      })
      .finally(() => setIsLoading(false));
  };

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

  return {
    initValues,
    form,
    isLoading,
    handleSubmit,
    DisplayingErrorMessagesSchema,
  };
};
