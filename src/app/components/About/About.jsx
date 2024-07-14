import css from "./About.module.css";
import { ABOUT } from "@/helpers/about";
import { Icon } from "@/components/Icon/Icon";
import Container from "@/components/Container/Container";

export default function About() {
  return (
    <section className={css.section}>
      <Container>
        <ul className={css.list}>
          {ABOUT.map(({ id, title, subtitle, text, icon }) => (
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
