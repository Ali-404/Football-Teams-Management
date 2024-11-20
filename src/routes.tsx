import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./pages/Layout/MainLayout";
import Dashboard from "./pages/Main/Dashboard";
import PlayerSearchPage from "./pages/player/PlayerSearchPage";
import PlayerView from "./pages/player/PlayerView";



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
                path: "/",
                element: <Dashboard />
            },
            {
                path: '/players',
                element: <PlayerSearchPage />,
                
            },
            {
                path: '/players/:player_name',
                element: <PlayerView />,
                
            },
            {
                path:"/formations",
            },
            {
                path:"/transer_window",
            },
            {
                path: '/matches'
            }
        ]
    },
    
]
const Routes = createBrowserRouter(RoutesArray);

export default Routes;