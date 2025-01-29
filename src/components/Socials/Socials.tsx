import { SOCIALS } from "@/helpers/socials";
import css from "./Socials.module.css";
import { Icon } from "../Icon/Icon";

export default function Socials() {
  return (
    <ul className={css.list}>
      {SOCIALS.map(({ id, name, href }) => (
        <li key={id} className={css.item}>
          <a
            href={href}
            className={css.link}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Icon
              glyph={name}
              className={css.icon}
              width="32px"
              height="32px"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
