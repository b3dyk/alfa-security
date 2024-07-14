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
    name: "instagram",
    href: "https://instagram.com",
  },
  {
    id: 2,
    name: "mail",
    href: "mailto:instagram.com",
  },
  {
    id: 3,
    name: "youtube",
    href: "https://youtube.com",
  },
  {
    id: 4,
    name: "facebook",
    href: "https://facebook.com",
  },
];
