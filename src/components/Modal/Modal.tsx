"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import IconButton from "../IconButton/IconButton";
import css from "./Modal.module.css";
import FormWindow from "../CallbackForm/components/FormWindow/FormWindow";
import PayModal from "./components/PayModal/PayModal";
import FinalModal from "./components/FinalModal/FinalModal";

export type ModalType = "callback" | "pay" | "final";

export interface ModalProps {
  toggleModal: () => void;
  openModal: (type: ModalType) => void;
  type?: ModalType;
}

export default function Modal({ toggleModal, openModal, type }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<Element | null>(null);

  useEffect(() => {
    setPortalRoot(document.getElementById("portal-root"));
    setMounted(true);
  }, []);

  const selectedModal = () => {
    switch (type) {
      case "callback":
        return <FormWindow toggleModal={toggleModal} openModal={openModal} />;

      case "pay":
        return <PayModal toggleModal={toggleModal} openModal={openModal} />;

      case "final":
        return <FinalModal toggleModal={toggleModal} />;
    }
  };

  if (!mounted || !portalRoot) return null;

  return createPortal(
    <div
      className={css.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          toggleModal();
        }
      }}
    >
      <div className={css.modal}>
        <IconButton
          glyph="close"
          onClick={toggleModal}
          className={css.iconClose}
        />
        {selectedModal()}
      </div>
    </div>,
    portalRoot
  );
}
