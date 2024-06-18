import Container from "@/components/Container/Container";
import Image from "next/image";
import css from "./Hero.module.css";
import Polygon from "../../../../public/icons/hero-polygon.svg";

import { SOCIALS } from "@/helpers/socials";

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <Container>
        <div className={css.heroWrapper}>
          <Image
            src="/images/logo-alfa.png"
            alt="Logo Alfa"
            width={226}
            height={300}
          />
          <div className={css.textWrapper}>
            <h2 className={css.subtitle}>ОХОРОННА КОМПАНІЯ</h2>
            <h1 className={css.title}>ALFA SECURITY</h1>
            <p className={css.moto}>НАШ ДОСВІД - ВАША БЕЗПЕКА</p>
            <button className={css.button} type="button">
              Замовити послугу
            </button>
          </div>
        </div>
        <ul className={css.socialsList}>
          {SOCIALS.map(({ id, name, component, href }) => {
            const Icon = component;
            return (
              <li key={id} className={css.socialsListItem}>
                <a className={css.socialsListItemLink} href={href}>
                  <Icon className={css.socialsListItemIcon} />
                  <span className={css.socialsListItemText}>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <Polygon className={css.polygon} />
      </Container>
    </section>
  );
}
