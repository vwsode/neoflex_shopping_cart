import type { CartItem } from "@/types/product.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
    items: CartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const { id, price } = action.payload;
            const item = state.items.find((item) => item.id === id);

            if (item) {
                item.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            state.totalPrice += price;
        },
        removeItem: (
            state,
            action: PayloadAction<{
                id: string | number;
            }>,
        ) => {
            const { id } = action.payload;

            const item = state.items.find((item) => item.id === id);

            if (item) {
                state.items = state.items.filter((item) => item.id !== id);
                state.totalPrice -= item.price * item.quantity;
            }
        },
        decreaseItem: (state, action: PayloadAction<CartItem>) => {
            const { id, price } = action.payload;
            const item = state.items.find((item) => item.id === id);

            if (!item) return;

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                state.items = state.items.filter((item) => item.id !== id);
            }

            state.totalPrice -= price;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
