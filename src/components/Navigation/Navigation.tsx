import Link from "next/link";
import css from "./Navigation.module.css";
import ROUTES from "@/helpers/routes";

export default function Navigation() {
  return (
    <nav>
      <ul className={css.navList}>
        {ROUTES.map(({ id, name, path }) => (
          <li key={id} className={css.navListItem}>
            <Link href={path} className={css.navListItemLink}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
