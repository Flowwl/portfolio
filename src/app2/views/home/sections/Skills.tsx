import React, { FC } from "react";
import "react-multi-carousel/lib/styles.css";

import Title from "../../../../app2/components/atoms/Title";
import Text from "../../../../app2/components/atoms/Text";
import GradientChip from "../../../../app2/components/atoms/GradientChip";

const Skills: FC = () => {
  return (
    <section className="flex flex-col relative" id="skills">
      <div className="bg-gray-600 rounded-3xl w-4/5 mx-auto text-center px-5 py-4 absolute z-normal mx-auto inset-x-0 -top-32">
        <Title>Skills</Title>
        <Text className="text-base">During my project, I had the opportunity to work with many technologies</Text>
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
