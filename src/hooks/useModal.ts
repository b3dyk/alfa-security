import { useCallback, useEffect, useState } from "react";
import { useScrollLock } from "./useScrollLock";
import { ModalType } from "@/components/Modal/Modal";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [type, setType] = useState<ModalType>("final");
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    document.documentElement.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );

    if (isOpenModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-compensation)";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = `0`;
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      document.body.style.paddingRight = `0`;
    };
  }, [isOpenModal]);

  const toggleModal = useCallback(() => {
    setIsOpenModal((p) => !p);
  }, []);

  const openModal = useCallback((type: ModalType) => {
    setType(type);
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const openFinalModal = useCallback(() => {}, []);

  return {
    isOpenModal,
    type,
    toggleModal,
    openFinalModal,
    openModal,
    closeModal,
  };
};
