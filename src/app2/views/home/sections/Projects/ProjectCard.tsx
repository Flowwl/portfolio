import React, { FC } from "react";
import "./ProjectCard.scss";
import cx from "classnames";

interface ProjectCardProps {
  className?: string;
  title: string;
  description: string;
  imgUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, imgUrl, className }) => {
  return (
    <div
      className={cx(
        "relative rounded-2xl overflow-hidden project-card",
        "before:w-full before:h-0 before:absolute before:bg-gradient-to-tl before:from-accent-500/80 before:to-accent-900/80 before:content-[''] transition before:duration-300 before:ease-in-out before:inset-0",
        "before:hover:h-full",
        className
      )}
    >
      <img src={imgUrl} />
      <div className="absolute text-center w-full project-card-hover-text">
        <h4 className="text-xl text-gray-0 font-semibold">{title}</h4>
        <span className="text-sm text-gray-0 italic">{description}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
