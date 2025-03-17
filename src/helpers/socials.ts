import icons from "../../public/icons";

export type SocialType = {
  id: number;
  name: keyof typeof icons;
  href: string;
};

export type SocialsType = SocialType[];

export const SOCIALS: SocialsType = [
  {
    id: 1,
    name: "facebook",
    href: "https://www.facebook.com/profile.php?id=100064320063817&locale=ua_UA",
  },
  {
    id: 2,
    name: "telegram",
    href: "https://t.me/+380674650230",
  },
  {
    id: 3,
    name: "viber",
    href: "viber://chat?number=+380674650230",
  },
];
