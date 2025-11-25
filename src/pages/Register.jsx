import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerWithEmailPassword, handlgGoogleSignIn, setUser } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const isAnyLoading = isEmailLoading || isGoogleLoading;

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterError(null);
    setRegisterSuccess(null);
    setIsEmailLoading(true);

    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    // --- Password Validation Logic
    if (pass.length < 6) {
      setIsEmailLoading(false);
      return setRegisterError("Password must be at least 6 characters long.");
    }

    if (!uppercase.test(pass)) {
      setIsEmailLoading(false);
      return setRegisterError(
        "Password must contain at least one Uppercase letter (A-Z)."
      );
    }

    if (!lowercase.test(pass)) {
      setIsEmailLoading(false);
      return setRegisterError(
        "Password must contain at least one Lowercase letter (a-z)."
      );
    }

    registerWithEmailPassword(email, pass)
      .then((result) => {
        const user = result.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(user);
            setRegisterError(null);
            setRegisterSuccess("Registration successful! Redirecting...");

            setTimeout(() => {
              setIsEmailLoading(false);
              setRegisterSuccess(null);
              navigate(location.state ? location.state : "/");
            }, 1500);
          })
          .catch((error) => {
            console.log("Profile Update Error:", error);
            setIsEmailLoading(false);
            setRegisterError("Registration failed, please try again.");
          });
      })
      .catch((error) => {
        console.log("Registration Error:", error);
        setIsEmailLoading(false);

        let errorMessage = "Registration failed. Please try a different email.";
        if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already registered.";
        }
        setRegisterError(errorMessage);
      });
  };

  const googleSignup = () => {
    setRegisterError(null);
    setRegisterSuccess(null);
    setIsGoogleLoading(true);

    handlgGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setRegisterError(null);
        setRegisterSuccess("Google Sign-up successful! Redirecting...");

        setTimeout(() => {
          setIsGoogleLoading(false);
          setRegisterSuccess(null);
          navigate(location.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => {
        console.log("Google Sign-up Error:", err);
        setIsGoogleLoading(false);

        let errorMessage = "Google sign-up failed. Please try again.";
        if (err.code === "auth/popup-closed-by-user") {
          errorMessage =
            "Sign-up cancelled. Please don't close the Google window.";
        }
        setRegisterError(errorMessage);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body w-96">
            <h2 className="text-center text-2xl font-semibold">Register</h2>

            {registerSuccess && (
              <div
                className="p-3 mb-4 rounded-lg text-sm font-medium text-white text-center"
                style={{ backgroundColor: "#10b981" }}
              >
                {registerSuccess}
              </div>
            )}

            {registerError && (
              <div
                className="p-3 mb-4 rounded-lg text-sm font-medium text-white text-center"
                style={{ backgroundColor: "#ef4444" }}
              >
                {registerError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                disabled={isAnyLoading}
              />
              <label className="label">Name</label>
              <input
                required
                name="name"
                type="text"
                className="input"
                placeholder="Your name"
                disabled={isAnyLoading}
              />
              <label className="label">PhotoUrl</label>
              <input
                required
                name="photoUrl"
                type="text"
                className="input"
                placeholder="Enter your photurl"
                disabled={isAnyLoading}
              />
              <label className="label">Password</label>
              <input
                required
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                disabled={isAnyLoading}
              />

              <div className="my-3">
                <span>Already have an account? </span>
                <Link
                  to={"/login"}
                  className="text-blue-400 font-medium hover:underline"
                >
                  login
                </Link>
              </div>

              <button
                type="button"
                onClick={googleSignup}
                className={`btn ${isGoogleLoading ? "btn-disabled" : ""}`}
                disabled={isAnyLoading}
              >
                {isGoogleLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Signing Up...
                  </>
                ) : (
                  <>
                    <FcGoogle /> <span>Sign up with Google</span>
                  </>
                )}
              </button>

              <button
                className={`btn btn-neutral mt-4 ${
                  isEmailLoading ? "btn-disabled" : ""
                }`}
                disabled={isAnyLoading}
              >
                {isEmailLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Registering...
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
