"use client";

import Link from "next/link";
import ROUTES from "@/helpers/routes";
import { styles } from "./Navigation.styles";
import { usePathname } from "next/navigation";

interface INavigation {
  type: keyof typeof styles;
  handleMenu?: () => void;
}

export default function Navigation({ type, handleMenu }: INavigation) {
  const css = styles[type];
  const pathname = usePathname();
  return (
    <nav>
      <ul className={css.navList}>
        {ROUTES.map(({ id, name, path }) => (
          <li key={id} className={css.navListItem}>
            <Link
              href={path}
              className={`${css.navListItemLink} ${
                pathname === path ? css.active : ""
              }`}
              onClick={handleMenu}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
