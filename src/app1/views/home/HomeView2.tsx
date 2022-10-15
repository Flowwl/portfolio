import React, { FC } from "react";
import Banner from "../../../app2/views/home/sections/Banner/Banner";
import Skills from "../../../app2/views/home/sections/Skills/Skills";
import Projects from "../../../app2/views/home/sections/Projects/Projects";
import Contact from "../../../app2/views/home/Contact/Contact";

const HomeView2: FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Banner className="h-75vh pt-10" />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomeView2;
