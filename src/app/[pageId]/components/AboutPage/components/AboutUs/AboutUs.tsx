import Container from "@/components/Container/Container";
import css from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>ПРО НАС</h2>
        <h3 className={css.subtitle}>НАШ ДОСВІД - ВАША БЕЗПЕКА</h3>
        <div className={css.descWrapper}>
          <p className={css.description}>
            Охоронна група компаній «Агенція Безпеки{" "}
            <span className={css.accent}>«Альфа Секьюріті»</span> місто Київ,
            працює в сфері безпеки протягом 10 років. Завдяки високому рівню
            послуг, які ми надаємо, постійними клієнтами компанії стало вже
            більше 3000 фізичних та юридичних осіб на більше 1000 об’єктах.
          </p>
          <p className={css.description}>
            Ми забезпечуємо збереження рухомого і нерухомого майна, робимо все
            для запобігання можливим загрозам безпеці, здоров’ю та життю людини.
            Також наша агенція безпеки займається підбором та установкою
            сучасних систем безпеки різного рівня для обʼєктів , будинків і
            квартир з подальшим їх моніторингом та охороною.
          </p>
        </div>
      </Container>
    </section>
  );
}
