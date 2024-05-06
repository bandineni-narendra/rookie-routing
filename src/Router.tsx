import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import ErrorPage from "./errorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <div>Hey Test how are you?</div>
            }
        ]
    }
])

export default router