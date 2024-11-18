import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogOut = () => {
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* for responsive */}
              <Link to={"/"} className="font-bold ">
                Home
              </Link>
              <Link to={"/service"} className="font-bold ">
                Service
              </Link>
              {user && (
                <Link to={"/profile"} className="font-bold ">
                  Profile
                </Link>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-xl hidden md:block">
            Career Counseling
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4">
            <Link to={"/"} className="font-bold mr-3">
              Home
            </Link>
            <Link to={"/service"} className="font-bold mr-3">
              Service
            </Link>
            {user && (
              <Link to={"/profile"} className="font-bold ">
                Profile
              </Link>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <div>
              {user && user.email ? (
                <>
                  <div>
                    <img
                      className="w-[60px] rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                </>
              ) : (
                <img src={user} alt="" />
              )}
            </div>
            {user && user.email ? (
              <button
                onClick={handlelogOut}
                className="btn btn-neutral border-none"
              >
                {" "}
                Log Out
              </button>
            ) : (
              <Link to={"/login"} className="btn btn-neutral border-none">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
