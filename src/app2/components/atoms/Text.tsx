import React, { FC } from "react";
import cx from "classnames";

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

const Text: FC<TextProps> = ({ className, children }) => {
  return <p className={cx("text-gray-200 text-base", className)}>{children}</p>;
};

export default Text;
