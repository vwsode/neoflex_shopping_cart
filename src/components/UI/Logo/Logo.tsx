import { FC } from "react";
import { ROUTES } from "@/constants/routes";
import { NavLink } from "react-router-dom";

import s from "./Logo.module.scss";

type Props = {};

const Logo: FC<Props> = () => {
    return (
        <NavLink className={s.logo} to={ROUTES.MAIN}>
            QPICK
        </NavLink>
    );
};

export default Logo;
