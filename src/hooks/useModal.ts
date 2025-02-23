import { useCallback, useEffect, useState } from "react";
import { useScrollLock } from "./useScrollLock";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFinalModal, setIsFinalModal] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    document.documentElement.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );

    if (isOpenModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Блокуємо і `html`

      document.body.style.paddingRight = "var(--scrollbar-compensation)";
      // document.documentElement.style.paddingRight =
      //   "var(--scrollbar-compensation)";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = ""; // Відновлюємо

      document.body.style.paddingRight = `0`;
      // document.documentElement.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      document.body.style.paddingRight = `0`;
      // document.documentElement.style.paddingRight = "0";
    };
  }, [isOpenModal]);

  const toggleModal = useCallback(() => {
    setIsOpenModal((p) => !p);
  }, []);

  const openModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const openFinalModal = useCallback(() => {
    setIsFinalModal(true);
  }, []);

  return {
    isOpenModal,
    isFinalModal,
    toggleModal,
    openFinalModal,
    openModal,
    closeModal,
  };
};
