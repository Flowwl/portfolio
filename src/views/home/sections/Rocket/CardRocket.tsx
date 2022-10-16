import React, { FC } from "react";
import cx from "classnames";

interface CardRocketProps {
  className?: string;
}

const CardRocket: FC<CardRocketProps> = ({ className }) => {
  return (
    <section className={cx("relative", className)}>
      <div
        className={cx(
          "bg-gray-0 rounded-3xl w-4/5",
          "mx-auto px-5 py-4 inset-x-0",
          "h-24 laptop:h-48",
          "-top-12 laptop:-top-24",
          "absolute z-normal"
        )}
      >
        <p
          className={cx(
            "h-full flex items-center justify-center text-2xl laptop:text-5xl font-satisfy",
            "bg-gradient-to-r from-accent-900 to-accent-500 bg-clip-text text-transparent"
          )}
        >
          Coming Soon
        </p>
      </div>
    </section>
  );
};

export default CardRocket;
