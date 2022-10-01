import { RiFacebookFill } from "react-icons/ri";

export const ICONS = {
  FACEBOOK: RiFacebookFill
};

export type IconName = keyof typeof ICONS;

export const getIcon = (iconName: IconName) => {
  return ICONS[iconName];
};
