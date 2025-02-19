import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
 
  if (loader) {
    return (
      <>
        <div className="flex min-h-screen justify-center items-center">
        <span className="loading loading-spinner text-error"></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
