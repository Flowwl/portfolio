import React, { FC } from "react";
import cx from "classnames";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <h1 className={cx("text-2xl tablet:text-3xl laptop:text-5xl font-light font-satisfy", className)}>Florian Padel</h1>
  );
};

export default Logo;
