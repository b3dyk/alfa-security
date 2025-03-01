import { PageProps } from "@/helpers/routes";
import css from "./Discounts.module.css";
import Image from "next/image";
import Container from "@/components/Container/Container";

export default function Discounts({ scalable }: PageProps) {
  const highlightWords = (text: string, highlights: string[]) => {
    return text.split("\n").map((paragraph, i) => (
      <p key={i}>
        {paragraph.split("-").map((word, j) => {
          const isHighlighted = highlights.includes(word);
          if (isHighlighted) {
            return (
              <span key={j} className="highlight">
                {word}
              </span>
            );
          }
          return word;
        })}
      </p>
    ));
  };

  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Акції</h2>
        <ul className={css.list}>
          {scalable.map(({ id, src, title, text, highlights }) => (
            <li key={id} className={css.item}>
              <h3 className={css.cardTitle}>{title}</h3>
              <Image
                src={src!}
                alt="Картка акції"
                width={320}
                height={175}
                className={css.cardImage}
              />
              <div className={css.cardText}>
                {highlightWords(text!, highlights!)}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
