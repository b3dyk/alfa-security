import Link from "next/link";
import css from "./page.module.css";
import Container from "@/components/Container/Container";

export default function NotFound() {
  return (
    <Container>
      <section className={css.section}>
        <h2 className={css.disclaimer}>Сторінку не знайдено</h2>
        <p>Здається, сторінки не існує ☹️</p>
        <Link href="/" className={css.link}>
          На головну
        </Link>
      </section>
    </Container>
  );
}
