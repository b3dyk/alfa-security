"use client";

import Container from "@/components/Container/Container";
import { Icon } from "@/components/Icon/Icon";
import { useResize } from "@/hooks/useResize";
import css from "./CallbackForm.module.css";
import FormWindow from "./components/FormWindow/FormWindow";
import { useModal } from "@/hooks/useModal";
import Modal from "../Modal/Modal";

export default function CallbackForm() {
  const { isScreenMobile } = useResize();
  const { isOpenModal, openModal, toggleModal, type } = useModal();

  return (
    <section className={css.section}>
      {!isScreenMobile && (
        <Icon glyph="callbackPolygon" className={css.polygon} />
      )}
      <Container>
        <FormWindow toggleModal={toggleModal} openModal={openModal} />
        {isOpenModal && (
          <Modal
            toggleModal={toggleModal}
            type={type}
            openModal={openModal}
          />
        )}
      </Container>
    </section>
  );
}
