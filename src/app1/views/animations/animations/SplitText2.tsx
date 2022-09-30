import React, { FC, useEffect } from "react";
import "./splitText.scss";
import { useSelector2 } from "../../../hooks/useSelector2";
import gsap from "gsap";

const SplitText2: FC = () => {
  const [q, boxRef] = useSelector2();

  useEffect(() => {
    // const splitText = Splitting(boxRef.current?.innerText || "")
    // gsap.to triggers animations
    gsap.to(
      // The array of letters
      q("span"),
      // Animation duration in seconds
      0.7,
      {
        // Translate on X axis -40 pixels
        x: "-40",
        // Smooth out the stop/start with easeInOut
        ease: "power2.inOut",
        // Reverse the animation back to start
        yoyo: true,
        // Delay the next item in seconds
        stagger: 0.08,
        // Infinite repeat
        repeat: -1
      }
    );
  });

  return (
    <div ref={boxRef} className="split-text flex">
      {"Horse".split("").map((c) => (
        <span key={c}>{c}</span>
      ))}
    </div>
  );
};

export default SplitText2;
