import Image from "next/image";
import css from "./AuctionCards.module.css";
import { AUCTION_CARDS } from "@/helpers/auctionCards";
import { Icon } from "@/components/Icon/Icon";

export default function AuctionCards() {
  return (
    <div className={css.auctionSlider}>
      <button type="button" className={css.buttonRight}>
        <Icon glyph="arrow" />
      </button>
      <ul className={css.cardList}>
        {AUCTION_CARDS.map(({ id, src, title, description }) => (
          <li key={id} className={css.cardItem}>
            <Image
              src={src}
              alt="auction"
              width={150}
              height={195}
              className={css.cardImage}
            />
            <div className={css.textWrapper}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className={css.buttonLeft}>
        <Icon glyph="arrow" />
      </button>
    </div>
  );
}
