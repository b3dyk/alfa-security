"use client";

import Image from "next/image";
import PhonesList from "@/components/PhonesList/PhonesList";
import { useResize } from "@/hooks/useResize";
import Form from "../Form/Form";
import css from "./FormWindow.module.css";

export default function FormWindow() {
  const { isScreenMobile } = useResize();
  return (
    <div className={css.formWrapper}>
      <Form />
      {isScreenMobile ? (
        <PhonesList type="full" />
      ) : (
        <div className={css.contactsWrapper}>
          <Image
            src="/images/logo-alfa-horizontal.png"
            alt="logo"
            width={200}
            height={100}
            className={css.logo}
          />
          <PhonesList type="full" />
        </div>
      )}
    </div>
  );
}
