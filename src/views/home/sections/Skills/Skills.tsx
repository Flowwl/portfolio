import React, { FC } from "react";
import "react-multi-carousel/lib/styles.css";
import Title from "../../../../components/atoms/Title";
import Text from "../../../../components/atoms/Text";
import GradientChip from "../../../../components/atoms/GradientChip";
import { REFS, TEXTS, TITLES } from "@/constants/texts";

const Skills: FC = () => {
  return (
    <section className="flex flex-col relative">
      <div className="bg-gray-600 rounded-3xl w-4/5 mx-auto text-center px-5 py-4 absolute z-normal mx-auto inset-x-0 -top-32">
        <Title id={REFS.SKILLS}>{TITLES.SKILLS}</Title>
        <Text className="text-base">{TEXTS.SKILLS}</Text>
        <div className="flex items-center justify-center gap-4 mt-4 w-8/12 mx-auto flex-wrap">
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
