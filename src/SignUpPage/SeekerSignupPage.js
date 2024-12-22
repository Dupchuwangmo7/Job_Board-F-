import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SeekerSignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    portfolioURL: "",
    contactNumber: "",
    resume: null,
    location: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Password Validation
    const password = formData.password;
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password = "Password must contain at least one special character.";
    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Contact Number Validation
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{8}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be exactly 8 digits.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Job Seeker Data Submitted:", formData);
      // Navigate to dashboard after successful validation
      navigate("/dashboard");
    } else {
      console.log("Validation errors:", errors);
    }
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

        <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full p-3 mt-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md text-sm`}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

        <label className="block text-sm font-medium text-gray-700 mt-4">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full p-3 mt-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded-md text-sm`}
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}

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
          className={`w-full p-3 mt-2 border ${
            errors.contactNumber ? "border-red-500" : "border-gray-300"
          } rounded-md text-sm`}
        />
        {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}

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
