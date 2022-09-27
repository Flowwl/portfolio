import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AnimationsView from "./views/animations/AnimationsView";
import HomeView from "./views/home/HomeView";
import PlaygroundView from "./views/playground/PlaygroundView";

const Router: FC = () => {
  return (
    <Routes>
      {Object.values(ROUTES).map(({ path, view }) => (
        <Route key={path} path={path} element={view} />
      ))}
    </Routes>
  );
};

export default Router;

export const ROUTES = {
  HOME: {
    path: "/",
    view: <HomeView />
  },
  ANIMATIONS: {
    path: "/animations",
    view: <AnimationsView />
  },
  PLAYGROUND: {
    path: "/playground",
    view: <PlaygroundView />
  }
};
