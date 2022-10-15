import React, { FC } from "react";
import "./CirclePercent.scss";
import cx from "classnames";

interface CirclePercentProps {
  className?: string;
  percent: number;
}

const CirclePercent: FC<CirclePercentProps> = ({ className, percent }) => {
  return (
    <div
      className={cx("flex rounded-full w-24 h-24 display-['-webkit-box'] display-['-ms-flexbox']", {
        "progress-10": !!percent
      })}
    >
      <div className={cx("h-20 w-20 rounded-full m-auto bg-gray-600 flex items-center justify-center", {})}>
        {percent}
      </div>
    </div>
  );
};

export default CirclePercent;
