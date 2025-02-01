import Instagram from "./instagram.svg";
import Mail from "./mail.svg";
import Youtube from "./youtube.svg";
import Facebook from "./facebook.svg";
import Viber from "./viber.svg";
import Telegram from "./telegram.svg";
import HeroPolygon from "./hero-polygon.svg";
import HeroNewPolygon from "./hero-new-polygon.svg";
import BenefitsPolygon from "./benefits-polygon.svg";
import CallbackPolygon from "./callback-polygon.svg";
import Call from "./call.svg";
import Camera from "./camera.svg";
import Headset from "./headset.svg";
import Time from "./time.svg";
import Tool from "./tool.svg";
import Arrow from "./arrow.svg";
import Line from "./line.svg";
import Location from "./location.svg";
import Close from "./close.svg";
import Alert from "./alert.svg";
import Shield from "./shield.svg";
import Beacon from "./beacon.svg";
import Fire from "./fire.svg";

export type IconsType = {
  [key: string]: SVGSVGElement;
};

const icons = {
  instagram: Instagram,
  mail: Mail,
  youtube: Youtube,
  facebook: Facebook,
  telegram: Telegram,
  viber: Viber,
  heroPolygon: HeroPolygon,
  heroNewPolygon: HeroNewPolygon,
  benefitsPolygon: BenefitsPolygon,
  callbackPolygon: CallbackPolygon,
  call: Call,
  camera: Camera,
  headset: Headset,
  time: Time,
  tool: Tool,
  arrow: Arrow,
  line: Line,
  location: Location,
  close: Close,
  alert: Alert,
  shield: Shield,
  beacon: Beacon,
  fire: Fire,
};

export default icons;
