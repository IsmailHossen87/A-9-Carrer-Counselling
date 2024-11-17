import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import MainLayout from "../MainLayOut/MainLayout";
import Details from "../Details/Details";
import PrivateRoute from "../ParivateRoute/PrivateRoute";

const Routers = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: async () => {
          const response = await fetch('/PublicData.json'); 
          return response.json();
        },
      },
    
])
export default Routers;