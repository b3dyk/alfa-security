"use client";

import Image from "next/image";
import Link from "next/link";
import PhonesList from "../PhonesList/PhonesList";
import css from "./Footer.module.css";
import ROUTES from "@/helpers/routes";
import Button from "../Button/Button";
import { useModal } from "@/hooks/useModal";
import Modal from "../Modal/Modal";
import Socials from "../Socials/Socials";
import { useResize } from "@/hooks/useResize";

export default function Footer() {
  const { isScreenMobile } = useResize();
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
          {!isScreenMobile && <PhonesList type="full" />}
        </div>
        <div className={css.info}>
          <ul className={css.mainList}>
            {ROUTES.map(({ id, name, path }) => (
              <li key={id}>
                <Link className={css.routeLink} href={path}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <address className={css.address}>
            <span>03187, м. Київ</span>
            <span>вул. Академіка Заболотного, 46, офіс 5</span>
          </address>

          <a className={css.mail} href="mailto:ohorona.24.7@gmail.com">
            ohorona.24.7@gmail.com
          </a>

          <Socials />
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
