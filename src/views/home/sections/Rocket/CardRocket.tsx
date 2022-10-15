import React, { FC } from "react";
import cx from "classnames";

interface CardRocketProps {
  className?: string;
}

const CardRocket: FC<CardRocketProps> = ({ className }) => {
  return (
    <section className={cx("relative", className)}>
      <div className="bg-gray-0 rounded-3xl w-4/5 mx-auto text-center px-5 py-4 absolute z-normal mx-auto inset-x-0 -top-32">
        <p className="h-48 text-gray-700"> Rocket placeholder</p>
      </div>
    </section>
  );
};

export default CardRocket;
