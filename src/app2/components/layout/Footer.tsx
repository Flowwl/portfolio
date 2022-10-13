import React, { FC } from "react";

import "../../../app1/components/layout/footer/Footer.scss";
import Newsletter2 from "../../../app1/components/layout/footer/Newsletter2";
import Logo from "../atoms/Logo";
import IconButton from "../atoms/IconButton";
import { URLS } from "../../constants/urls";

const Footer: FC = () => {
  return (
    <footer className="bg-footer bg-center bg-cover bg-no-repeat footer pb-16">
      <div className="flex flex-col items-center w-3/4 mx-auto">
        <Newsletter2 />
        <div className="flex justify-between items-center w-full">
          <Logo />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <IconButton iconName="GITHUB" url={URLS.GITHUB} />
              <IconButton iconName="LINKEDIN" url={URLS.LINKEDIN} />
              <IconButton iconName="FIVERR" url={URLS.FIVERR} />
            </div>
            <p className="text-gray-200 text-sm">Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
