import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { SiFiverr } from "react-icons/si";

export const ICONS = {
  FACEBOOK: RiFacebookFill,
  GITHUB: RiGithubFill,
  LINKEDIN: RiLinkedinFill,
  FIVERR: SiFiverr
};

export type IconName = keyof typeof ICONS;

export const getIcon = (iconName: IconName) => {
  return ICONS[iconName];
};
