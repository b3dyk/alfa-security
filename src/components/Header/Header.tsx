"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import Contact from "../Contact/Contact";
import IconButton from "../IconButton/IconButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useMobMenu } from "@/hooks/useMobMenu";
import css from "./Header.module.css";
import { useResize } from "@/hooks/useResize";
import { useEffect, useState } from "react";

export default function Header() {
  const { isScreenDesktop } = useResize();
  const { isMenuOpen, handleMenu } = useMobMenu();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.navWrapper}>
            <Link href="/" className={css.link}>
              <Image
                src="/images/logo-alfa-horizontal.png"
                alt="logo Alfa"
                width={111}
                height={56}
                className={css.headerLogo}
              />
            </Link>

            {isScreenDesktop && <Navigation type="header" />}
          </div>

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
