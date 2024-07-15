import Container from "@/components/Container/Container";
import Form from "./components/Form/Form";
import Image from "next/image";
import { PHONES } from "@/helpers/phones";
import { Icon } from "@/components/Icon/Icon";
import css from "./CallbackForm.module.css";

export default function CallbackForm() {
  return (
    <section className={css.section}>
      <Icon glyph="callbackPolygon" className={css.polygon} />
      <Container>
        <div className={css.formWrapper}>
          <Form />
          <div className={css.contactsWrapper}>
            <Image
              src="/images/logo-alfa-horizontal.png"
              alt="logo"
              width={200}
              height={100}
              className={css.logo}
            />
            <ul className={css.list}>
              {PHONES.map(({ id, phone, href }) => (
                <li key={id}>
                  <a className={css.contactLink} href={href}>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
