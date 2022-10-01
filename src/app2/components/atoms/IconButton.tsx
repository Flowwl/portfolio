import React, { FC, HTMLAttributes } from "react";
import { getIcon, IconName } from "../../utils/icons";
import cx from "classnames";

interface IconButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  className?: string;
  iconName: IconName;
  url: string;
}

const IconButton: FC<IconButtonProps> = ({ className, iconName, url, ...rest }) => {
  const Icon = getIcon(iconName);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cx(
        "relative cursor-pointer bg-gray-400 text-gray-0 z-0",
        "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-gray-0 before:scale-0 before:rounded-full before:z-minus",
        "before:transition before:ease-in-out before:duration-500",
        "transition ease-in-out duration-500 before:hover:scale-100 hover:text-gray-900",
        "rounded-full border-1 border-gray-200",
        "p-2.5",
        className
      )}
      {...rest}
    >
      <Icon className={cx("h-5 w-5")} />
    </a>
  );
};

export default IconButton;
