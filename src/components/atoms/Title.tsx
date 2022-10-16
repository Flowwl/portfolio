import React, { FC } from "react";
import cx from "classnames";

interface TitleProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  theme?: "light" | "gradient";
}

const Title: FC<TitleProps> = ({ className, children, id, theme = "light" }) => {
  return (
    <h2
      id={id}
      className={cx(
        "text-2xl tablet:text-3xl laptop:text-4xl font-satisfy font-semibold",
        {
          "text-gray-0": theme === "light",
          "bg-gradient-to-r from-accent-900 to-accent-500 bg-clip-text text-transparent": theme === "gradient"
        },
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
