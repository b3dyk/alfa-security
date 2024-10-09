import Container from "@/components/Container/Container";
import css from "./Prices.module.css";
import Button from "@/components/Button/Button";
import { PageProps } from "@/helpers/routes";

export default function Prices({ scalable }: PageProps) {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Тарифи</h2>
        <ul className={css.mainList}>
          {scalable.map(({ id, title, specs }) => (
            <li key={id} className={css.mainItem}>
              <h3 className={css.listTitle}>{title}</h3>
              <ul className={css.innerList}>
                {specs?.map((text, idx) => (
                  <li key={idx} className={css.innerItem}>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className={css.buttonWrapper}>
                <Button>СПЛАТИТИ ПОСЛУГУ</Button>
                <Button main={false}>ПОДАТИ ЗАЯВКУ</Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
