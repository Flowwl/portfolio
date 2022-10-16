import TrackVisibility from "react-on-screen";
import React, { FC } from "react";

import cx from "classnames";
import ProjectTab from "./ProjectTab";
import Tabs from "../../../../components/atoms/Tabs";
import Title from "../../../../components/atoms/Title";
import Text from "../../../../components/atoms/Text";
import { REFS, TEXTS, TITLES } from "@/constants/texts";

interface ProjectProps {
  className?: string;
}
const Projects: FC<ProjectProps> = ({ className }) => {
  return (
    <section className={cx("bg-transparent relative overflow-hidden", className)}>
      <TrackVisibility className="w-3/4 mx-auto flex flex-col items-center text-center gap-10">
        {({ isVisible }) => (
          <div
            className={cx("flex flex-col w-full gap-2", {
              "animate__animated animate__fadeIn": isVisible
            })}
          >
            <Title id={REFS.PROJECTS}>{TITLES.PROJECTS}</Title>
            <Text className="text-sm">{TEXTS.PROJECTS}</Text>
            <Tabs
              headerClassNames="hidden"
              tabs={[
                {
                  label: "Projects",
                  component: <ProjectTab />
                }
              ]}
            />
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default Projects;
