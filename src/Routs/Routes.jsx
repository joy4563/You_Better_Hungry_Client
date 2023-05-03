import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Recipe from "../components/recipe/Recipe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs`),
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
                element: <Recipe></Recipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`),
            },
        ],
    },
]);

export default router;
