import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultPage from "./Pages/DefaultPage";
import SignInPage from "./Pages/SignInPage";
import AboutPage from "./Pages/AboutPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import EmployerSignupPage from "./SignUpPage/EmployerSignupPage";
import SeekerSignupPage from "./SignUpPage/SeekerSignupPage";
import SeekerDashboardPage from "./Pages/Seekerdashboard/SeekerDashboardPage"; // Import dashboard page
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/employer-signup" element={<EmployerSignupPage />} />
          <Route path="/seeker-signup" element={<SeekerSignupPage />} />
          <Route path="/dashboard" element={<SeekerDashboardPage />} /> {/* Dashboard route */}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
