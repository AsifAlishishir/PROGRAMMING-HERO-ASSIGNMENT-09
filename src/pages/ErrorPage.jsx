import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = ({ statusCode = 404, title, message }) => {
  const defaultTitle =
    statusCode === 404 ? "Oops! Lost in the Snow" : "Something Went Wrong";
  const defaultMessage =
    statusCode === 404
      ? "It looks like your furry friend followed a trail that disappeared. We can't find this page."
      : "An unexpected error occurred while fetching treats. Our team is fetching help!";

  const displayTitle = title || defaultTitle;
  const displayMessage = message || defaultMessage;

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100  p-4 font-sans text-center">
        <div className="mb-6">
          <span
            className="text-6xl sm:text-7xl"
            role="img"
            aria-label="Lost Pet Illustration"
          >
            🐕‍🦺❓
          </span>
        </div>

        <div className="card w-full max-w-xl shadow-2xl bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-14 transform transition-all duration-300 hover:shadow-3xl">
          <div className="card-body p-0">
            <div
              className="text-[6rem] sm:text-[9rem] font-extrabold 
            bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent 
            leading-none tracking-tight mb-4 opacity-80"
            >
              {statusCode}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
              {displayTitle}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              {displayMessage}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/"
                className="btn btn-lg text-white font-bold px-8 shadow-md 
                         bg-linear-to-r from-[#632EE3] to-[#9F62F2] 
                         border-none hover:opacity-90 transition duration-300"
              >
                Take Me Back Home
              </a>

              <button
                onClick={() => window.history.back()}
                className="btn btn-lg btn-outline btn-neutral border-2 px-8 
                         hover:bg-neutral-focus bg-white hover:text-gray-500 transition duration-300"
              >
                Go Back (Last Treat)
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-sm text-gray-500 dark:text-gray-600">
          Need assistance? Check your internet connection or contact support.
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
