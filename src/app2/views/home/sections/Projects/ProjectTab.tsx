import React, { FC } from "react";
import projImg1 from "../../../../assets/img/project-img1.png";
import projImg2 from "../../../../assets/img/project-img2.png";
import projImg3 from "../../../../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";
import cx from "classnames";

interface ProjectTabProps {
  className?: string;
}

const ProjectTab: FC<ProjectTabProps> = ({ className }) => {
  const projects = [
    {
      title: "Business Startup 1",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Business Startup 2",
      description: "Design & Development",
      imgUrl: projImg2
    },
    {
      title: "Business Startup 3",
      description: "Design & Development",
      imgUrl: projImg3
    },
    {
      title: "Business Startup 4",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Business Startup 5",
      description: "Design & Development",
      imgUrl: projImg2
    },
    {
      title: "Business Startup 6",
      description: "Design & Development",
      imgUrl: projImg3
    }
  ];
  return (
    <div className={cx("w-full flex flew-wrap gap-6", className)}>
      {projects.map(({ title, description, imgUrl }) => {
        return <ProjectCard key={title} title={title} description={description} imgUrl={imgUrl} />;
      })}
    </div>
  );
};

export default ProjectTab;
