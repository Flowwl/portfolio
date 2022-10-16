import React, { FC } from "react";
import "./ProjectCard.scss";
import cx from "classnames";
import { TEXTS } from "@/constants/texts";

interface ProjectCardProps {
  className?: string;
  title: string;
  description: string;
  imgUrl: string;
  url?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, imgUrl, url, className }) => {
  return (
    <div
      className={cx(
        "relative rounded-2xl overflow-hidden project-card h-52 w-96",
        "before:w-full before:h-0 before:absolute before:bg-gradient-to-tl before:from-accent-500/80 before:to-accent-900/80 before:content-[''] transition before:duration-300 before:ease-in-out before:inset-0",
        "before:hover:h-full",
        className
      )}
    >
      <img src={imgUrl} className="h-52 w-96" />
      <div className="absolute text-center w-full project-card-hover-text flex flex-col h-full justify-center">
        <div>
          <h4 className="text-xl text-gray-0 font-semibold">{title}</h4>
          <span className="text-sm text-gray-0 italic">{description}</span>
        </div>
        {url && (
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="pt-10 underline text-sm text-gray-50 hover:text-gray-0"
          >
            {TEXTS.ACCESS_TO_WEBSITE}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
