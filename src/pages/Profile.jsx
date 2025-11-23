import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="my-20 flex flex-col items-center space-y-3">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <h3 className="text-[20px] font-semibold">{user?.displayName}</h3>
      <p className="">{user?.email}</p>
      <button className="btn btn-primary">Update Profile</button>
    </div>
  );
};

export default Profile;
