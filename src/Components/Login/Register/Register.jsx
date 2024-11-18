import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Regsiter = () => {
  const { loginGoogle,createUser, setUser ,updateprofile} = useContext(AuthContext);
  const [error, setError] = useState({name:'',password:''});
  const navigate = useNavigate()
  const handleRegister = (event) => {
    event.preventDefault();
    setError({name:'',password:''})
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    let iserror = false;
    if ( password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)) {
      setError((prev)=>(
        {
          ...prev, password: "Password must be at least 6 characters, include uppercase and lowercase letters."
        }
      ))
      iserror = true;
    } 
   if (name.length < 5) {
      setError((prev)=>(
        {
          ...prev,
          name:'name must be 5 carecter'
        }
      ))
      iserror = true;
    }
    
    if(iserror){
      return;
    }
    createUser(email, password)
    .then((res) => {
      const user = res.user;
      updateprofile({displayName:name ,photoURL:photo})
      setUser({displayName:name ,photoURL:photo});
      navigate('/')
    })
    .catch((error) => {
    });
}
const handleGoogleRegister = ()=>{
  loginGoogle()
  navigate('/')
}

 
  return (
  <>
  <Navbar></Navbar>
  <div className="flex justify-center  items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-4">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
          <h2 className="font-bold text-xl text-center ">
          Register Your Account !
        </h2>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          {error.name && (
            <div className="font-bold text-red-600">{error.name}</div>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL//"
              className="input input-bordered"
            />
          </div>
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
            {error.password && (
              <div className="font-bold text-red-600">{error.password}</div>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 gap-4">
            <button className="btn btn-primary">Register</button>
            <button onClick={handleGoogleRegister} className="btn btn-secondary"><FaGoogle></FaGoogle> Google</button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already have an Account ?{" "}
          <Link
            className="font-semibold underline text-blue-600"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  <Footer></Footer>
  </>
  );
};

export default Regsiter;
