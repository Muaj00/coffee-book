import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";
import CoffeeDetails from "../pages/CoffeeDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../../public/categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch('../../public/coffees.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch('../../public/coffees.json'),
                    },
                ],
            },
            {
                path: '/coffees',
                element: <Coffees></Coffees>,
                loader: () => fetch('../../public/coffees.json'),
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/coffee/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: () => fetch('../../public/coffees.json'),
            },
        ],
    },
]);

export default routes;