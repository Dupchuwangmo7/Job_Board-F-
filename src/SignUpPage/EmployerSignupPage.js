import React, { useState } from "react";

// Reusable Input Component
const InputField = ({ label, type, name, value, placeholder, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-lg text-sm"
      autoComplete={type === "password" ? "new-password" : "on"}
    />
  </div>
);

// Reusable Textarea Component
const TextareaField = ({ label, name, value, placeholder, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-lg text-sm resize-none"
    ></textarea>
  </div>
);

const EmployerSignupPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    contactNumber: "",
    description: "",
    location: "",
  });

  const [error, setError] = useState(""); // State to hold error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError(""); // Clear error when user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return; // Stop form submission if passwords don't match
    }

    console.log("Employer Data Submitted:", formData);
    // Add API call or validation logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Employer Sign Up
        </h1>

        <InputField
          label="Company Name"
          type="text"
          name="companyName"
          value={formData.companyName}
          placeholder="Enter company name"
          onChange={handleChange}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter email"
          onChange={handleChange}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={handleChange}
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
        />

        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}

        <InputField
          label="Website URL"
          type="url"
          name="website"
          value={formData.website}
          placeholder="Enter company website"
          onChange={handleChange}
        />

        <InputField
          label="Contact Number"
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          placeholder="Enter contact number"
          onChange={handleChange}
        />

        <TextareaField
          label="Company Description"
          name="description"
          value={formData.description}
          placeholder="Enter a short description of the company"
          onChange={handleChange}
        />

        <InputField
          label="Location"
          type="text"
          name="location"
          value={formData.location}
          placeholder="Enter location"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default EmployerSignupPage;
