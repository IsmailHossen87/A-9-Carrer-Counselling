import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
  const { user, updateprofile, loader } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Local loader state for component

  // Fetch user data when the component loads or when the user state changes
  useEffect(() => {
    if (user) {
      // Set the user's current display name and photo URL
      setName(user.displayName || '');
      setImage(user.photoURL || 'https://via.placeholder.com/150');
      setIsLoading(false);
    }
  }, [user]); // Dependency array ensures this runs when 'user' changes

  // Handle updating profile information
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Show loading indicator

      let photoURL = image; // Default to the current image

      // If a new image is selected, handle the image upload (to Firebase Storage, for example)
      if (newImage) {
        // Your image upload logic goes here
        // Example: photoURL = await uploadImage(newImage);
        photoURL = URL.createObjectURL(newImage); // Temporary preview URL (Replace this with Firebase Storage URL)
      }

      // Update the Firebase Auth profile with the new name and photo URL
      await updateprofile({
        displayName: name,
        photoURL: photoURL,
      });

      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.message);
      alert('Failed to update profile.');
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  // Handle profile picture upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewImage(file);

    // Create a preview URL for the selected image
    if (file) {
      setImage(URL.createObjectURL(file)); // Show the preview
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg p-8 shadow-lg">
        <h2 className="font-bold text-2xl text-center">My Profile</h2>

        {isLoading ? (
          <div className="flex justify-center mt-6">Loading...</div>
        ) : (
          <>
            <div className="flex justify-center mt-6">
              <div className="relative">
                <img
                  src={image || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-2 border-gray-300"
                />
                <label htmlFor="profile-image" className="absolute bottom-0 right-0 p-2 bg-gray-700 text-white rounded-full cursor-pointer">
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
                <button className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`} type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
