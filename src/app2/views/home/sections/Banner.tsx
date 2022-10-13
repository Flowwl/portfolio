import React, { FC } from "react";
import TrackVisibility from "react-on-screen";
import GradientLabel from "../../../components/atoms/GradientLabel";
import WritingText from "../../../components/atoms/WritingText";
import ButtonRightArrow from "../../../components/atoms/ButtonRightArrow";
import cx from "classnames";
import MovingAstronaut from "../../../components/atoms/MovingAstronaut";
import { URLS } from "../../../constants/urls";

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
              <h1 className="flex items-center gap-2 text-5xl font-semibold">
                <span>Hi! I&apos;m Florian, </span>
                <WritingText className="ml-2" toRotate={["Web Developer", "Web Designer", "UI/UX Designer"]} />
              </h1>
              <p className="mt-6 text-gray-200 text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
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
