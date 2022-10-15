import React, { FC } from "react";
import cx from "classnames";

interface GradientChipProps {
  className?: string;
  label: string;
}

const GradientChip: FC<GradientChipProps> = ({ className, label }) => {
  return (
    <span
      className={cx(
        "bg-gradient-to-r from-accent-500/40 to-accent-900/40 bg-opacity-50",
        "rounded-2xl",
        "text-sm text-gray-100 px-3 py-2 text-center",
        "hover:from-accent-500/60 hover:to-accent-900/60 hover:text-gray-0 hover:cursor-default",
        className
      )}
    >
      {label}
    </span>
  );
};

export default GradientChip;
