import React, { FC } from "react";
import IconButton from "../../atoms/IconButton";

const ComponentView: FC = () => {
  const sectionStyle = "flex items-center gap-4";
  return (
    <div className="flex flex-col w-2/3 mx-auto">
      <section className={sectionStyle}>
        <h1>Icon Button</h1>
        <IconButton iconName="FACEBOOK" />
      </section>
    </div>
  );
};

export default ComponentView;
