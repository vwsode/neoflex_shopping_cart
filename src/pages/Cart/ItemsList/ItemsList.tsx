import CartCard from "@/components/CartCard/CartCard";
import { FC } from "react";

import s from "./ItemsList.module.scss";
import { CartItem } from "@/types/product.type";

type Props = {
    items: CartItem[];
};

const ItemsList: FC<Props> = ({ items }) => {
    return (
        <div className={s.list}>
            {!items.length ? (
                <div>Корзина пуста</div>
            ) : (
                items.map((item) => (
                    <CartCard
                        key={item.id}
                        image={item.image}
                        id={item.id}
                        quantity={item.quantity}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        title={item.title}
                    />
                ))
            )}
        </div>
    );
};

export default ItemsList;
