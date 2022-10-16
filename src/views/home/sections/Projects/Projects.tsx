import TrackVisibility from "react-on-screen";
import React, { FC } from "react";

import cx from "classnames";
import ProjectTab from "./ProjectTab";
import Tabs from "../../../../components/atoms/Tabs";
import Title from "../../../../components/atoms/Title";
import Text from "../../../../components/atoms/Text";
import { REFS, TEXTS, TITLES } from "@/constants/texts";

const Projects: FC = () => {
  return (
    <section
      className={cx(
        "bg-gray-750 pt-48 relative overflow-hidden",
        "before:absolute before:top-0 before:bottom-0 before:left-auto before:right-0 before:w-full before:h-full before:bg-cover before:bg-project before:z-0 before:bg-no-repeat"
      )}
    >
      <TrackVisibility className="w-3/4 mx-auto flex flex-col items-center text-center gap-10">
        {({ isVisible }) => (
          <div
            className={cx("flex flex-col gap-4", {
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
