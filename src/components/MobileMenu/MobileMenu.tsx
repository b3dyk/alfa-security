import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import PhonesList from "../PhonesList/PhonesList";
import css from "./MobileMenu.module.css";
import { Icon } from "../Icon/Icon";

interface IMobMenu {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: IMobMenu) {
  return (
    <div className={`${css.overlay} ${isOpen && css.isOpen}`}>
      <Link href="/" className={css.homeLink}>
        <span className={css.homeLinkAccent}>ALFA</span> SECURITY
      </Link>

      <Navigation type="mobMenu" />

      <div className={css.contactsWrapper}>
        <Icon glyph="call" className={css.phoneIcon} width={24} height={24} />

        <PhonesList type="mobMenu" />

        <Icon glyph="mail" className={css.mailIcon} width={24} height={24} />
        <a className={css.mail} href="mailto:ohorona.24.7@gmail.com">
          ohorona.24.7@gmail.com
        </a>
      </div>
    </div>
  );
}
