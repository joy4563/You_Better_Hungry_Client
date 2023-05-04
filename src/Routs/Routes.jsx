import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import PrivateRout from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ({ params }) =>
                    fetch(
                        `https://you-better-hungry-server-joy4563.vercel.app/chefs`
                    ),
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/chefs/:id",
                element: (
                    <PrivateRout>
                        <ChefRecipe></ChefRecipe>
                    </PrivateRout>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://you-better-hungry-server-joy4563.vercel.app/chefs/${params.id}`
                    ),
            },
        ],
    },
]);

export default router;
