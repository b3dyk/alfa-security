"use client";

import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Contact from "../Contact/Contact";
import { useResize } from "@/hooks/useResize";
import IconButton from "../IconButton/IconButton";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useResize();

  const handleMenu = () => {
    setIsMenuOpen((p) => !p);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.link}>
          <Image
            src="/images/logo-alfa.png"
            alt="logo Alfa"
            width={60}
            height={80}
            className={css.headerLogo}
          />
        </Link>

        {isScreenDesktop && <Navigation />}

        <Contact />

        {!isScreenDesktop && (
          <IconButton glyph="line" onClick={handleMenu} open={isMenuOpen} />
        )}
      </div>
    </header>
  );
}
