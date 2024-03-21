import { FC } from "react";

import useCart from "@/hooks/useCart";

import s from "./CartCard.module.scss";
import { MinusIcon, PlusIcon, ThrashIcon } from "@/assets/icons";

type Props = {
    image: string;
    quantity: number;
    price: number;
    oldPrice?: number;
    title: string;
    id: number | string;
};

const CartCard: FC<Props> = ({
    id,
    image,
    quantity,
    price,
    oldPrice,
    title,
}) => {
    const { removeItem, decreaseItem, addItem } = useCart();

    const removeItemHandler = () => {
        removeItem(id);
    };

    const decreaseItemHandler = () => {
        decreaseItem(id, price);
    };
    const increaseItemHandler = () => {
        addItem({
            id,
            image,
            price,
            oldPrice,
            title,
            quantity,
        });
    };

    return (
        <div className={s.card}>
            <div className={s.content}>
                <img className={s.image} src={image} alt={title} />
                <div className={s.info}>
                    <span className={s.title}>{title}</span>
                </div>
                <button onClick={removeItemHandler} className={s.btnRemove}>
                    <ThrashIcon />
                </button>
            </div>
            <div className={s.bottom}>
                <div className={s.quantity}>
                    <button
                        onClick={decreaseItemHandler}
                        className={s.quantityMinus}
                    >
                        <MinusIcon />
                    </button>
                    <span className={s.quantityValue}>{quantity}</span>
                    <button
                        onClick={increaseItemHandler}
                        className={s.quantityPlus}
                    >
                        <PlusIcon />
                    </button>
                </div>
                <span className={s.price}>
                    {(price * quantity).toLocaleString("ru")} ₽
                </span>
            </div>
        </div>
    );
};

export default CartCard;
