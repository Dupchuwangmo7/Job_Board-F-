import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State for password error message
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the password when the component mounts to prevent any pre-filled value
    setPassword("");
  }, []);

  const validatePassword = () => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      setPasswordError("Password must be at least 8 characters long.");
      return false;
    }
    if (!hasUppercase) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!hasLowercase) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (!hasDigit) {
      setPasswordError("Password must contain at least one number.");
      return false;
    }
    if (!hasSpecialChar) {
      setPasswordError("Password must contain at least one special character.");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the password before proceeding
    if (!validatePassword()) {
      return;
    }

    // Handle the login logic, for now, we just log the details
    console.log(email, password);
    // Redirect to dashboard or another page
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-300">
      <div className="bg-white rounded-lg p-8 w-96 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome back</h2>
        <p className="text-gray-600 text-sm mb-6">Enter your details to sign in</p>
        
        <form onSubmit={handleSubmit}>
          <label className="block text-left text-sm text-gray-800 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
            required
            autoComplete="email"  // Optional: Allows the browser to autofill email but not password
          />

          <label className="block text-left text-sm text-gray-800 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 mb-2 border border-gray-300 rounded-md text-sm"
            required
            autoComplete="new-password"  // Prevents the browser from pre-filling the password
          />
          {passwordError && ( // Conditionally render password error
            <p className="text-left text-sm text-red-600 mb-4">{passwordError}</p>
          )}

          <button
            type="submit"
            className="w-full p-3 mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-md text-lg hover:bg-indigo-600 transition duration-200"
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg text-gray-800"
          >
            Sign in with Google
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
