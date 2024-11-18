import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const emailRef = useRef(null); // Initialize useRef correctly
  const { createLogin, forgetPass } = useContext(AuthContext);
  const [showpassword, setshowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createLogin(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Handle Forget Password
  const handleForgetPass = () => {
    const email = emailRef.current.value; // Access value correctly
    if (email) {
      forgetPass(email);
    } else {
      alert("Please enter your email address first.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-4">
        <h2 className="font-bold text-xl text-center py-2">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              ref={emailRef} // Correct usage of ref
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
            <label className="label">
              <a
                onClick={handleForgetPass}
                className="label-text-alt link link-hover"
                href="#"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 gap-3">
            <button className="btn btn-primary">Login</button>
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
  );
};

export default Login;
