import React, { FC, HTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import { getIcon } from "../../utils/icons";

interface ButtonRightArrowProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const ButtonRightArrow: FC<ButtonRightArrowProps> = ({ className, children, ...rest }) => {
  const ArrowRightCircleIcon = getIcon("RIGHT_ARROW_CIRCLE");
  return (
    <button
      className={cx("flex items-center gap-2", "text-xl font-semibold items-center m-auto !ml-0", className)}
      {...rest}
    >
      {children}
      <ArrowRightCircleIcon className="h-6 w-6 transition duration-300 ease-in-out hover:translate-x-2" />
    </button>
  );
};

export default ButtonRightArrow;
