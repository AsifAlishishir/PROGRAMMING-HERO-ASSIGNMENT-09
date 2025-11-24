import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInWithEmailPassword, setUser, handlgGoogleSignIn } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailPassword(email, pass)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state: '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleSignin = () => {
    handlgGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state: '/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleForget = () => {
    navigate(`/forget/${email}`)
    
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body w-86">
            <h2 className="text-center text-2xl font-semibold">Login</h2>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <button onClick={handleForget} className="link link-hover">
                  Forgot password?
                </button>
              </div>
              <div>
                <span>Don't have an account? </span>
                <Link
                  to={"/signup"}
                  className="text-blue-400 font-medium hover:underline"
                >
                  Register
                </Link>
              </div>
              <button onClick={googleSignin} className="btn">
                <FcGoogle /> <span>Sign in with Google</span>
              </button>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
