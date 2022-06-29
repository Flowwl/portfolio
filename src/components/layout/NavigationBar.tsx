import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from "../../Router";
import cx from "classnames"

const NavigationBar: FC = () => {
    const linkClass = "hover:underline"
    return (
        <nav className={cx(
            "bg-gray-800 text-white ",
            "flex justify-center items-center gap-3 h-16 "
        )}>
            <Link className={linkClass} to={ROUTES.HOME.path}>Home</Link>
            <Link className={linkClass} to={ROUTES.ANIMATIONS.path}>Animations</Link>
        </nav>
    );
};

export default NavigationBar;
