import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
const {setUser,createLogin} = useContext(AuthContext)

const location = useLocation()
const navigate = useNavigate()
const handleLogin = event =>{
  event.preventDefault()
  const email = event.target.email.value;
  const password = event.target.password.value;
  createLogin(email,password)
  .then(res =>{
    const user = res.user;
    console.log(user)
    navigate(location?.state ? location.state : '/')
  })
  .catch(error =>{
    alert(error.message)
  })
}
  return (
    <div className="flex justify-center -mt-20 items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-4">
        <h2 className="font-bold text-xl text-center py-2">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="font-semibold text-center">Don't Have an Account ? <Link className="font-semibold underline text-blue-600" to={'/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
