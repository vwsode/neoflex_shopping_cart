export type Product = {
    image: string;
    title: string;
    rating: number;
    price: number;
    oldPrice?: number;
    id: number | string;
};

export type CartItem = Omit<Product, "rating"> & {
    quantity: number;
};
