import React, { FC } from "react";
import TrackVisibility from "react-on-screen";
import WritingText from "../../../components/atoms/WritingText";
import ButtonRightArrow from "../../../components/atoms/ButtonRightArrow";
import cx from "classnames";
import MovingAstronaut from "../../../components/atoms/MovingAstronaut";
import { URLS } from "../../../constants/urls";
import Title from "../../../components/atoms/Title";
import Text from "../../../components/atoms/Text";

interface BannerProps {
  className?: string;
}
const Banner: FC<BannerProps> = ({ className }) => {
  const letsConnectHandle = () => {
    window.location.replace(URLS.LINKEDIN);
  };
  return (
    <section className={cx("banner bg-banner bg-cover bg-no-repeat flex flex-col", className)} id="home">
      {/*<GradientLabel label="Welcome to my portfolio" className="self-end !border-r-0 font-light" />*/}
      <div className="flex w-11/12 justify-between mx-auto grow items-center">
        <TrackVisibility className="w-3/5">
          {({ isVisible }) => (
            <div
              className={cx("flex flex-col gap-1", {
                "animate__animated animate__fadeIn": isVisible
              })}
            >
              <Title className="flex items-center gap-2">
                <span>Hi! I&apos;m Florian, </span>
                <WritingText
                  className="ml-2"
                  toRotate={["Web Developer", "Software Engineer", "Fullstack Developer", "Freelance Developer"]}
                />
              </Title>
              <Text className="mt-6 ">
                Developer since 2017, I have acquired a lot of experience thanks to many projects from personal and
                company environment. Currently a Software Engineer in an engineering team of 100+ people, I know how to
                produce good results fast. My freelance experience began in 2020. I do my best to please your need and
                with me, your project is in good hands.
              </Text>
              <ButtonRightArrow className="mt-10" onClick={letsConnectHandle}>
                Let’s Connect
              </ButtonRightArrow>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility className="w-3/12">
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <MovingAstronaut />
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};

export default Banner;
