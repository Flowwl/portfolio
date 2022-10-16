import React, { FC } from "react";
import cx from "classnames";
import Logo from "@/components/atoms/Logo";
import HrefNavigationLink from "@/components/atoms/HrefNavigationLink";
import IconButton from "@/components/atoms/IconButton";
import { URLS } from "@/constants/urls";
import SlidingButton from "@/components/atoms/SlidingButton";
import { REFS, TEXTS, TITLES } from "@/constants/texts";

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
          <HrefNavigationLink label={TITLES.HOME} href={`#${REFS.HOME}`} />
          <HrefNavigationLink label={TITLES.SKILLS} href={`#${REFS.SKILLS}`} />
          <HrefNavigationLink label={TITLES.PROJECTS} href={`#${REFS.PROJECTS}`} />
        </div>
        <div className="flex gap-2">
          <IconButton iconName="GITHUB" url={URLS.GITHUB} />
          <IconButton iconName="LINKEDIN" url={URLS.LINKEDIN} />
          <IconButton iconName="FIVERR" url={URLS.FIVERR} />
        </div>
        <SlidingButton onClick={letsConnectHandle}>{TEXTS.LETS_CONNECT}</SlidingButton>
      </div>
    </nav>
  );
};

export default TopBar;
