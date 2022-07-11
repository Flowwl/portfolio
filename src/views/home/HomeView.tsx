import React, { FC } from 'react';
import Banner from "./sections/Banner";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const HomeView: FC = () => {

    return (
        <>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default HomeView;
