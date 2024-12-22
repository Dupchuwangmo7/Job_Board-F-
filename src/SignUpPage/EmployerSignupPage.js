import React, { useState } from "react";

// Reusable Input Component
const InputField = ({ label, type, name, value, placeholder, onChange, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-800 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-3 border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-lg text-sm`}
      autoComplete={type === "password" ? "new-password" : "on"}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// Reusable Textarea Component
const TextareaField = ({ label, name, value, placeholder, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-800 mb-2">{label}</label>
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

  const [errors, setErrors] = useState({}); // State to hold error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error for the specific field
  };

  const validatePassword = () => {
    const { password } = formData;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      setErrors((prev) => ({ ...prev, password: "Password must be at least 8 characters long." }));
      return false;
    }
    if (!hasUppercase) {
      setErrors((prev) => ({ ...prev, password: "Password must contain at least one uppercase letter." }));
      return false;
    }
    if (!hasLowercase) {
      setErrors((prev) => ({ ...prev, password: "Password must contain at least one lowercase letter." }));
      return false;
    }
    if (!hasDigit) {
      setErrors((prev) => ({ ...prev, password: "Password must contain at least one number." }));
      return false;
    }
    if (!hasSpecialChar) {
      setErrors((prev) => ({ ...prev, password: "Password must contain at least one special character." }));
      return false;
    }
    return true;
  };

  const validateContactNumber = () => {
    const { contactNumber } = formData;
    if (!/^\d{8}$/.test(contactNumber)) {
      setErrors((prev) => ({ ...prev, contactNumber: "Contact number must be exactly 8 digits." }));
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isPasswordValid = validatePassword();
    const isContactNumberValid = validateContactNumber();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match!" }));
      return; // Stop submission if passwords don't match
    }

    if (isPasswordValid && isContactNumberValid) {
      console.log("Employer Data Submitted:", formData);
      // Add API call or validation logic here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-300">
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
          error={errors.password}
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
          error={errors.confirmPassword}
        />

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
          error={errors.contactNumber}
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
          className="w-full p-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default EmployerSignupPage;
