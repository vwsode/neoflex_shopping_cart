import { NavLink } from "react-router-dom";
import { FC } from "react";

import { Container, Logo } from "../UI";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import { ROUTES } from "@/constants/routes";

import { TelegramIcon, VkIcon, WhatsAppIcon } from "@/assets/icons";
import s from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.wrap}>
                    <Logo />
                    <div className={s.navColumns}>
                        <nav className={s.nav}>
                            <NavLink
                                className={s.navLink}
                                to={ROUTES.FAVORITES}
                            >
                                Избранное
                            </NavLink>
                            <NavLink className={s.navLink} to={ROUTES.CART}>
                                Корзина
                            </NavLink>
                            <NavLink className={s.navLink} to={ROUTES.MAIN}>
                                Контакты
                            </NavLink>
                        </nav>

                        <nav className={s.nav}>
                            <NavLink
                                className={s.navLink}
                                to={ROUTES.FAVORITES}
                            >
                                Условия сервиса
                            </NavLink>
                            <LanguageSwitcher className={s.switcher} />
                        </nav>
                    </div>
                    <div className={s.contacts}>
                        <NavLink
                            className={s.contact}
                            to="https://vk.com/neoflex_ru"
                            target="_blank"
                        >
                            <VkIcon />
                        </NavLink>
                        <NavLink
                            className={s.contact}
                            to="https://t.me/neoflexcareers"
                            target="_blank"
                        >
                            <TelegramIcon />
                        </NavLink>
                        <NavLink className={s.contact} to="tel:+78001007728">
                            <WhatsAppIcon />
                        </NavLink>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
