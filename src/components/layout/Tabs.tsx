import { Tab as HTab } from "@headlessui/react";
import React, { FC } from "react";
import cx from "classnames";

import "./NavigationBar.scss";
export type Tab = {
  header: string;
  content: React.ReactNode;
};

interface NavigationTabsProps {
  tabs: Tab[];
}

const Tabs: FC<NavigationTabsProps> = (props) => {
  const { tabs } = props;

  const headers = tabs.map((t) => t.header);
  const contents = tabs.map((t) => t.content);

  return (
    <HTab.Group as="div">
      <HTab.List className="flex rounded-xl bg-blue-900/20">
        {headers.map((h) => (
          <HTab
            key={h}
            className={({ selected }) =>
              cx(
                "w-full py-2.5 text-sm font-‡ leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            {h}
          </HTab>
        ))}
      </HTab.List>
      <HTab.Panels className="w-full">
        {contents.map((c, index) => (
          <HTab.Panel key={index}>{c}</HTab.Panel>
        ))}
      </HTab.Panels>
    </HTab.Group>
  );
};

export default Tabs;
