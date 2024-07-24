import Container from "@/components/Container/Container";
import Form from "./components/Form/Form";
import Image from "next/image";
import { Icon } from "@/components/Icon/Icon";
import css from "./CallbackForm.module.css";
import PhonesList from "@/components/PhonesList/PhonesList";

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
            <PhonesList type="full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
