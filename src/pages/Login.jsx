import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { signInWithEmailPassword, setUser, handlgGoogleSignIn } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(null);

  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const isAnyLoading = isEmailLoading || isGoogleLoading;

  // Function to handle form submission (Email/Password)
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    setLoginError(null);
    setLoginSuccess(null);
    setIsEmailLoading(true);

    signInWithEmailPassword(email, pass)
      .then((result) => {
        const user = result.user;
        setUser(user);

        setLoginSuccess("Login successful! Redirecting...");

        setTimeout(() => {
          setIsEmailLoading(false);
          setLoginSuccess(null);
          navigate(location.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setIsEmailLoading(false);
        setLoginError("Login failed. Please check your email and password.");
      });
  };

  // Function to handle Google Sign-in
  const googleSignin = () => {
    setLoginError(null);
    setLoginSuccess(null);

    setIsGoogleLoading(true);

    handlgGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);

        setLoginError(null);
        setLoginSuccess("Google sign-in successful! Redirecting...");

        setTimeout(() => {
          setIsGoogleLoading(false);
          setLoginSuccess(null);
          navigate(location.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => {
        console.log("Google Sign-In Error:", err);
        setIsGoogleLoading(false);

        let errorMessage = "Google sign-in failed. Please try again.";
        if (err.code === "auth/popup-closed-by-user") {
          errorMessage =
            "Sign-in cancelled. Please don't close the Google window.";
        } else if (err.code === "auth/unauthorized-domain") {
          errorMessage =
            "Configuration error: The domain is not authorized in Firebase.";
        }

        setLoginError(errorMessage);
        setLoginSuccess(null);
      });
  };

  const handleForget = () => {
    if (!email) {
      toast.error("Enter a Mail First!!!");
      return;
    }
    navigate(`/forget/${email}`);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body w-70 sm:w-96">
            <h2 className="text-center text-3xl font-semibold">Login</h2>

            {loginSuccess && (
              <div
                className="p-3 mb-4 rounded-lg text-sm font-medium text-white text-center"
                style={{ backgroundColor: "#10b981" }}
              >
                {loginSuccess}
              </div>
            )}

            {loginError && (
              <div
                className="p-3 mb-4 rounded-lg text-sm font-medium text-white text-center"
                style={{ backgroundColor: "#ef4444" }}
              >
                {loginError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                disabled={isAnyLoading}
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                disabled={isAnyLoading}
              />
              <div>
                <button
                  onClick={handleForget}
                  className="link link-hover"
                  disabled={isAnyLoading}
                >
                  Forgot password?
                </button>
              </div>
              <div className="mb-2">
                <span>Don't have an account? </span>
                <Link
                  to={"/signup"}
                  className="text-blue-400 font-medium hover:underline"
                >
                  Register
                </Link>
              </div>

              <button
                onClick={googleSignin}
                className={`btn ${isGoogleLoading ? "btn-disabled" : ""}`}
                disabled={isAnyLoading}
              >
                {isGoogleLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Signing In...
                  </>
                ) : (
                  <>
                    <FcGoogle /> <span>Sign in with Google</span>
                  </>
                )}
              </button>

              <button
                className={`btn btn-neutral mt-4 ${
                  isEmailLoading ? "btn-disabled" : ""
                }`}
                type="submit"
                disabled={isAnyLoading}
              >
                {isEmailLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Logging In...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
