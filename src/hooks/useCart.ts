import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
    decreaseItem as decreaseItemAction,
    addItem as addItemAction,
    removeItem as removeItemAction,
} from "@/store/slices/cart.slice";

import { CartItem } from "@/types/product.type";

const useCart = () => {
    const { items, totalPrice } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch<AppDispatch>();

    const decreaseItem = (id: string | number, price: number) => {
        dispatch(
            decreaseItemAction({
                id,
                price,
            }),
        );
    };

    const addItem = (product: CartItem) => {
        dispatch(addItemAction(product));
    };

    const removeItem = (id: number | string) => {
        dispatch(
            removeItemAction({
                id,
            }),
        );
    };

    return { items, addItem, removeItem, totalPrice, decreaseItem };
};

export default useCart;
