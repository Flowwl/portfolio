import React, { FC } from "react";
import cx from "classnames";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ className, children }) => {
  return <h2 className={cx("text-5xl font-satisfy font-semibold", className)}>{children}</h2>;
};

export default Title;
