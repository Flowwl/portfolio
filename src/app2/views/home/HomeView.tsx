import React, { FC } from "react";
import Banner from "./sections/Banner";

const HomeView: FC = () => {
  return (
    <div className="w-full flex flex-col pt-topBar">
      <Banner />
    </div>
  );
};

export default HomeView;
