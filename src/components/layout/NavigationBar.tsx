import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from "../../Router";

const NavigationBar: FC = () => {

    return (
        <nav>
            <Link to={ROUTES.HOME.path}>Home</Link>
            <Link to={ROUTES.ANIMATIONS.path}>Animations</Link>
        </nav>
    );
};

export default NavigationBar;
