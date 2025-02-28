"use client";

import Image from "next/image";
import PhonesList from "@/components/PhonesList/PhonesList";
import { useResize } from "@/hooks/useResize";
import css from "./FormWindow.module.css";
import FormForm from "../Form/Form";

export default function FormWindow({
  toggleModal,
}: {
  toggleModal?: () => void;
}) {
  const { isScreenMobile } = useResize();
  return (
    <div className={css.formWrapper}>
      <FormForm toggleModal={toggleModal!} />
      {!isScreenMobile && (
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
