import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  // Navigate to Employer or Seeker page
  const handleNavigation = (role) => {
    if (role === "employer") {
      navigate("/employer-signup");
    } else if (role === "seeker") {
      navigate("/seeker-signup");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 w-full max-w-md rounded-lg shadow-lg text-center">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Job Board Bhutan</h2>
        <p className="text-gray-600 text-lg mb-6">Sign Up As</p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            className="py-2 px-6 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
            onClick={() => handleNavigation("employer")}
          >
            Employer
          </button>
          <button
            className="py-2 px-6 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
            onClick={() => handleNavigation("seeker")}
          >
            Seeker
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
