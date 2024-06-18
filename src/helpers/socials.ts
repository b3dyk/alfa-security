import Instagram from "../../public/icons/instagram.svg";
import Mail from "../../public/icons/mail.svg";
import Youtube from "../../public/icons/youtube.svg";
import Facebook from "../../public/icons/facebook.svg";

// export type SocialType = {
//   id: number;
//   name: string;
//   component: SVGProps<SVGSVGElement>;
// };

// export type SocialsType = SocialType[];

export const SOCIALS = [
  { id: 1, name: "instagram", component: Instagram, href: "/instagram.com" },
  { id: 2, name: "mail", component: Mail, href: "mailto:instagram.com" },
  { id: 3, name: "youtube", component: Youtube, href: "/youtube.com" },
  { id: 4, name: "facebook", component: Facebook, href: "/facebook.com" },
];
