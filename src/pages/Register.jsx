import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const { registerWithEmailPassword, setUser, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    // console.log(email, pass, name, photoUrl);

    registerWithEmailPassword(email, pass)
      .then((result) => {
        const user = result.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            // console.log(user);
            setUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body w-86">
            <h2 className="text-center text-2xl font-semibold">Register</h2>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your name"
              />
              <label className="label">PhotoUrl</label>
              <input
                name="photoUrl"
                type="text"
                className="input"
                placeholder="Enter your photurl"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div>
                <span>Already have an account? </span>
                <Link
                  to={"/login"}
                  className="text-blue-400 font-medium hover:underline"
                >
                  login
                </Link>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
