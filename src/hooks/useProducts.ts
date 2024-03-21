import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const useProducts = () => {
    const { items } = useSelector((state: RootState) => state.products);

    return { products: items };
};

export default useProducts;
