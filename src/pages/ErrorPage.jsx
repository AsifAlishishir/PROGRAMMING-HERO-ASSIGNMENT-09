import React from 'react';

const ErrorPage = ({ statusCode = 404, title, message }) => {
  // Determine title and message based on common status codes if not provided
  const defaultTitle = statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong';
  const defaultMessage = statusCode === 404 
    ? "We can't seem to find the page you're looking for. Please check the URL for typos."
    : "An unexpected error occurred. We're working on fixing it. Please try again later.";

  const displayTitle = title || defaultTitle;
  const displayMessage = message || defaultMessage;

  return (
    // Outer container: Full screen, light gray background, centered content
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4 font-sans text-center">
      
      {/* Content Card: DaisyUI 'card' component */}
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 p-8 sm:p-12">
        <div className="card-body p-0">
        
          {/* Status Code: Large, light text */}
          <div className="text-[6rem] sm:text-[8rem] font-extrabold text-neutral-content/30 leading-none tracking-tighter mb-4">
            {statusCode}
          </div>
          
          {/* Title and Message */}
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral mb-3">
            {displayTitle}
          </h1>
          <p className="text-lg text-neutral-content mb-8">
            {displayMessage}
          </p>
          
          {/* Actions: DaisyUI 'btn' components */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            {/* Primary Button */}
            <a 
              href="/" 
              className="btn btn-primary btn-lg" // DaisyUI classes: primary color, large size
            >
              Go to Homepage
            </a>
            
            {/* Secondary Button */}
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline btn-lg" // DaisyUI classes: outline style, large size
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      
      {/* Optional Illustration/Footer element */}
      <div className="mt-8 text-3xl opacity-50">
        <span role="img" aria-label="Broken Link">🔗❌</span>
      </div>
    </div>
  );
};

export default ErrorPage;