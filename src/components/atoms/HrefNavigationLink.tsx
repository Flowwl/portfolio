import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import cx from "classnames";

interface NavigationLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  className?: string;
  label: string;
  href: string;
}

const HrefNavigationLink: FC<NavigationLinkProps> = ({ label, href }) => {
  const location = useLocation();
  const isActive = location.hash === href;
  return (
    <a
      href={href}
      className={cx(
        "appearance-none w-full flex justify-center relative text-gray-100 text-base tablet:text-md laptop:text-lg decoration-inherit",
        {
          "before:absolute before:content-[''] before:w-full before:h-0.5 before:top-auto before:bottom-0 before:bg-gray-0 !text-gray-0 hover:text-gray-0":
            isActive,
          "before:transition before:ease-in-out before:duration-500 before:origin-left before:scale-x-100": isActive,
          "transition ease-in-out duration-500 before:hover:scale-x-0 hover:text-gray-0": !isActive
        }
      )}
    >
      {label}
    </a>
  );
};

export default HrefNavigationLink;
