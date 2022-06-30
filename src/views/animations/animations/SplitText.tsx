import gsap from 'gsap';
import React, { FC, useEffect, useRef } from 'react';
import "./splitText.scss";

const SplitText: FC = () => {

    const boxRef = useRef<HTMLDivElement>(null);
    const q = gsap.utils.selector(boxRef);

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
        <div ref={boxRef} className="split-text flex">{
            "Horse".split("").map((c) => <span key={c}>{c}</span>)
        }
        </div>
    );
};

export default SplitText;
