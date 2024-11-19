import React, { useRef, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const emailRef = useRef(null); 
  const navigate = useNavigate()
  const { forgetPass } = useContext(AuthContext);

  const handleForgetPass = (event) => {
    event.preventDefault(); 
    const email = emailRef.current.value; 
    if (email) {
      forgetPass(email); 
      navigate('/login')
    } else {
      alert("Please enter your email address first.");
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-3 shrink-0 shadow-2xl">
      <form onSubmit={handleForgetPass} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Forget Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forget;
