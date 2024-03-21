import { FC } from "react";
import { Container } from "@/components/UI";
import Grid from "./Grid/Grid";

import useProducts from "@/hooks/useProducts";

import s from "./Catalog.module.scss";

const Catalog: FC = () => {
    const { products } = useProducts();
    return (
        <div>
            <Container>
                <div className={s.wrap}>
                    <Grid title="Наушники" items={products} />
                </div>
            </Container>
        </div>
    );
};

export default Catalog;
