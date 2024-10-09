import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { PageProps } from "@/helpers/routes";
import css from "./Services.module.css";

export default function Services({ scalable }: PageProps) {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>ПОСЛУГИ</h2>
        <ul className={css.list}>
          {scalable.map(({ id, title }) => (
            <li key={id} className={css.item}>
              <p>{title}</p>
              <Button>ПОДАТИ ЗАЯВКУ</Button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
