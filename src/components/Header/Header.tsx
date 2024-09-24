"use client";

import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Contact from "../Contact/Contact";
import { useResize } from "@/hooks/useResize";
import IconButton from "../IconButton/IconButton";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const { isScreenDesktop } = useResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((p) => !p);
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => e.preventDefault();
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    } else {
      document.body.style.overflowY = "scroll";
      document.removeEventListener("touchmove", handleTouchMove);
    }

    return () => document.removeEventListener("touchmove", handleTouchMove);
  }, [isMenuOpen]);

  return (
    <>
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

          {isScreenDesktop && <Navigation type="header" />}

          <Contact />

          {!isScreenDesktop && (
            <IconButton glyph="line" onClick={handleMenu} open={isMenuOpen} />
          )}
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} handleMenu={handleMenu} />
    </>
  );
}
