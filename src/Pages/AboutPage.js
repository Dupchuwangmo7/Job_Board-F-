import React from 'react';

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Job Board Bhutan</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
        Job Board Bhutan is a platform dedicated to connecting Bhutanese job seekers with exciting career opportunities. 
        We aim to empower the youth of Bhutan by providing a transparent, youth-focused, and direct approach to employment.
      </p>
      <div className="mt-12 text-center">
        <img 
          src="https://via.placeholder.com/600x300" 
          alt="About Job Board Bhutan" 
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutPage;
