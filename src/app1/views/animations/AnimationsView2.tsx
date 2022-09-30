import React, { FC } from "react";
import Tabs2, { Tab } from "../../components/layout/Tabs2";
import CoolAnimationTab2 from "./CoolAnimationTab2";

const AnimationsView2: FC = () => {
  const tabs: Tab[] = [
    {
      header: "Cool animations",
      content: <CoolAnimationTab2 />
    },
    {
      header: "Blank Page",
      content: <div>Hello</div>
    }
  ];
  return (
    <div className="h-full">
      <Tabs2 tabs={tabs} />
    </div>
  );
};

export default AnimationsView2;
