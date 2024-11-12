import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "./pages/Login";



const RoutesArray:RouteObject[] = [
    {
        path: "/signin",
        element: <Login/>,
        
    },
    {
        path: "/signup",
        element: <div>Sign Up</div>
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