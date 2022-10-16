import React, { FC } from "react";
import TrackVisibility from "react-on-screen";
import cx from "classnames";
import ContactForm from "./ContactForm";
import SocialContact from "@/components/atoms/SocialContact";
import Title from "@/components/atoms/Title";
import { TITLES } from "@/constants/texts";

interface ContactProps {
  className?: string;
}
const Contact: FC<ContactProps> = ({ className }) => {
  return (
    <section className={cx("bg-gradient-to-bl from-accent-900/90 to-accent-500 contact", className)} id="connect">
      <div className="flex flex-col tablet:flex-row justify-between w-10/12 mx-auto gap-10 items-center">
        <TrackVisibility className="w-full">
          {({ isVisible }) => (
            <SocialContact
              className={cx("w-6/12 tablet:w-11/12 mx-auto", { "animate__animated animate__zoomIn": isVisible })}
            />
          )}
        </TrackVisibility>
        <TrackVisibility className="w-full">
          {({ isVisible }) => (
            <div
              className={cx("flex flex-col gap-4", {
                "animate__animated animate__fadeIn": isVisible
              })}
            >
              <Title className="text-center tablet:text-left">{TITLES.CONTACT}</Title>
              <ContactForm />
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};

export default Contact;
