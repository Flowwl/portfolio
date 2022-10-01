import React, { FC } from "react";
import cx from "classnames";
import IconButton from "../atoms/IconButton";
import SlidingButton from "../atoms/SlidingButton";
import HrefNavigationLink from "../atoms/HrefNavigationLink";
import Logo from "../atoms/Logo";

interface TopBarProps {
  className?: string;
}

const TopBar: FC<TopBarProps> = ({ className }) => {
  return (
    <nav className={cx("flex justify-evenly gap-3 items-center py-2", className)}>
      <Logo />
      <div className="flex gap-4 items-center ">
        <div className="flex gap-4">
          <HrefNavigationLink label="Home" href="#home" />
          <HrefNavigationLink label="Skills" href="#skills" />
          <HrefNavigationLink label="Projects" href="#projects" />
        </div>
        <div className="flex gap-2">
          <IconButton iconName="GITHUB" url="https://github.com/Flowwl" />
          <IconButton iconName="LINKEDIN" url="https://www.linkedin.com/in/florian-padel-89b2b0161/" />
          <IconButton
            iconName="FIVERR"
            url="https://fr.fiverr.com/flowll/do-react-and-threejs-fullstack-web-application"
          />
        </div>
        <SlidingButton>Let&apos;s Connect</SlidingButton>
      </div>
    </nav>
  );
};

export default TopBar;
