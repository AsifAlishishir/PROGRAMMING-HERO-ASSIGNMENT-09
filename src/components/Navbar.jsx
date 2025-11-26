import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const baseClasses = "font-medium text-[#000000]";

  const activeClasses =
    "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ";

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  return (
    <div className="navbar shadow-sm py-4 px-3 md:px-8 2xl:px-12 bg-purple-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow font-medium "
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/profile"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-[24px] md:text-3xl font-bold cursor-pointer bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent"
        >
          PetPaws
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-[16px]">
          <li>
            <NavLink to={"/"} className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/services"} className={getNavLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile"} className={getNavLinkClass}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom z-10"
              data-tip={user.displayName || "User Profile"}
            >
              <Link
                to="/profile"
                className="btn btn-ghost btn-circle avatar transition duration-200 ease-in-out hover:scale-[1.05]"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/L50W5P8/default-avatar.png"
                    }
                    alt={user.displayName || "User"}
                  />
                </div>
              </Link>
            </div>

            <button
              onClick={handleLogOut}
              className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white transition duration-200 ease-in-out hover:scale-[1.05]"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white transition duration-200 ease-in-out hover:scale-[1.05] px-6 py-5"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
