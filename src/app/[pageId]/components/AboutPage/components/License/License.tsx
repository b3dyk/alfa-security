import Container from "@/components/Container/Container";
import css from "./License.module.css";

export default function License() {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>ЛІЦЕНЗІЇ</h2>
        <ul className={css.list}>
          <li>
            <p>1. Ліцензія МВС України № 1306 від 29.10.2015 року</p>
          </li>
          <li>
            <p>
              2. Ліцензія МВС України, затверджена наказом МВС України № 221 від
              20.03.2018 року “Про видачу ліцензій на провадження охоронної
              діяльності”
            </p>
          </li>
          <li>
            <p>
              3. Ліцензія МНС України, затверджена наказом ДСНС України № 674
              від 25.11.2019 року “Про видачу ліцензій на провадження
              господарської діяльності з надання послуг і виконання робіт з
              протипожежного призначення”
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
