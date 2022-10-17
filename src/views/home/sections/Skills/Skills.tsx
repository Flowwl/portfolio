import React, { FC } from "react";
import Title from "../../../../components/atoms/Title";
import Text from "../../../../components/atoms/Text";
import GradientChip from "../../../../components/atoms/GradientChip";
import { REFS, TEXTS, TITLES } from "@/constants/texts";
import cx from "classnames";

interface SkillsProps {
  className?: string;
}
const Skills: FC<SkillsProps> = ({ className }) => {
  return (
    <section className={cx("flex flex-col relative", className)}>
      <div className="bg-gray-600 rounded-3xl w-9/12 desktop:w-8/12 mx-auto text-center px-5 py-4 z-normal mx-auto inset-x-0 absolute">
        <Title id={REFS.SKILLS} theme="light">
          {TITLES.SKILLS}
        </Title>
        <Text className="text-gray-0">{TEXTS.SKILLS}</Text>
        <div
          className={cx(
            "flex items-center justify-center",
            "gap-2 mt-4 mx-auto",
            "flex-wrap overflow-y-auto",
            "w-full h-24 tablet:w-10/12 tablet:h-32 laptop:w-8/12"
          )}
        >
          {Technologies.map((technology) => (
            <GradientChip key={technology} label={technology} />
          ))}
        </div>
        <div className="flex">{/*<CirclePercent percent={90} />*/}</div>
      </div>
    </section>
  );
};

export default Skills;

const Technologies = [
  "React.js",
  "MongoDB",
  "React Native",
  "Node.js",
  "Express.js",
  "Three.js",
  "SQL",
  "AWS",
  "Firebase",
  "Digital Ocean",
  "Heroku",
  "Typescript",
  "Tailwind",
  "SCSS"
];
