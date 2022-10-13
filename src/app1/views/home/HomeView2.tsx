import React, { FC } from "react";
import Skills2 from "./sections/Skills2";
import Projects2 from "./sections/Projects2";
import Contact2 from "./sections/Contact2";
import Banner from "../../../app2/views/home/sections/Banner";

const HomeView2: FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Banner className="h-75vh pt-10" />
      <Skills2 />
      <Projects2 />
      <Contact2 />
    </div>
  );
};

export default HomeView2;
