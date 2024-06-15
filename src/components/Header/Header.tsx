import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Contact from "../Contact/Contact";
import Container from "../Container/Container";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <Link href="/" className={css.link}>
          <Image
            src="/images/logo-alfa.png"
            alt="logo Alfa"
            width={60}
            height={80}
          />
        </Link>

        <Navigation />

        <Contact />
      </Container>
    </header>
  );
}
