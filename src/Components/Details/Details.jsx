// import React, { useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import { Helmet } from "react-helmet";
// import Footer from "../Footer/Footer";

// const Details = () => {
//   const data = useLoaderData();
//   const { id } = useParams();
//   const service = data.find((item) => item.id === parseInt(id));

//   const [comment, setComment] = useState("");
//   const [commentsList, setCommentsList] = useState([]);

//   const handleCommentSubmit = () => {
//     if (comment.trim()) {
//       setCommentsList((prevComments) => [...prevComments, comment]);
//       setComment("");
//     }
//   };
//   return (
//     <>
//       <Navbar></Navbar>
//       <div>
//         <Helmet>
//           <title> Career Counseling || details</title>
//           <meta name="description" content="Helmet application" />
//         </Helmet>
//         <div className="max-w-md mx-auto my-8  bg-white rounded-lg ">
//           <div className="card card-compact bg-base-100 w-full shadow-xl">
//             <figure>
//               <img
//                 src={
//                   service.image ||
//                   "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 }
//                 alt={service.serviceName}
//                 className="rounded-t-lg w-full h-48 object-cover"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="text-2xl font-bold mb-2">{service.serviceName}</h2>
//               <p className="text-gray-600 mb-1">
//                 <strong>Description:</strong> {service?.status}
//               </p>
//               <p className="text-gray-600 mb-1">
//                 <strong>Category:</strong> {service.category}
//               </p>
//               <p className="text-gray-600 mb-1">
//                 <strong>Description:</strong> {service?.description}
//               </p>

//               <h3 className="text-lg font-semibold mb-2">Give Your Feedback</h3>
//               <div className="flex gap-2 mb-4">
//                 <input
//                   type="text"
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   placeholder="Write a comment"
//                   className="flex-grow p-2 border rounded-lg"
//                 />
//                 <button
//                   onClick={handleCommentSubmit}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                 >
//                   Comment
//                 </button>
//                 {/* rating start */}
//               </div>
//               <div className="rating rating-md">
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orange-400"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orange-400"
//                     defaultChecked
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orange-400"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orange-400"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orange-400"
//                   />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="my-4 mx-auto  bg-gray-200 px-3 py-2 rounded-md w-1/3">
//                 <h4 className="text-lg font-semibold">All Comments:</h4>
//                 {commentsList.length === 0 ? (
//                   <p className="text-gray-500">No comments yet.</p>
//                 ) : (
//                   <ul className="list-disc list-inside mt-2">
//                     {commentsList.map((item, index) => (
//                       <li key={index} className="text-gray-700">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//         </div>
   

//       <Footer></Footer>
//     </>
//   );
// };

// export default Details;
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const service = data.find((item) => item.id === parseInt(id));

  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setCommentsList((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <Helmet>
          <title>Career Counseling || Details</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-lg p-4">
          {/* Responsive layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={
                  service.image ||
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt={service.serviceName}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            {/* Information Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{service.serviceName}</h2>
              <p className="text-gray-600">
                <strong>Category : </strong> {service.category}
              </p>
              <p className="text-gray-600 ">
                <strong>Pricing : </strong> {service.pricing}
              </p>
              <p className="text-gray-600 ">
                <strong>Counselor : </strong> {service.counselorName}
              </p>
              <p className="text-gray-600">
                <strong>Duration : </strong> {service.dateTime}
              </p>
              <p className="text-gray-600">
                <strong>Status : </strong> {service.status}
              </p>
              <p className="text-gray-600">
                <strong>Description : </strong> {service.description}
              </p>
            </div>
          </div>
           {/* Comment Section */}
           <h3 className="text-lg font-semibold mb-2">Write a Comment</h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment"
                  className="flex-grow p-2 border rounded-lg"
                />
                <button
                  onClick={handleCommentSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Comment
                </button>
              
              </div>
              
              {/* Rating */}
              <div className="rating rating-md mb-4">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="my-4">
                <h4 className="text-lg font-semibold">All Comments:</h4>
                {commentsList.length === 0 ? (
                  <p className="text-gray-500">No Have Any Comment</p>
                ) : (
                  <ul className="list-disc list-inside mt-2">
                    {commentsList.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => window.history.back()}
              >
                Back To Page
              </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
