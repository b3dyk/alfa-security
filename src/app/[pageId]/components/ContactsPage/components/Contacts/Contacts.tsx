import Container from "@/components/Container/Container";
import PhonesList from "@/components/PhonesList/PhonesList";
import css from "./Contacts.module.css";
import { Icon } from "@/components/Icon/Icon";
import { PageProps } from "@/helpers/routes";

export default function Contacts({ scalable }: PageProps) {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>КОНТАКТИ</h2>
        <div className={css.contactsWrapper}>
          <div className={css.phonesWrapper}>
            <Icon glyph="call" className={css.icon} />
            <h3 className={css.heading}>Телефони</h3>
            <PhonesList type="full" />
            <ul className={css.providers}>
              {scalable.map(({ id, provider }) => (
                <li key={id} className={css.item}>
                  <p>{provider}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={css.mailThumb}>
            <Icon glyph="mail" className={css.icon} />
            <h3 className={css.heading}>Пошта</h3>
            <a href="mailto:ohorona.24.7@gmail.com" className={css.mail}>
              ohorona.24.7@gmail.com
            </a>
          </div>

          <div className={css.addressThumb}>
            <Icon glyph="location" className={css.icon} />
            <h3 className={css.heading}>Адреса</h3>
            <address className={css.address}>
              <span>03187, м. Київ</span>
              <span>вул. Академіка Заболотного, 46,</span>
              <span>офіс 5</span>
            </address>
          </div>
        </div>
      </Container>
    </section>
  );
}
