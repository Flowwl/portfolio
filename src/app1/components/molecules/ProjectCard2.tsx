import React, { FC } from "react";
import { Col } from "react-bootstrap";

interface ProjectCardProps {
  className?: string;
  title: string;
  description: string;
  imgUrl: string;
}

const ProjectCard2: FC<ProjectCardProps> = ({ title, description, imgUrl, className }) => {
  return (
    <Col size={12} sm={6} md={4} className={className}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard2;
