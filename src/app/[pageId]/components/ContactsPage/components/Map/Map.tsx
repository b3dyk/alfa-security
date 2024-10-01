import Container from "@/components/Container/Container";
import css from "./Map.module.css";

export default function Map() {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Знайдіть нас на мапі</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.1095134436364!2d30.460987076932753!3d50.364512393547436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8593a5abaeb%3A0x7579b23260b18f24!2z0LLRg9C7LiDQkNC60LDQtNC10LzRltC60LAg0JfQsNCx0L7Qu9C-0YLQvdC-0LPQviwgNDYsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1727690569725!5m2!1suk!2sua"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={css.map}
        ></iframe>
      </Container>
    </section>
  );
}
