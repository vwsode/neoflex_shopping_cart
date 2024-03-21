import { FC } from "react";
import s from "./Grid.module.scss";

import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types/product.type";

type Props = {
    title: string;
    items: Product[];
};

const Grid: FC<Props> = ({ title, items }) => {
    return (
        <div className={s.gridWrap}>
            <h5 className={s.gridTitle}>{title}</h5>
            <div className={s.grid}>
                {items.map((item) => (
                    <ProductCard
                        id={item.id}
                        key={crypto.randomUUID()}
                        image={item.image}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        oldPrice={item.oldPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default Grid;
