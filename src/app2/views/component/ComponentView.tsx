import React, { FC } from "react";
import IconButton from "../../atoms/IconButton";
import SlidingButton from "../../atoms/SlidingButton";

const ComponentView: FC = () => {
  const sectionStyle = "flex items-center gap-4";
  return (
    <div className="flex flex-col w-2/3 mx-auto gap-3">
      <section className={sectionStyle}>
        <h1>Icon Button</h1>
        <IconButton iconName="FACEBOOK" />
      </section>
      <section className={sectionStyle}>
        <h1>Sliding Button</h1>
        <SlidingButton>Let&apos;s Connect</SlidingButton>
      </section>
    </div>
  );
};

export default ComponentView;
