import React from 'react';
import { Link } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <div className="font-sans leading-6">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
        <div className="text-2xl font-bold text-blue-800">Job Board</div>
        <nav className="flex gap-4">
          <a href="#" className="text-blue-800">Home</a>
          <a href="#" className="text-blue-800">About</a>
          <a href="#" className="text-blue-800">Company reviews</a>
        </nav>
        <div className="flex gap-4">
          <Link to="/sign-in" className="text-blue-800">Sign in</Link>
          <Link to="/sign-up" className="text-blue-800">Sign Up</Link>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-gray-50 py-5 text-center">
        <div className="inline-flex gap-2 items-center">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="p-3 text-lg border border-gray-300 rounded-md w-72"
          />
          <button className="p-3 bg-blue-800 text-white rounded-md">Search</button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex justify-around items-center py-10 bg-blue-50">
        <div className="max-w-md">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to Indeed!</h1>
          <p className="text-lg text-gray-600">Create an account or sign in to see your personalized job recommendations.</p>
          <button className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md">Get Started →</button>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Welcome illustration"
          className="max-w-xs"
        />
      </section>
    </div>
  );
};

export default DefaultPage;
