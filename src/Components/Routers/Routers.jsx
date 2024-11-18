import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import MainLayout from "../MainLayOut/MainLayout";
import Details from "../Details/Details";
import Error from "../Error/Error";
import PrivateRoute from "../ParivateRoute/PrivateRoute";
import Service from "../Service/Service";
import Contact from "../Contract/Contract";
import Profile from "../Profile/Profile";

const Routers = createBrowserRouter([
    { 
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>
    },

    {
        path:'/profile',
        element:<Profile></Profile>
    },
    {
        path:'/service',
        element:<Service></Service>
    },
    {
        path:'/contract',
        element:<Contact></Contact>
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
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: async () => {
          const response = await fetch('/PublicData.json'); 
          return response.json();
        },
      },
    
])
export default Routers;