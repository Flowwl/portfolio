import React, { FC } from "react";
import Contact2 from "./sections/Contact2";
import Banner from "../../../app2/views/home/sections/Banner/Banner";
import Skills from "../../../app2/views/home/sections/Skills/Skills";
import Projects from "../../../app2/views/home/sections/Projects/Projects";

const HomeView2: FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Banner className="h-75vh pt-10" />
      <Skills />
      <Projects />
      <Contact2 />
    </div>
  );
};

export default HomeView2;
