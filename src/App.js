import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import EmployerPage from "./SignUpPage/EmployerPage";
import SeekerPage from "./SignUpPage/SeekerPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/employer-signup" element={<EmployerPage />} />
        <Route path="/seeker-signup" element={<SeekerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
