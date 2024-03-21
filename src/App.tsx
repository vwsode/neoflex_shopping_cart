import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "@/config/router";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App: FC = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={routerConfig}></RouterProvider>
        </Provider>
    );
};

export default App;
