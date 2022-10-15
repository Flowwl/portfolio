import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";
import cx from "classnames";

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string;
}

const TextArea: FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={cx(
        "w-full bg-gray-0/10 border border-gray-0/50 rounded-xl text-gray-0 px-4 py-3 transition duration-500 ease-in-out",
        "focus:bg-gray-0 focus:text-gray-700",
        "placeholder:text-gray-0",
        "focus:placeholder:text-gray-700/80",
        "resize-none",
        className
      )}
      {...props}
    />
  );
};

export default TextArea;
