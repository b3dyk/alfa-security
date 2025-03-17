import css from "./About.module.css";
import ROUTES from "@/helpers/routes";
import { Icon } from "@/components/Icon/Icon";
import Container from "@/components/Container/Container";

export default function About() {
  const { scalable } = ROUTES[0];
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.sectionTitle}>Про нас</h2>
        <ul className={css.list}>
          {scalable.map(({ id, title, subtitle, text, icon }) => (
            <li key={id} className={css.item}>
              <Icon glyph={icon} className={css.icon} />
              <div className={css.textWrapper}>
                <h3 className={css.title}>{title}</h3>
                <p className={css.subtitle}>{subtitle}</p>
                <p className={css.text}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
