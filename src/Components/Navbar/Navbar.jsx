import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogOut = () => {
    toast.success('logout Sucessfully!',{
      position:'top-center',
      autoClose:1200
    })
    logOut();
    navigate("/login");
  };
  return (
    <>
      <div className="navbar  backdrop-blur-lg  sticky top-0 z-50 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-35 p-2 shadow"
            >
              {/* for responsive */}
              <NavLink to={"/"} className="font-bold ">
                Home
              </NavLink>
              <NavLink to={"/service"} className="font-bold ">
                Service
              </NavLink>
              <NavLink to={"/contract"} className="font-bold ">
                ContractUs
              </NavLink>
              {user && (
                <NavLink to={"/profile"} className="font-bold ">
                  Profile
                </NavLink>
              )}
            </ul>
          </div>
          <a className="btn font-serif btn-ghost font-bold text-xl hidden md:block">
            Career Counseling
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4">
            <NavLink to={"/"} className="font-bold mr-3">
              Home
            </NavLink>
            <NavLink to={"/service"} className="font-bold mr-3">
              Service
            </NavLink>
            <NavLink to={"/contract"} className="font-bold mr-3">
                ContractUs
              </NavLink>
            {user && (
              <NavLink to={"/profile"} className="font-bold ">
                Profile
              </NavLink>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <div>
              {user && user.email ? (
                <>
                  <div className="relative group">
                    <img
                      className="w-[60px] rounded-full"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                    <div className="absolute w-[100px] text-center bottom-[-40px] left-1/2 transform -translate-x-1/2  bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-[100px]"> {user.displayName} </span>
                    </div>
                  </div>
                </>
              ) : (
                <img src={user} alt="" />
              )}
            </div>
            {user && user.email ? (
              <button
                onClick={handlelogOut}
                className="btn border-none"
              >
                {" "}
                Log Out
              </button>
            ) : (
              <NavLink to={"/login"} className="btn border-none">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
