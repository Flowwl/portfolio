import React, { FC } from "react";
import headerImg from "../../../app1/assets/img/header-img.svg";
import cx from "classnames";
import "./MovingAstronaut.scss";

interface MovingAstronautProps {
  className?: string;
}

const MovingAstronaut: FC<MovingAstronautProps> = ({ className }) => {
  return <img src={headerImg} className={cx("movingAstronaut", className)} alt="Moving Astronaut" />;
};

export default MovingAstronaut;
