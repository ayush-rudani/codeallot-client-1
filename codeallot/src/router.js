import {
    createBrowserRouter,
} from "react-router-dom";


import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateCodex from "./components/CreateCodex";
import YourCodex from "./components/YourCodex";


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
        },
        {
            path: "/yourcodex",
            element: <YourCodex />,
        }
    ]);


export default router;