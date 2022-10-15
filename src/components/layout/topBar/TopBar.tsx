import React, { FC } from "react";
import cx from "classnames";
import Logo from "@/components/atoms/Logo";
import HrefNavigationLink from "@/components/atoms/HrefNavigationLink";
import IconButton from "@/components/atoms/IconButton";
import { URLS } from "@/constants/urls";
import SlidingButton from "@/components/atoms/SlidingButton";

interface TopBarProps {
  className?: string;
}

const TopBar: FC<TopBarProps> = ({ className }) => {
  const letsConnectHandle = () => {
    window.location.replace(URLS.LINKEDIN);
  };
  return (
    <nav
      className={cx(
        "flex justify-evenly gap-3 items-center py-2 sticky top-0 bg-gray-700 z-topBar opacity-90",
        className
      )}
    >
      <Logo />
      <div className="flex gap-4 items-center ">
        <div className="flex gap-4">
          <HrefNavigationLink label="Home" href="#home" />
          <HrefNavigationLink label="Skills" href="#skills" />
          <HrefNavigationLink label="Projects" href="#projects" />
        </div>
        <div className="flex gap-2">
          <IconButton iconName="GITHUB" url={URLS.GITHUB} />
          <IconButton iconName="LINKEDIN" url={URLS.LINKEDIN} />
          <IconButton iconName="FIVERR" url={URLS.FIVERR} />
        </div>
        <SlidingButton onClick={letsConnectHandle}>Let&apos;s Connect</SlidingButton>
      </div>
    </nav>
  );
};

export default TopBar;
