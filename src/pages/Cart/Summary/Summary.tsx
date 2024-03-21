import { NavLink } from "react-router-dom";

import s from "./Summary.module.scss";
import { ROUTES } from "@/constants/routes";
import { FC } from "react";

type Props = {
    totalPrice: number;
};

const Summary: FC<Props> = ({ totalPrice }) => {
    return (
        <div className={s.summary}>
            <div className={s.param}>
                <span className={s.paramTitle}>ИТОГО</span>
                <span className={s.paramValue}>
                    {totalPrice ? `₽ ${totalPrice.toLocaleString("ru")}` : "--"}
                </span>
            </div>
            <NavLink className={s.btnConfirm} to={ROUTES.CART}>
                Перейти к оформлению
            </NavLink>
        </div>
    );
};

export default Summary;
