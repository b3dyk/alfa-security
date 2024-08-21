import Instagram from "./instagram.svg";
import Mail from "./mail.svg";
import Youtube from "./youtube.svg";
import Facebook from "./facebook.svg";
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

export type IconsType = {
  [key: string]: SVGSVGElement;
};

const icons = {
  instagram: Instagram,
  mail: Mail,
  youtube: Youtube,
  facebook: Facebook,
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
};

export default icons;
