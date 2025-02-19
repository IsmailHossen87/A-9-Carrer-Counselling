import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Components/Routers/Routers.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


console.log(Routers)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers}></RouterProvider>
     <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
