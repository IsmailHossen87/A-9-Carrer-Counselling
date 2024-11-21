// import React, { useState, useContext, useEffect } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { FaCamera } from "react-icons/fa";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { Helmet } from "react-helmet";
// import { toast } from "react-toastify";

// const Profile = () => {
//   const { user, updateprofile, loader } = useContext(AuthContext);
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [newImage, setNewImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (user) {
//       setName(user.displayName || "");
//       setImage(user.photoURL || "https://via.placeholder.com/150");
//       setIsLoading(false);
//     }
//   }, [user]);

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);

//       let photoURL = image;

//       if (newImage) {
//         photoURL = URL.createObjectURL(newImage);
//       }

//       await updateprofile({
//         displayName: name,
//         photoURL: photoURL,
//       });

//       toast.sucess("Your Profile Updated!",{
//         position:'top-center',
//         autoClose:1200
//       })
//     } catch (error) {
//       console.error("Error updating profile:", error.message);
//       toast.warning("Failed to update profile.",{
//         position:'top-center',
//         autoClose:1200
//       })
//     } finally {
//       setIsLoading(false); // Hide loading indicator
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setNewImage(file);

//     // Create a preview URL for the selected image
//     if (file) {
//       setImage(URL.createObjectURL(file)); // Show the preview
//     }
//   };

//   return (
//     <>
//      <div className="container mx-auto">
//      <Navbar></Navbar>
//      </div>
//       <div>
//       <Helmet>
//           <title> Career Counseling || Profile</title>
//           <meta name="description" content="Helmet application" />
//         </Helmet>
//         <div className="flex justify-center items-center my-11">
//           <div className="card bg-base-100 w-full max-w-lg p-8 shadow-lg">
//             <h2 className="font-bold text-2xl text-center">My Profile</h2>

//             {isLoading ? (
//               <div className="flex justify-center mt-6">Loading...</div>
//             ) : (
//               <>
//                 <div className="flex justify-center mt-6">
//                   <div className="relative">
//                     <img
//                       src={image || "https://via.placeholder.com/150"}
//                       alt="Profile"
//                       className="w-32 h-32 rounded-full border-2 border-gray-300"
//                     />
//                     <label
//                       htmlFor="profile-image"
//                       className="absolute bottom-0 right-0 p-2 bg-gray-700 text-white rounded-full cursor-pointer"
//                     >
//                       <FaCamera />
//                     </label>
//                     <input
//                       id="profile-image"
//                       type="file"
//                       className="hidden"
//                       onChange={handleImageUpload}
//                     />
//                   </div>
//                 </div>

//                 <form onSubmit={handleUpdateProfile} className="mt-6">
//                   <div className="form-control">
//                     <label className="label">
//                       <span className="label-text">Name</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="input input-bordered w-full"
//                       required
//                     />
//                   </div>

//                   <div className="form-control mt-4">
//                     <label className="label">
//                       <span className="label-text">Email</span>
//                     </label>
//                     <input
//                       type="email"
//                       value={user?.email}
//                       className="input input-bordered w-full"
//                       disabled
//                     />
//                   </div>

//                   <div className="form-control mt-6">
//                     <button
//                       className={`btn btn-primary w-full ${
//                         isLoading ? "loading" : ""
//                       }`}
//                       type="submit"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto">
//       <Footer></Footer>
//       </div>
     
//     </>
//   );
// };

// export default Profile;
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
export default function ProfileCard() {
  const { user, updateNewProfile } = useContext(AuthContext);
  const Urlregex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  const naviage = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (name.trim() === "") {
      toast.error("please Write your name");
      return;
    }
    if (!Urlregex.test(photo)) {
      toast.error("invalid url photo");
      return;
    }
    updateNewProfile({ displayName: name, photoURL: photo });
    naviage("/");
  };
  return (
    <div>
      <Helmet>
        <title>Career | Update</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    <div className="container mx-auto">
      <Navbar></Navbar>
    </div>
        <div className="flex justify-center items-center  py-5 bg-gray-100">
          <div className="w-96 bg-white shadow-lg rounded-lg p-6">
            <div className="">
              <img
                src={user?.photoURL}
                alt="Profile Image"
                className="w-36 h-36 mx-auto rounded-full border-2 border-gray-300 shadow-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {user?.displayName}
              </h2>
              <div className="text-sm text-gray-600 flex items-center justify-between">
                <p>{user?.email}</p>
                <p>
                  {user?.emailVerified ? (
                    <span className="font-bold">Verified</span>
                  ) : (
                    <span className="text-red-700">Not Verified</span>
                  )}
                </p>
              </div>
              <div className="overflow-hidden">
              <p className="my-2">{user?.photoURL}</p>
              </div>
            </div>

            <form onSubmit={handleEdit} className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo-url"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      <Footer />
    </div>
  );
}