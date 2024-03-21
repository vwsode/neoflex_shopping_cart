import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout/Layout";
import { Cart, Catalog } from "@/pages";

import { ROUTES } from "@/constants/routes";

export const routerConfig = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Catalog />,
            },
            {
                element: <Cart />,
                path: ROUTES.CART,
            },
        ],
    },
]);
