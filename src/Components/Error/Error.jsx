import React from "react";
import errorImage from "../../assets/http-errors.jpg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div>
        <img className="rounded-2xl" src={errorImage} alt="" />
      </div>
      <div className="mt-3">
        <Link className="underline text-purple-500 font-bold text-xl" to={'/'}>Go Back</Link>
      </div>
    </div>
  );
};

export default Error;
