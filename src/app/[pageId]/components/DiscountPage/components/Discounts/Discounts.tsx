import { PageProps } from "@/helpers/routes";
import css from "./Discounts.module.css";
import Image from "next/image";
import Container from "@/components/Container/Container";

export default function Discounts({ scalable }: PageProps) {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Акції</h2>
        <ul className={css.list}>
          {scalable.map(({ id, src, title, text }) => (
            <li key={id} className={css.item}>
              <h3 className={css.cardTitle}>{title}</h3>
              <Image
                src={src!}
                alt="Картка акції"
                width={320}
                height={175}
                className={css.cardImage}
              />
              <p className={css.cardText}>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
