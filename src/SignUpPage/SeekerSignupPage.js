import React, { useState } from "react";

const SeekerSignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    portfolioURL: "",
    contactNumber: "",
    resume: null,
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Seeker Data Submitted:", formData);
    // Add API call or form validation logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Job Seeker Sign Up</h1>

        <label className="block text-sm font-medium text-gray-700 mt-4">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Portfolio URL</label>
        <input
          type="url"
          name="portfolioURL"
          placeholder="Enter your portfolio URL"
          value={formData.portfolioURL}
          onChange={handleChange}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Enter contact number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Resume (Upload)</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm"
        />

        <button
          type="submit"
          className="w-full p-3 mt-6 bg-indigo-600 text-white rounded-md text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SeekerSignupPage;
