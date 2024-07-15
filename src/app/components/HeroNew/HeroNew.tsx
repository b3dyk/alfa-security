import Container from "@/components/Container/Container";
import Image from "next/image";
import css from "./HeroNew.module.css";

import { Icon } from "@/components/Icon/Icon";
import AuctionCards from "../Hero/components/AuctionCards/AuctionCards";
import Button from "@/components/Button/Button";

export default function HeroNew() {
  return (
    <section className={css.heroSection}>
      <Container>
        <div className={css.heroWrapper}>
          <div className={css.textWrapper}>
            <h2 className={css.subtitle}>ОХОРОННА КОМПАНІЯ</h2>
            <h1 className={css.title}>ALFA SECURITY</h1>
            <p className={css.moto}>НАШ ДОСВІД - ВАША БЕЗПЕКА</p>
            <Button type="button">Подати заявку</Button>
          </div>
          <Image
            src="/images/logo-alfa.png"
            alt="Logo Alfa"
            width={170}
            height={225}
          />
          <Icon glyph="heroNewPolygon" className={css.polygon} />
        </div>
      </Container>
      <AuctionCards />
    </section>
  );
}
