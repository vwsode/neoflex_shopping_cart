import { FC } from "react";

import useCart from "@/hooks/useCart";

import { StarIcon } from "@/assets/icons";
import s from "./ProductCard.module.scss";

type Props = {
    image: string;
    title: string;
    rating: number;
    price: number;
    oldPrice?: number;
    id: number | string;
};

const ProductCard: FC<Props> = ({
    id,
    image,
    title,
    rating,
    price,
    oldPrice,
}) => {
    const { addItem } = useCart();

    const addItemHandler = (): void => {
        addItem({
            image,
            title,
            price,
            oldPrice,
            id,
            quantity: 1,
        });
    };

    return (
        <div className={s.card}>
            <img className={s.image} src={image} alt={title} />
            <div className={s.info}>
                <div className={s.infoLeft}>
                    <h5 className={s.title}>{title}</h5>
                    <div className={s.rating}>
                        <StarIcon />
                        <span className={s.ratingValue}>{rating}</span>
                    </div>
                </div>
                <div className={s.infoRight}>
                    <div className={s.prices}>
                        <span className={s.price}>{price} ₽</span>
                        {oldPrice && (
                            <span className={s.oldPrice}>{oldPrice} ₽</span>
                        )}
                    </div>
                    <button onClick={addItemHandler} className={s.btnBuy}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
