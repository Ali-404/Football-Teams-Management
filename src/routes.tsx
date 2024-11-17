import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./pages/Layout/MainLayout";



const RoutesArray:RouteObject[] = [
    {
        path: "/signin",
        element: <Login/>,
        
    },
    {
        path: "/signup",
        element: <Register />
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path:"/formations",
            },
            {
                path:"/transer_window",
            },
            {
                path: 'matches'
            }
        ]
    },
    
]
const Routes = createBrowserRouter(RoutesArray);

export default Routes;