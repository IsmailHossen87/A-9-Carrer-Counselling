import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  return (
  <>
    <div className="flex justify-between px-2 py-3 items-center text-black backdrop-blur-lg  sticky top-0 z-50 shadow-md">
      <div className='font-bold text-xl'>Career Counseling</div>
      {/* <div className="font-bold text-xl">{user && user.email}</div> */}
      <div className="flex space-x-3 items-center">
        {/* <Link to={"/login"}>login</Link>
        <Link to={"/register"}>Register</Link> */}
        <Link to={'/'} className='font-bold '>Home</Link>
      </div>
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
          <button onClick={logOut} className="btn btn-neutral border-none">
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
    </>
  );
};

export default Navbar;