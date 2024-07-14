import Instagram from "./instagram.svg";
import Mail from "./mail.svg";
import Youtube from "./youtube.svg";
import Facebook from "./facebook.svg";
import HeroPolygon from "./hero-polygon.svg";
import BenefitsPolygon from "./benefits-polygon.svg";
import Call from "./call.svg";
import Camera from "./camera.svg";
import Headset from "./headset.svg";
import Time from "./time.svg";
import Tool from "./tool.svg";
import Arrow from "./arrow.svg";

export type IconsType = {
  [key: string]: SVGSVGElement;
};

const icons = {
  instagram: Instagram,
  mail: Mail,
  youtube: Youtube,
  facebook: Facebook,
  heroPolygon: HeroPolygon,
  benefitsPolygon: BenefitsPolygon,
  call: Call,
  camera: Camera,
  headset: Headset,
  time: Time,
  tool: Tool,
  arrow: Arrow,
};

export default icons;
