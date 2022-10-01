import React, { FC } from "react";
import Banner2 from "./sections/Banner2";
import Skills2 from "./sections/Skills2";
import Projects2 from "./sections/Projects2";
import Contact2 from "./sections/Contact2";

const HomeView2: FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Banner2 />
      <Skills2 />
      <Projects2 />
      <Contact2 />
    </div>
  );
};

export default HomeView2;
