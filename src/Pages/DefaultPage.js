import React from 'react';
import { Link } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow-lg">
        <div className="text-3xl font-bold">JobBoard Bhutan</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          <Link to="/about" className="text-white hover:text-yellow-300">About</Link>
          <a href="#" className="text-white hover:text-yellow-300">Companies</a>
        </nav>
        <div className="flex space-x-6">
          <Link to="/sign-in" className="text-white hover:text-yellow-300">Sign In</Link>
          <Link to="/sign-up" className="text-white hover:text-yellow-300">Sign Up</Link>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-red-500 py-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Find Your Dream Job in Bhutan</h1>
          <p className="mt-4 text-lg">Explore opportunities in Bhutan’s growing tech ecosystem and beyond.</p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Job title, skills, or company"
              className="p-4 w-full md:w-1/2 rounded-lg shadow-lg text-gray-800"
            />
            <button className="px-8 py-4 bg-white text-red-500 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-red-100 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">The Future of Bhutan’s Workforce is Here!</h2>
          <p className="mt-4 text-lg text-gray-700">Join the revolution of young Bhutanese professionals shaping tomorrow's industries.</p>
        </div>
      </section>

      {/* Why Choose Job Board Bhutan */}
      <section className="bg-gradient-to-r from-red-500 to-yellow-400 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">Why Job Board Bhutan?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold text-red-500">Youth-Focused</h3>
            <p className="mt-4 text-gray-700">Designed with Bhutanese youth in mind, find jobs that match your skills and ambitions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold text-red-500">Transparency First</h3>
            <p className="mt-4 text-gray-700">No more guessing. See job details, salary, and more upfront, so you make informed decisions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold text-red-500">Connecting You Directly</h3>
            <p className="mt-4 text-gray-700">Say goodbye to middlemen. Connect directly with local startups and top employers.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">What Bhutanese Youth are Saying</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-12">
            <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">“I found a job in a startup in Thimphu that aligns with my skills in tech. The process was quick and easy!”</p>
              <div className="mt-4 text-red-500 font-semibold">Tashi Dorji, Web Developer</div>
            </div>
            <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">“Job Board Bhutan helped me land a job in a field I never thought would be accessible to me!”</p>
              <div className="mt-4 text-red-500 font-semibold">Sonam Lhamo, Digital Marketer</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DefaultPage;
