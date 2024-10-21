"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import IconButton from "../IconButton/IconButton";
import css from "./Modal.module.css";
import FormWindow from "../CallbackForm/components/FormWindow/FormWindow";

interface ModalProps {
  toggleModal: () => void;
  isFinalModal: boolean;
}

export default function Modal({ toggleModal, isFinalModal }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<Element | null>(null);

  useEffect(() => {
    setPortalRoot(document.getElementById("portal-root"));
    setMounted(true);
  }, []);

  if (!mounted || !portalRoot) return null;

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <IconButton
          glyph="close"
          onClick={toggleModal}
          className={css.iconClose}
        />
        {isFinalModal ? <p>Final</p> : <FormWindow />}
      </div>
    </div>,
    portalRoot
  );
}
