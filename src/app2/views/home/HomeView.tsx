import React, { FC } from "react";
import Banner from "./sections/Banner/Banner";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./Contact/Contact";

const HomeView: FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Banner className="h-75vh pt-10" />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomeView;
