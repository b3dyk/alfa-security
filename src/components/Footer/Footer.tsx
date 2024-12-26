"use client";

import Image from "next/image";
import Link from "next/link";
import PhonesList from "../PhonesList/PhonesList";
import css from "./Footer.module.css";
import ROUTES from "@/helpers/routes";
import Button from "../Button/Button";
import { useModal } from "@/hooks/useModal";
import Modal from "../Modal/Modal";

export default function Footer() {
  const { isOpenModal, toggleModal, isFinalModal } = useModal();
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.contacts}>
          <Image
            src={"/images/logo-alfa-horizontal.png"}
            alt="logo"
            width={200}
            height={100}
            className={css.logo}
          />
          <address className={css.address}>
            <span>03187, м. Київ</span>
            <span>вул. Академіка Заболотного, 46, офіс 5</span>
          </address>
          <PhonesList type="full" />
          <a className={css.mail} href="mailto:ohorona.24.7@gmail.com">
            ohorona.24.7@gmail.com
          </a>
        </div>
        <div className={css.info}>
          <ul className={css.mainList}>
            {ROUTES.map(({ id, name, path, scalable }) => (
              <li key={id}>
                <Link className={css.routeLink} href={path}>
                  {name}
                </Link>
                {name === "Тарифи" && (
                  <ul className={css.embededList}>
                    {scalable.map(({ id, title }) => (
                      <li key={id}>{title}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Button type="button" className={css.footerBtn} onClick={toggleModal}>
            Подати заявку
          </Button>
        </div>
        <div className={css.copyright}>
          <span>&copy;Alfa Security 2024. All rights reserved.</span>
          <span>Developed by Oleksandr Perlov and Artur Yushkov</span>
        </div>
      </div>
      {isOpenModal && (
        <Modal toggleModal={toggleModal} isFinalModal={isFinalModal} />
      )}
    </footer>
  );
}
