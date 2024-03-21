import { FC } from "react";
import { useLocation } from "react-router-dom";

import { Container, Logo, NavControl } from "../UI";
import { ROUTES } from "@/constants/routes";
import useCart from "@/hooks/useCart";

import { CartIcon, HeartIcon } from "@/assets/icons";
import s from "./Header.module.scss";

const Header: FC = () => {
    const { items } = useCart();
    const { pathname } = useLocation();

    return (
        <header className={s.header}>
            <Container>
                <div className={s.wrap}>
                    <Logo />
                    <div className={s.controls}>
                        <NavControl
                            active={ROUTES.FAVORITES === pathname}
                            badge={2}
                            path={ROUTES.FAVORITES}
                        >
                            <HeartIcon />
                        </NavControl>
                        <NavControl
                            active={ROUTES.CART === pathname}
                            badge={items.length}
                            path={ROUTES.CART}
                        >
                            <CartIcon />
                        </NavControl>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
