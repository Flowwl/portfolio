import React, { FC } from "react";
import projNpEditor from "../../../../assets/projects/np-editor/np-editior-main-diagram.jpg";
import projSolidLabs from "../../../../assets/projects/solid-labs/solid-labs-filter.jpg";
import projStudyo from "../../../../assets/projects/studyo/studyo-home.jpg";
import projPortfolio from "../../../../assets/projects/portfolio/portfolio-home.jpg";
import ProjectCard from "./ProjectCard";
import cx from "classnames";

interface ProjectTabProps {
  className?: string;
}

const ProjectTab: FC<ProjectTabProps> = ({ className }) => {
  const projects = [
    {
      title: "Portfolio",
      description: "My portfolio (React, Tailwind, Typescript)",
      imgUrl: projPortfolio
    },
    {
      title: "NP Editor",
      description: "AI Diagram creation website (MERN stack + react-diagrams)",
      imgUrl: projNpEditor
    },
    {
      title: "Studyo",
      description: "Music record sessions reservation website (React, Node.js, fullCalendar, Stripe)",
      imgUrl: projStudyo,
      url: "https://studyo110.fr"
    },
    {
      title: "Solid Labs",
      description: "3D Building visualisation \n (React, Threejs, Firebase, MaterialUI)",
      imgUrl: projSolidLabs
    }
  ];
  return (
    <div className={cx("mx-auto flex flex-wrap justify-center gap-3 laptop:gap-6", className)}>
      {projects.map(({ title, description, imgUrl, url }) => {
        return <ProjectCard key={title} title={title} description={description} imgUrl={imgUrl} url={url} />;
      })}
    </div>
  );
};

export default ProjectTab;
