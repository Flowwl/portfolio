import React, { FC } from "react";
import { Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import cx from "classnames";
import SocialContact from "../../../../app2/components/atoms/SocialContact";
import Title from "../../../../app2/components/atoms/Title";
import ContactForm from "./ContactForm";

const Contact: FC = () => {
  return (
    <section className="bg-gradient-to-bl from-accent-900 to-accent-500 pt-24 pb-48 contact" id="connect">
      <div className="flex justify-between w-10/12 mx-auto">
        <TrackVisibility>
          {({ isVisible }) => (
            <SocialContact className={cx("w-11/12", { "animate__animated animate__zoomIn": isVisible })} />
          )}
        </TrackVisibility>
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={cx("flex flex-col gap-4", {
                  "animate__animated animate__fadeIn": isVisible
                })}
              >
                <Title>Get in touch</Title>
                <ContactForm />
              </div>
            )}
          </TrackVisibility>
        </Col>
      </div>
    </section>
  );
};

export default Contact;
