import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cx from "classnames";

interface SlidingButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  color?: "light" | "dark";
}

const SlidingButton: FC<SlidingButtonProps> = ({ className, children, color = "dark", ...rest }) => {
  return (
    <button
      className={cx(
        "relative cursor-pointer z-0",
        "px-5 py-3 text-lg font-semibold",
        "border-1 border-gray-0",
        "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:z-minus",
        "before:transition before:ease-in-out before:duration-500 before:origin-left before:scale-x-0",
        "transition ease-in-out duration-500 before:hover:scale-x-100",
        {
          "bg-gray-700 text-gray-0 before:bg-gray-0 hover:text-gray-900": color === "dark",
          "bg-gray-0 text-gray-700 before:bg-gray-600 hover:text-gray-0": color === "light"
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SlidingButton;
