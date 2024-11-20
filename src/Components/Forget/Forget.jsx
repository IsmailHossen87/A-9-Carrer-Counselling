import React, { useRef, useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Forget = () => {
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { forgetPass ,forgetemail} = useContext(AuthContext);

  useEffect(() => {
      emailRef.current.value = forgetemail;
  }, []);

  const handleForgetPass = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      forgetPass(email)
        .then(() => {
          alert("Password reset email sent!");
          navigate("/login");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please enter your email address first.");
    }
  };

  return (
    <>
      <div className="container mx-auto ">
        <Navbar></Navbar>
      </div>
        <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
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
      <div className="mx-auto container">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Forget;
