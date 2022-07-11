import React, { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import AnimationsView from "./views/animations/AnimationsView";
import HomeView from "./views/home/HomeView";

const Router: FC = () => {

    return (
        <Routes>
            <Route path={ROUTES.HOME.path} element={ROUTES.HOME.view} />
            <Route path={ROUTES.ANIMATIONS.path} element={ROUTES.ANIMATIONS.view} />
        </Routes>
    );
};

export default Router;

export const ROUTES = {
    HOME: {
        path: "/",
        view: <HomeView/>
    },
    ANIMATIONS: {
        path: "/animations",
        view: <AnimationsView/>
    }
}
