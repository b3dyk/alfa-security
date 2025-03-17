import { styles } from "./PhonesList.styles";
import ROUTES from "@/helpers/routes";

interface IPhonesList {
  type: keyof typeof styles;
  hidden?: boolean;
}

export default function PhonesList({ type, hidden }: IPhonesList) {
  const phonesObj = ROUTES.find(({ name }) => name === "Контакти");
  const phoneData = phonesObj?.scalable;

  const phones =
    type === "header" ? phoneData?.slice(1, phoneData?.length) : phoneData;
  const css = styles[type];

  return (
    <ul className={`${css.list} ${(hidden && css.hidden) || ""}`}>
      {phones?.map(({ id, phone, src }) => (
        <li key={id} className={css.item}>
          <a className={css.number} href={src}>
            {phone}
          </a>
        </li>
      ))}
    </ul>
  );
}
