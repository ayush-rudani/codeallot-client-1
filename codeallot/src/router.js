import {
    createBrowserRouter,
} from "react-router-dom";


import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateCodex from "./components/CreateCodex";


const router = createBrowserRouter
    ([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/new",
            element: <CreateCodex />,
        }
    ]);


export default router;