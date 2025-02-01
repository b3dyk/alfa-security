"use client";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { PageProps } from "@/helpers/routes";
import css from "./Services.module.css";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/Modal/Modal";

export default function Services({ scalable }: PageProps) {
  const { isOpenModal, openModal, toggleModal } = useModal();

  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>ПОСЛУГИ</h2>
        <div className={css.btnWrapper}>
          <Button onClick={openModal}>ПОДАТИ ЗАЯВКУ</Button>
        </div>
        <ul className={css.list}>
          {scalable.reverse().map(({ id, title }) => (
            <li key={id} className={css.item}>
              <p>{title}</p>
            </li>
          ))}
        </ul>
        {isOpenModal && (
          <Modal toggleModal={toggleModal} isFinalModal={false} />
        )}
      </Container>
    </section>
  );
}
