import React from "react";

const SignUp = () => {
  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Backend OAuth route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          <img
            src="https://cdn.imgbin.com/23/7/2/imgbin-google-logo-google-search-icon-google-google-logo-hEJMjnfCV4MA1gDtjaWTv5kc1.jpg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
