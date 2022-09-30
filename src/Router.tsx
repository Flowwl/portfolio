import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AnimationsView from "./app1/views/animations/AnimationsView2";
import HomeView from "./app1/views/home/HomeView2";
import PlaygroundView from "./app2/views/playground/PlaygroundView";

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
  REWORK: {
    path: "/rework",
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
