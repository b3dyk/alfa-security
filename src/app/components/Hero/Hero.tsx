"use client";

import Container from "@/components/Container/Container";
import Image from "next/image";
import css from "./Hero.module.css";

import { Icon } from "@/components/Icon/Icon";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import AuctionCards from "./components/AuctionCards/AuctionCards";
import { useResize } from "@/hooks/useResize";
import { useModal } from "@/hooks/useModal";

export default function Hero() {
  const { isOpenModal, toggleModal, isFinalModal } = useModal();
  const { isScreenMobile } = useResize();
  return (
    <section className={css.heroSection}>
      <Container>
        <div className={css.heroWrapper}>
          <div className={css.textWrapper}>
            <h2 className={css.subtitle}>ОХОРОННА КОМПАНІЯ</h2>
            {isScreenMobile ? (
              <Image
                src="/images/logo-alfa.png"
                alt="Logo Alfa"
                width={172}
                height={228}
                className={css.mobileLogo}
              />
            ) : (
              <h1 className={css.title}>ALFA SECURITY</h1>
            )}

            <p className={css.moto}>
              Надійність перевірена роками, безпека гарантована нами
            </p>
            <Button type="button" onClick={toggleModal}>
              Подати заявку
            </Button>
          </div>
          {!isScreenMobile && (
            <Image
              src="/images/logo-alfa.png"
              alt="Logo Alfa"
              width={170}
              height={225}
            />
          )}
          <Icon glyph="heroNewPolygon" className={css.polygon} />
        </div>
      </Container>
      <AuctionCards />
      {isOpenModal && (
        <Modal toggleModal={toggleModal} isFinalModal={isFinalModal} />
      )}
    </section>
  );
}
