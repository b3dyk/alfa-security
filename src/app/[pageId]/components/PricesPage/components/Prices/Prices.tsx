import Container from "@/components/Container/Container";
import { PRICES } from "@/helpers/prices";
import css from "./Prices.module.css";
import Button from "@/components/Button/Button";

export default function Prices() {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Тарифи</h2>
        <ul className={css.mainList}>
          {PRICES.map(({ id, title, specs }) => (
            <li key={id} className={css.mainItem}>
              <h3 className={css.listTitle}>{title}</h3>
              <ul className={css.innerList}>
                {specs.map((text, idx) => (
                  <li key={idx} className={css.innerItem}>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className={css.buttonWrapper}>
                <Button>СПЛАТИТИ ПОСЛУГУ</Button>
                <Button>ПОДАТИ ЗАЯВКУ</Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
