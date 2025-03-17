import Image from "next/image";
import Container from "@/components/Container/Container";
import { BENEFITS } from "@/helpers/benefits";
import css from "./Benefits.module.css";
import { Icon } from "@/components/Icon/Icon";

export default function Benefits() {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.sectionTitle}>Наші переваги</h2>
        <Image
          src="/images/logo-alfa.png"
          alt="logo"
          width={336}
          height={446}
          className={css.bgLogo}
        />
        <ul className={css.list}>
          {BENEFITS.map(({ id, title, subtitle }) => (
            <li key={id} className={css.item}>
              <h3 className={css.heading}>
                {title.number}&nbsp;
                <span className={css.text}>{title.text}</span>
              </h3>
              <p className={css.description}>{subtitle}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Icon glyph="benefitsPolygon" className={css.polygon} />
    </section>
  );
}
