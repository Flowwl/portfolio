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
    <div
      className={cx(
        "relative cursor-pointer bg-gray-400 text-gray-0 ",
        "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-gray-0 before:scale-0 before:z-minus before:rounded-full",
        "before:transition before:ease-in-out before:duration-500",
        "transition ease-in-out duration-500 before:hover:scale-100 hover:text-gray-900 hover:bg-transparent",
        "p-2.5",
        "rounded-full border-1 border-gray-200",
        className
      )}
    >
      <Icon className={cx("h-5 w-5")} />
    </div>
  );
};

export default IconButton;
