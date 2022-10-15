import React, { FC } from "react";
import cx from "classnames";

interface TitleProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ className, children, id }) => {
  return (
    <h2 id={id} className={cx("text-5xl font-satisfy font-semibold", className)}>
      {children}
    </h2>
  );
};

export default Title;
