import React, { FC } from "react";
import Tabs, { Tab } from "../../components/layout/Tabs";
import CoolAnimationTab from "./CoolAnimationTab";

const AnimationsView: FC = () => {
  const tabs: Tab[] = [
    {
      header: "Cool animations",
      content: <CoolAnimationTab />
    },
    {
      header: "Blank Page",
      content: <div>Hello</div>
    }
  ];
  return (
    <div className="h-full">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default AnimationsView;
