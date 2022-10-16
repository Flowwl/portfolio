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
        "rounded-2xl",
        "text-sm text-gray-0 px-3 py-2 text-center",
        "bg-gradient-to-r from-accent-500/60 to-accent-900/60 text-gray-0 cursor-default",
        "hover:from-accent-500/40 hover:to-accent-900/40 hover:bg-opacity-50",
        className
      )}
    >
      {label}
    </span>
  );
};

export default GradientChip;
