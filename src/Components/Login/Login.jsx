
import React, { useContext, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef(null);
  const { createLogin, loginGoogle,setforgetemail } = useContext(AuthContext);
  const [showpassword, setshowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const changeValue =event =>{
  setforgetemail(event.target.value)
}
  // Handle Login
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createLogin(email, password)
      .then((res) => {
        toast.sucess('login sucessfully!',{
          position:'top-center',
          autoClose:1200
        })
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.warning(`something rong `,{
          position:'top-center',
          autoClose:1200
        });
      });
  };

  const handleGooglelogin = () => {
    loginGoogle();
    navigate(location?.state || "/");
  };

  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center min-h-max">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-4">
          <h2 className="font-bold text-xl text-center py-2">
            Login Your Account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              onChange={changeValue}
                name="email"
                ref={emailRef}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showpassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => setshowPassword(!showpassword)}
                type="button"
                className="btn btn-xs absolute right-6 top-12"
              >
                {showpassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              <button className="font-bold text-start my-2">
                <NavLink to="/forget" state={{ email: emailRef.current?.value || "" }}>
                  Forgot password?
                </NavLink>
              </button>
            </div>
            <div className="form-control mt-3 ">
              <button className="btn btn-primary">Login</button>
              <div className="mt-3 flex items-center ">
                <p className="font-bold">login with !! </p>
                <button onClick={handleGooglelogin} className="btn btn-secondary">
                  <FaGoogle></FaGoogle> Google
                </button>
              </div>
            </div>
          </form>
          <p className="font-semibold text-center">
            Don't Have an Account?{" "}
            <Link className="font-semibold underline text-blue-600" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
