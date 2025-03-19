"use client";

import Image from "next/image";
import PhonesList from "@/components/PhonesList/PhonesList";
import { useResize } from "@/hooks/useResize";
import css from "./FormWindow.module.css";
import FormForm from "../Form/Form";
import { ModalProps } from "@/components/Modal/Modal";

export default function FormWindow({ toggleModal, openModal }: ModalProps) {
  const { isScreenMobile } = useResize();
  return (
    <div className={css.formWrapper}>
      <FormForm toggleModal={toggleModal} openModal={openModal} />
      {!isScreenMobile && (
        <div className={css.contactsWrapper}>
          <Image
            src="/images/logo-alfa.png"
            alt="logo"
            width={150}
            height={200}
            className={css.logo}
          />
          <PhonesList type="full" />
        </div>
      )}
    </div>
  );
}
