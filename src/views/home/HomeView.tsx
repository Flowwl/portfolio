import React, { FC } from "react";
import Banner from "./sections/Banner/Banner";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import CardRocket from "@/views/home/sections/Rocket/CardRocket";
import cx from "classnames";

const HomeView: FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Banner className="h-screen mobile:pt-2 laptop:pt-5" />
      <div
        className={cx(
          "relative",
          "before:absolute before:inset-0 before:w-full before:h-full before:bg-cover before:bg-project before:bg-no-repeat"
        )}
      >
        <Skills className="mb-4 pb-32 -top-24" />
        <Projects className="mt-16 mb-8" />
      </div>
      <Contact className="pt-16 pb-32" />
      <CardRocket />
    </div>
  );
};

export default HomeView;
