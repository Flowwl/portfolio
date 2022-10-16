import React, { FC } from "react";
import cx from "classnames";
import Title from "@/components/atoms/Title";

interface CardRocketProps {
  className?: string;
}

const CardRocket: FC<CardRocketProps> = ({ className }) => {
  return (
    <section className={cx("relative", className)}>
      <div
        className={cx(
          "bg-gray-0 rounded-3xl w-9/12",
          "mx-auto px-5 py-4 inset-x-0",
          "h-24 laptop:h-32",
          "-top-12 laptop:-top-16",
          "absolute z-normal"
        )}
      >
        <Title theme="gradient" className={cx("h-full flex items-center justify-center")}>
          Coming Soon
        </Title>
      </div>
    </section>
  );
};

export default CardRocket;
