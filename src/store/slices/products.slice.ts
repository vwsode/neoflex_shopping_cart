import { Product } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductsState {
    items: Product[];
}

const initialState: ProductsState = {
    items: [
        {
            id: 1,
            image: "/src/assets/images/airprods-max.jpg",
            title: "Apple BYZ S852I",
            rating: 4.5,
            price: 1000,
            oldPrice: 1200,
        },
        {
            id: 2,
            image: "/src/assets/images/beats.jpeg",
            title: "Apple EarPods",
            rating: 3.8,
            price: 800,
        },
        {
            id: 3,
            image: "/src/assets/images/pioneer.jpg",
            title: "Apple EarPods",
            rating: 4.2,
            price: 1500,
            oldPrice: 1800,
        },
        {
            id: 4,
            image: "/src/assets/images/sony.webp",
            title: "Apple BYZ S852I",
            rating: 4.9,
            price: 2000,
        },
    ],
};

export const proudctsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
});

// Action creators are generated for each case reducer function

export default proudctsSlice.reducer;
