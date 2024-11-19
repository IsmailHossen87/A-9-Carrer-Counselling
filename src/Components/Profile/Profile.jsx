import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaCamera } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user, updateprofile, loader } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setImage(user.photoURL || "https://via.placeholder.com/150");
      setIsLoading(false);
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      let photoURL = image;

      if (newImage) {
        photoURL = URL.createObjectURL(newImage);
      }

      await updateprofile({
        displayName: name,
        photoURL: photoURL,
      });

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("Failed to update profile.");
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewImage(file);

    // Create a preview URL for the selected image
    if (file) {
      setImage(URL.createObjectURL(file)); // Show the preview
    }
  };

  return (
    <>
     <div className="container mx-auto">
     <Navbar></Navbar>
     </div>
      <div>
      <Helmet>
          <title> Career Counseling || Profile</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="flex justify-center items-center my-11">
          <div className="card bg-base-100 w-full max-w-lg p-8 shadow-lg">
            <h2 className="font-bold text-2xl text-center">My Profile</h2>

            {isLoading ? (
              <div className="flex justify-center mt-6">Loading...</div>
            ) : (
              <>
                <div className="flex justify-center mt-6">
                  <div className="relative">
                    <img
                      src={image || "https://via.placeholder.com/150"}
                      alt="Profile"
                      className="w-32 h-32 rounded-full border-2 border-gray-300"
                    />
                    <label
                      htmlFor="profile-image"
                      className="absolute bottom-0 right-0 p-2 bg-gray-700 text-white rounded-full cursor-pointer"
                    >
                      <FaCamera />
                    </label>
                    <input
                      id="profile-image"
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>

                <form onSubmit={handleUpdateProfile} className="mt-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      className="input input-bordered w-full"
                      disabled
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      className={`btn btn-primary w-full ${
                        isLoading ? "loading" : ""
                      }`}
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
      <Footer></Footer>
      </div>
     
    </>
  );
};

export default Profile;
