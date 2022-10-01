import React, { FC, HTMLAttributes } from "react";
import cx from "classnames";

interface SlidingButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const SlidingButton: FC<SlidingButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cx(
        "relative cursor-pointer text-gray-0 bg-gray-700 z-0",
        "px-5 py-3 text-lg font-semibold",
        "border-1 border-gray-0",
        "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-gray-0 before:z-minus",
        "before:transition before:ease-in-out before:duration-500 before:origin-left before:scale-x-0",
        "transition ease-in-out duration-500 before:hover:scale-x-100 hover:text-gray-900",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SlidingButton;
