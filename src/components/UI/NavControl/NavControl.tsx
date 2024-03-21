import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import s from "./NavControl.module.scss";

type Props = {
    children: ReactNode;
    badge?: number;
    path: string;
    active?: boolean;
};

const NavControl: FC<Props> = ({ children, path, badge, active = false }) => {
    return (
        <NavLink
            className={cn(s.control, {
                [s.active]: active,
            })}
            to={path}
        >
            {!!badge && <span className={s.badge}>{badge}</span>}
            {children}
        </NavLink>
    );
};

export default NavControl;
