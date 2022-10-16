import React, { FC } from "react";
import TrackVisibility from "react-on-screen";
import cx from "classnames";
import ContactForm from "./ContactForm";
import SocialContact from "@/components/atoms/SocialContact";
import Title from "@/components/atoms/Title";
import { TITLES } from "@/constants/texts";

const Contact: FC = () => {
  return (
    <section className="bg-gradient-to-bl from-accent-900/90 to-accent-500 pt-24 pb-48 contact" id="connect">
      <div className="flex justify-between w-10/12 mx-auto gap-10 items-center">
        <TrackVisibility className="w-full">
          {({ isVisible }) => (
            <SocialContact className={cx("w-11/12", { "animate__animated animate__zoomIn": isVisible })} />
          )}
        </TrackVisibility>
        <TrackVisibility className="w-full">
          {({ isVisible }) => (
            <div
              className={cx("flex flex-col gap-4", {
                "animate__animated animate__fadeIn": isVisible
              })}
            >
              <Title>{TITLES.CONTACT}</Title>
              <ContactForm />
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};

export default Contact;
