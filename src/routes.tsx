import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



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
        element: <div>Clubs</div>
    },
    {
        path: "/:clube_id",
        element: <div>Main Layout</div>,
        
    }
]
const Routes = createBrowserRouter(RoutesArray);

export default Routes;