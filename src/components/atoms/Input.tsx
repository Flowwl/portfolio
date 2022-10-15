import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import cx from "classnames";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cx(
        "w-full bg-gray-0/10 border-1 border-gray-0/50 rounded-xl text-gray-0 px-4 py-3 transition duration-500 ease-in-out",
        "focus:bg-gray-0 focus:text-gray-700",
        "placeholder:text-gray-0",
        "focus:placeholder:text-gray-700/80",
        className
      )}
      {...props}
    />
  );
};

export default Input;
