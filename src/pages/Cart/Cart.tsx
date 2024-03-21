import { FC } from "react";
import { Container } from "@/components/UI";

import Summary from "./Summary/Summary";
import ItemsList from "./ItemsList/ItemsList";
import useCart from "@/hooks/useCart";

import s from "./Cart.module.scss";

const Cart: FC = () => {
    const { items, totalPrice } = useCart();

    return (
        <div className={s.cart}>
            <Container>
                <h2 className={s.title}>Корзина</h2>
                <div className={s.content}>
                    <ItemsList items={items} />
                    <Summary totalPrice={totalPrice} />
                </div>
            </Container>
        </div>
    );
};

export default Cart;
