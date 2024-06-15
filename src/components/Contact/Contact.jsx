import Image from "next/image";
import css from "./Contacr.module.css";

export default function Contact() {
  return (
    <div className={css.contactWrapper}>
      <Image src="/icons/call.svg" alt="phone icon" width={24} height={24} />
      <span className={css.number}>+38 (050) 077 78 43</span>
      <Image src="/icons/arrow.svg" alt="arrow icon" width={24} height={24} />
    </div>
  );
}
