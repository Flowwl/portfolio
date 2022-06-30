import React, { FC } from 'react';
import SplitText from "./animations/SplitText";

const AnimationsView: FC = () => {
    return (
        <div className="h-full flex flex-column justify-center">
            <SplitText/>
        </div>
    );
};

export default AnimationsView;
