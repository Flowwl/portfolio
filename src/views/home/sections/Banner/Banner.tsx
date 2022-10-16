import React, { FC } from "react";
import TrackVisibility from "react-on-screen";
import cx from "classnames";
import Title from "../../../../components/atoms/Title";
import Text from "../../../../components/atoms/Text";
import { URLS } from "@/constants/urls";
import WritingText from "../../../../components/atoms/WritingText";
import ButtonRightArrow from "../../../../components/atoms/ButtonRightArrow";
import MovingAstronaut from "../../../../components/atoms/MovingAstronaut";
import { REFS, TEXTS, TITLES } from "@/constants/texts";

interface BannerProps {
  className?: string;
}
const Banner: FC<BannerProps> = ({ className }) => {
  const letsConnectHandle = () => {
    window.location.replace(URLS.LINKEDIN);
  };
  return (
    <section className={cx("banner bg-banner bg-cover bg-no-repeat flex flex-col", className)} id={REFS.HOME}>
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
                <span>{TITLES.BANNER}</span>
                <WritingText className="ml-2" toRotate={TITLES.BANNER_WRITING_TEXT} />
              </Title>
              <Text className="mt-6 ">{TEXTS.BANNER}</Text>
              <ButtonRightArrow className="mt-10" onClick={letsConnectHandle}>
                {TEXTS.LETS_CONNECT}
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
