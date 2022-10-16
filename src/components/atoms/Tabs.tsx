import React, { FC } from "react";
import cx from "classnames";
import { Tab } from "@headlessui/react";

interface TabsProps {
  className?: string;
  tabs: {
    label: string;
    component: React.ReactNode;
  }[];
  headerClassNames?: string;
}

const Tabs: FC<TabsProps> = ({ className, tabs, headerClassNames }) => {
  return (
    <div className={cx("w-full py-8", className)}>
      <Tab.Group as="div" className="flex flex-col">
        <Tab.List className={cx("flex rounded-xl bg-gray-600 p-1 gap-1 w-3/4 mx-auto", headerClassNames)}>
          {tabs.map(({ label }) => (
            <Tab
              key={label}
              className={({ selected }) =>
                cx("w-full p-2 py-2.5text-gray-50 rounded-xl", "focus:outline-none", {
                  "bg-gradient-to-r from-accent-500 to-accent-900 !text-gray-0": selected,
                  "bg-gray-500 hover:text-gray-0 hover:bg-gradient-to-r hover:from-accent-500/50 hover:to-accent-900/50":
                    !selected
                })
              }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="flex w-full gap-4 flex-wrap">
          {tabs.map(({ label, component }) => (
            <Tab.Panel key={label} className={cx("rounded-xl bg-transparent p-3", "focus:outline-none")}>
              {component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
