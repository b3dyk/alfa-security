import { PHONES } from "@/helpers/phones";
import { styles } from "./PhonesList.styles";

interface IPhonesList {
  type: keyof typeof styles;
  hidden?: boolean;
}

export default function PhonesList({ type, hidden }: IPhonesList) {
  const phones = type === "full" ? PHONES : PHONES.slice(1, PHONES.length);
  const css = styles[type];

  return (
    <ul className={`${css.list} ${(hidden && css.hidden) || ""}`}>
      {phones.map(({ id, phone, href }) => (
        <li key={id} className={css.item}>
          <a className={css.number} href={href}>
            {phone}
          </a>
        </li>
      ))}
    </ul>
  );
}
