import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { SiFiverr } from "react-icons/si";
import { BsArrowRightCircle } from "react-icons/bs";

export const ICONS = {
  FACEBOOK: RiFacebookFill,
  GITHUB: RiGithubFill,
  LINKEDIN: RiLinkedinFill,
  FIVERR: SiFiverr,
  RIGHT_ARROW_CIRCLE: BsArrowRightCircle
};

export type IconName = keyof typeof ICONS;

export const getIcon = (iconName: IconName) => {
  return ICONS[iconName];
};
