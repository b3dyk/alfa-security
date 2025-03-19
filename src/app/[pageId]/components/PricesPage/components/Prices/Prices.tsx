"use client";

import Container from "@/components/Container/Container";
import css from "./Prices.module.css";
import Button from "@/components/Button/Button";
import { PageProps } from "@/helpers/routes";
import { Icon } from "@/components/Icon/Icon";
import { useResize } from "@/hooks/useResize";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/Modal/Modal";

export default function Prices({ scalable }: PageProps) {
  const { isOpenModal, openModal, toggleModal, type } = useModal();
  const { isScreenDesktop } = useResize();

  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Тарифи</h2>
        <div className={css.buttonWrapper}>
          <Button onClick={() => openModal("pay")}>СПЛАТИТИ ПОСЛУГУ</Button>
          <Button main={false} onClick={() => openModal("callback")}>
            ПОДАТИ ЗАЯВКУ
          </Button>
        </div>
        <ul className={css.mainList}>
          {scalable.map(({ id, title, specs, icon }) => (
            <li key={id} className={css.mainItem}>
              <h3 className={css.listTitle}>{title}</h3>
              <ul className={css.innerList}>
                {specs?.map((text, idx) => (
                  <li key={idx} className={css.innerItem}>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              {isScreenDesktop && icon && (
                <Icon glyph={icon} className={css.icon} />
              )}
            </li>
          ))}
        </ul>
        {isOpenModal && (
          <Modal toggleModal={toggleModal} type={type} openModal={openModal} />
        )}
      </Container>
    </section>
  );
}
