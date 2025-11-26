import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useParams } from "react-router";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgetPass = () => {
  const { email } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEmail = e.target.email.value;

    sendPasswordResetEmail(auth, formEmail)
      .then(() => {
        toast.success("Mail Sent successfully!!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center my-20">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body w-86">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              defaultValue={email}
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <button className="btn btn-neutral mt-4">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
