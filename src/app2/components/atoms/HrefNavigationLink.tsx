import React, { FC } from "react";
import { Nav } from "react-bootstrap";
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
    <Nav.Link href={href} active={isActive} className={cx("text-gray-100 hover:text-gray-0 text-md bg-red")}>
      {label}
    </Nav.Link>
  );
};

export default HrefNavigationLink;
