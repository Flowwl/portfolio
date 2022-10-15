import React, { FC } from "react";
import Projects2 from "./sections/Projects2";
import Contact2 from "./sections/Contact2";
import Banner from "../../../app2/views/home/sections/Banner";
import Skills from "../../../app2/views/home/sections/Skills";

const HomeView2: FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Banner className="h-75vh pt-10" />
      <Skills />
      <Projects2 />
      <Contact2 />
    </div>
  );
};

export default HomeView2;
