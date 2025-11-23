import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

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
        setUser({...user, photoURL: photoUrl, displayName: name})
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-20 flex flex-col items-center space-y-3">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <h3 className="text-[20px] font-semibold">{user?.displayName}</h3>
      <p className="">{user?.email}</p>
      <button onClick={handleOpenForm} className="btn btn-primary">
        Update Profile
      </button>

      {isOpen && (
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Name</label>
          <input
            defaultValue={user?.displayName}
            name="name"
            type="text"
            className="input"
            placeholder="Your name"
          />
          <label className="label">Photo URL</label>
          <input
            defaultValue={user?.photoURL}
            name="photoUrl"
            type="text"
            className="input"
            placeholder="Your Photo Url"
          />

          <button className="btn btn-neutral mt-4">Update</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
