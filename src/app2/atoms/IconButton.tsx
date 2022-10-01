import React, { FC } from "react";
import { getIcon, IconName } from "../utils/icons";
import cx from "classnames";

interface IconButtonProps {
  className?: string;
  iconName: IconName;
}

const IconButton: FC<IconButtonProps> = ({ className, iconName }) => {
  const Icon = getIcon(iconName);
  return (
    <div className={cx(className)}>
      <Icon />
    </div>
  );
};

export default IconButton;
