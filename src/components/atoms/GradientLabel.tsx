import React, { FC } from "react";
import cx from "classnames";

interface GradientLabelProps {
  className?: string;
  label: string;
}

const GradientLabel: FC<GradientLabelProps> = ({ className, label }) => {
  return (
    <span
      className={cx(
        "bg-gradient-to-r from-accent-500/50 to-accent-900/50 bg-opacity-50",
        "border border-gray-0/50",
        "text-xl p-2 text-center",
        className
      )}
    >
      {label}
    </span>
  );
};

export default GradientLabel;
