import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AnimationsView from "./app1/views/animations/AnimationsView2";
import HomeView from "./app2/views/home/HomeView";
import PlaygroundView from "./app2/views/playground/PlaygroundView";
import ComponentView from "./app2/views/component/ComponentView";

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
  COMPONENTS: {
    path: "/components",
    view: <ComponentView />
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
