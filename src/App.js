import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './Pages/DefaultPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import EmployerSignupPage from "./SignUpPage/EmployerSignupPage";
import SeekerSignupPage from "./SignUpPage/SeekerSignupPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/employer-signup" element={<EmployerSignupPage />} />
        <Route path="/seeker-signup" element={<SeekerSignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
