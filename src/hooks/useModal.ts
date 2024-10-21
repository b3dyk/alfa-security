import { useCallback, useState } from "react";
import { useScrollLock } from "./useScrollLock";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFinalModal, setIsFinalModal] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleModal = useCallback(() => {
    setIsOpenModal((p) => !p);
    if (!isOpenModal) {
      lockScroll();
      console.log("lock");
    } else {
      unlockScroll();
      console.log("unlock");
    }
  }, [isOpenModal, lockScroll, unlockScroll]);

  const openModal = useCallback(() => {
    setIsOpenModal(true);
    lockScroll();
  }, [lockScroll]);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
    unlockScroll();
  }, [unlockScroll]);

  const openFinalModal = useCallback(() => {
    setIsFinalModal(true);
    lockScroll();
  }, [lockScroll]);

  return {
    isOpenModal,
    isFinalModal,
    toggleModal,
    openFinalModal,
    openModal,
    closeModal,
  };
};
