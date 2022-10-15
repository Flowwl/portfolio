import React, { FC } from "react";
import cx from "classnames";
import socialContactImg from "../../assets/img/social-contact.svg";

interface SocialContactProps {
  className?: string;
}

const SocialContact: FC<SocialContactProps> = ({ className }) => {
  return <img src={socialContactImg} className={cx(className)} alt="Social Contact" />;
};

export default SocialContact;
