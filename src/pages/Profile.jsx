import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const Profile = () => {
  
  const { user, setUser } = useContext(AuthContext);
  //   console.log(user);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    // console.log("before", isOpen);
    setIsOpen(!isOpen);
    // console.log("before", isOpen);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        setUser({ ...user, photoURL: photoUrl, displayName: name });
        toast.success("Profile Updated Successfully!!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center my-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-md transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.01]">
        <div className="flex flex-col items-center space-y-5 border-b border-gray-200 pb-8">
          <div className="avatar transition-transform duration-300 hover:scale-105">
            <div className="ring-primary ring-offset-base-100 w-32 h-32 rounded-full ring-4 ring-offset-4 overflow-hidden shadow-lg">
              <img
                src={
                  user?.photoURL ||
                  "https://via.placeholder.com/128?text=No+Photo"
                }
                alt="User Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h3 className="text-3xl font-extrabold text-gray-800">
            {user?.displayName || "User Name"}
          </h3>

          <div className="flex items-center space-x-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <p className="text-md font-medium">{user?.email}</p>
          </div>

          <button
            onClick={handleOpenForm}
            className="btn btn-primary btn-wide mt-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Update Profile
          </button>
        </div>

        {isOpen && (
          <div className="pt-8">
            <h4 className="text-xl font-semibold mb-4 text-gray-700">
              Edit Details
            </h4>
            <form onSubmit={handleUpdate} className="fieldset space-y-4">
              <div>
                <label className="label text-sm font-medium text-gray-600 mb-1 block">
                  Name
                </label>
                <input
                  defaultValue={user?.displayName}
                  name="name"
                  type="text"
                  className="input input-bordered w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition duration-150"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-600 mb-1 block">
                  Photo URL
                </label>
                <input
                  defaultValue={user?.photoURL}
                  name="photoUrl"
                  type="text"
                  className="input input-bordered w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition duration-150"
                  placeholder="Enter your photo URL"
                />
              </div>

              <button
                className="btn btn-neutral btn-block mt-6 shadow-md hover:shadow-lg transition-all"
                type="submit"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
