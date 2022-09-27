import React, { FC } from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface NavigationLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  className?: string;
  label: string;
  href: string;
}

const HrefNavigationLink: FC<NavigationLinkProps> = ({ label, href }) => {
  const location = useLocation();
  const isActive = location.hash === href;
  return (
    <StyledNavLink href={href} active={isActive} className={isActive ? "active navbar-link" : "navbar-link"}>
      {label}
    </StyledNavLink>
  );
};

export default HrefNavigationLink;

const StyledNavLink = styled(Nav.Link)`
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: 0.75;
`;
